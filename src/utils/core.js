import eventBus from '@/utils/eventBus.js'
import postcss from "postcss";
import postcssJs from "postcss-js"
import {deepClone, uuid} from "./tool";
import {
    SimpleStore,
    PagesStore,
    ComponentListStore,
    CommonStatusStore,
    MouseEventStore,
    UndoRedoStore
} from '@/stores/counter'
import {saveAs} from 'file-saver';
import {ElMessage} from "element-plus";
import {ECVue} from "./ECVue";
import JSZip from "jszip";
import {ecTemplate} from "./ecTemplate";
import prettier from "prettier/standalone"
import parserHtml from "prettier/plugins/html"
import parserCss from "prettier/plugins/postcss"


export function getStore(name) {
    switch(name){
        case "PagesStore":
            return PagesStore()
        case "ComponentListStore":
            return ComponentListStore()
        case "SimpleStore":
            return SimpleStore()
        case "CommonStatusStore":
            return CommonStatusStore()
        case "MouseEventStore":
            return MouseEventStore()
        case "UndoRedoStore":
            return UndoRedoStore()
    }
}

const debounce = (function () {
    let timer = 0
    let lastTimer = 0
    return function (fn, delay = 300, immediate = true) {
        if (timer) {
            clearTimeout(timer)
        }
        if (immediate) {
            // 立即执行
            let callNow = !timer
            timer = setTimeout(() => {
                if (lastTimer !== timer) {
                    timer = 0
                    lastTimer = 0
                    fn()
                }
            }, delay)
            if (callNow) {
                lastTimer = timer
                fn()
            }
        } else {
            // 非立即执行
            timer = setTimeout(() => {
                fn()
                timer = 0
            }, delay)
        }
    }
})()

// 模拟路由跳转
export function ecRouter(path) {
    eventBus.emit("router", {path: path})
}

// 返回当前页面绑定的数据
export function getPageData(attribute, EcVue) {
    const params = analysisData(attribute)
    let setData = EcVue
    let result = ''
    if (params.length > 0) {
        let length = params.length
        result = (setData !== null && setData[params[0]]) ? setData[params[0]] : ''
        if (setData) {
            for (let i = 1; i < length; i++) {
                result = result[params[i]]
            }
        }
        return result
    }
}

// 设置当前页面绑定的数据
export function setPageData(attribute, value, EcVue) {
    const params = analysisData(attribute)
    let setData = EcVue
    if (params.length > 0) {
        let length = params.length
        for (let i = 0; i < length - 1; i++) {
            setData = setData[params[i]]
        }
        setData[params[length - 1]] = value
    }
}

// 解析数据绑定的数值
function analysisData(param) {
    if (!param) {
        return []
    }
    return param.split(".")
}

export function initProject() {
    let pageData = getLocalStorage()

    pageData.forEach(item => {
        item.EcVue = createEcVue(item.ecVueInfo)
    })
    getStore("PagesStore").setPage(pageData)
}


// 预览时展示的界面
export function previewPage(index) {
    let result = {page: [], css: {}, message: "请先选择或创建页面", isPage: false}
    if (index !== -1) {
        let localPage = getLocalStorage()
        if (localPage.length > 0) {
            result.pageName = localPage[index].pageName
            result.page = localPage[index].children
            result.isPage = true
            result.css = localPage[index].css
            result.EcVue = createEcVue(localPage[index].ecVueInfo)
        }
        getStore("PagesStore").setPreviewPage(localPage[index])
    }

    return result
}


// 撤销
export function undo() {
    getStore("UndoRedoStore").undo()
}

// 撤销回退
export function redo() {
    getStore("UndoRedoStore").redo()
}

// 启动拖拽事件
export function draggableStart(e) {
    e.dataTransfer.setData('index', e.target.dataset.index)
    e.effectAllowed = "copyMove";
}

// 拖拽到画布时的事件
export function handleDragOver(e) {
    e.preventDefault()
    e.stopPropagation()
}

// 右键菜单
export function rightClickContextmenu(ref, p, contextmenuData, event) {
    p.preventDefault()
    p.stopPropagation()
    const editor = getEditor(ref)
    // 展示右键菜单
    contextmenuData.showContextmenu = true
    contextmenuData.style = {
        "left": `${p.clientX - editor.x}px`,
        "top": `${p.clientY - editor.y}px`
    }
    event(p, contextmenuData)
}

/*
client [x,y] 相对于浏览器左上角计算
offset [x,y] 相对于当前元素的左上角
layer  [x,y] 设置定位的元素左上角，否则为body
page   [x,y] 当前页面
screen [x,y] 当前屏幕
 */

// 改变组件的外边距
function changeMargin(style, X, Y, oldX, oldY) {
    if (isNaN(oldX) && isNaN(oldY))
        return
    // 没有margin时的操作
    style['margin-left'] = `${oldX + X}px`
    style['margin-top'] = `${oldY + Y}px`
}

// 当组件定位布局是可以更换上下左右坐标
function changePosition(style, X, Y, oldX, oldY) {
    if (isNaN(oldX) && isNaN(oldY))
        return
    style['left'] = `${oldX + X}px`
    style['top'] = `${oldY + Y}px`
}

function getCssAttributeValue(param) {
    let value = 0
    if (param.indexOf('px') != -1) {
        value = Number(param.replace('px', ''))
    }
    return value
}

// 组件拖拽功能
export function moveComponent(e, index, dragObject) {
    // 只有按住左键时才进行拖拽
    if (e.buttons != 1) return
    handleDragOver(e)
    // 是否可以进行推拽
    let startClientY = e.clientY
    let startClientX = e.clientX
    let message = `选中${dragObject.label}组件`
    // node当前鼠标悬浮的元素
    let targetInfo = {
        target: null,
        direction: 'right'
    }
    // 获取元素的初始内边距
    let locationInfo = null
    if (getStore("CommonStatusStore").editMargin || getStore("CommonStatusStore").editPosition) {
        locationInfo = initPositionOrMargin(e, dragObject, getStore("CommonStatusStore").editPosition, getStore("CommonStatusStore").editMargin)
        message = `调整${dragObject.label + locationInfo.type}`
    }
    eventBus.emit(`move-dragTip`, {style: {top: e.clientY + 'px', left: e.clientX + 'px'}, message: message})
    let oldDocument = null
    let oldDirection = 'left'
    const move = (moveEvent) => {
        eventBus.emit(`move-dragTip`, {
            style: {top: moveEvent.clientY + 'px', left: moveEvent.clientX + 'px', display: ''},
            message: null
        })
        // 开启编辑margin与position时 拖拽调整的是margin和position相关的left，top else 修改元素在数组中的位置
        if (locationInfo !== null) {
            if (locationInfo.type === 'position') {
                changePosition(dragObject.styles, (moveEvent.clientX - startClientX), (moveEvent.clientY - startClientY), locationInfo.oldX, locationInfo.oldY)
                eventBus.emit(`move-dragTip`, {
                    style: {top: moveEvent.clientY + 'px', left: moveEvent.clientX + 'px', display: ''},
                    message: `left:${(moveEvent.clientX - startClientX) + locationInfo.oldX}<br>  top:${(moveEvent.clientY - startClientY + locationInfo.oldY)}`
                })
            } else {
                changeMargin(dragObject.styles, (moveEvent.clientX - startClientX), (moveEvent.clientY - startClientY), locationInfo.oldX, locationInfo.oldY)
                eventBus.emit(`move-dragTip`, {
                    style: {top: moveEvent.clientY + 'px', left: moveEvent.clientX + 'px', display: ''},
                    message: `margin-left:${(moveEvent.clientX - startClientX) + locationInfo.oldX}<br>  margin-top:${(moveEvent.clientY - startClientY + locationInfo.oldY)}`
                })
            }
        } else {
            targetInfo = mousemoveInfo(moveEvent)
            if (dragObject.id !== moveEvent.target.dataset.elementid) {
                if ((oldDocument !== moveEvent.target || oldDirection !== targetInfo.direction) && moveEvent.target.dataset.shape === 'true') {
                    if (oldDocument) {
                        oldDocument.style['outline'] = ''
                        oldDocument.style['position'] = ""
                        oldDocument.style['z-index'] = ""
                    }
                    oldDocument = moveEvent.target
                    oldDirection = targetInfo.direction
                    oldDocument.style['outline'] = `2px solid ${targetInfo.direction === 'left' ? 'green' : 'orange'}`
                    oldDocument.style['position'] = "relative"
                    oldDocument.style['z-index'] = "1020"
                }
                if (!moveEvent.target.dataset.shape) {
                    if (oldDocument) {
                        oldDocument.style['outline'] = ''
                        oldDocument.style['position'] = ""
                        oldDocument.style['z-index'] = ""
                    }
                    oldDocument = null
                }
            }
        }

    }

    upMouse(move, () => {
        // 用于拖拽时的提示定位
        eventBus.emit(`move-dragTip`, {style: {top: 0, left: 0, display: 'none'}, message: null})
        if (oldDocument) {
            oldDocument.style['outline'] = ''
            oldDocument = null
        }
        if (getStore("CommonStatusStore").editMargin || getStore("CommonStatusStore").editPosition) return
        if (upMouseMoveInfo(targetInfo.target, dragObject, targetInfo.direction, index)) {
            getStore("UndoRedoStore").addOperation('moveComponent')
        }
    })

}

function initPositionOrMargin(moveEvent, dragObject, position, margin) {
    //当被拖拽元素是锁定状态时不进行初始化
    if (!dragObject.status.lock) {
        let result = {oldX: 0, oldY: 0, type: 'position'}
        // 当是定位时可以直接修改left 于 top
        if (position && !margin) {
            if (dragObject.styles['left']) {
                result.oldX = getCssAttributeValue(dragObject.styles['left'])
            } else {
                result.oldX = moveEvent.clientX - moveEvent.offsetX
            }
            if (dragObject.styles['top']) {
                result.oldY = getCssAttributeValue(dragObject.styles['top'])
            } else {
                result.oldY = moveEvent.clientY - moveEvent.offsetY
            }
            dragObject.styles['position'] = dragObject.styles['position'] ? dragObject.styles['position'] : 'absolute'
            return result
        } else if (margin) {
            if (dragObject.styles['margin-left']) {
                result.oldX = getCssAttributeValue(dragObject.styles['margin-left'])
            }
            if (dragObject.styles['margin-top']) {
                result.oldY = getCssAttributeValue(dragObject.styles['margin-top'])
            }
            result.type = "margin"
            return result
        }
    }
    return null
}


// 获取鼠标悬停在组件的那个方位上
function getMousePosition(moveEvent) {
    let mX = moveEvent.offsetX//鼠标X轴坐标
    let scX = moveEvent.target.offsetWidth / 2
    return mX <= scX ? "left" : "right"
}

//鼠标松开时的事件
export function upMouseMoveInfo(target, dragObject, direction, index) {
    try {
        // 父组件不能拖动到子组件上
        if (!dragAllowed(target, dragObject)) return
        const pageComponents = getStore("PagesStore").getNowPage().children
        const insertIndex = direction === 'right' ? target.index + 1 : target.index
        // 统一个容器下目标下表要是大于当前下标则当前下表+1
        let deleteIndex = index > target.index && target.featherId === dragObject.featherId ? index + 1 : index
        const rootId = "editor"
        let targetComponents = null
        let dragComponents = null
        // 当将组件拖拽到画布上时调用
        if (dragObject.featherId !== rootId) {
            dragComponents = searchComponent(dragObject.featherId).children
        } else {
            dragComponents = pageComponents
        }
        if (target.elementType === "container") {
            deleteIndex = index
            dragObject.featherId = target.elementId
            targetComponents = searchComponent(target.elementId).children
        }
        if (target.elementType === "common") {
            if (target.featherId !== rootId) {
                if (dragObject.featherId === target.featherId) {
                    targetComponents = dragComponents
                } else {
                    targetComponents = searchComponent(target.featherId).children
                }
            } else {
                targetComponents = pageComponents
            }
            dragObject.featherId = target.featherId
        }
        if (target.elementType === rootId) {
            dragObject.featherId = rootId
            targetComponents = pageComponents
        }

        targetComponents.splice(isNaN(insertIndex) ? targetComponents.length : insertIndex, 0, dragObject)
        dragComponents.splice(deleteIndex, 1)
        targetComponents = null
        dragComponents = null
        return true
    } catch (e) {
        console.log(e)
    }
    return false
}

// 是否允许进行拖拽插入
function dragAllowed(target, dragObject) {
    if (target === null) return false
    if (!target.id) return false
    if (target.lock || target.featherId === dragObject.id || target.featherId === "") return false
    if (isFeatherComponent(dragObject, target.elementId)) return false
    if (target.elementType === "container" && dragObject.type === "container") {
        if (target.id === dragObject.id || isLayer(dragObject, target.elementId)) return false
    }
    return true
}

//拖拽到画布前配置组件相关数据
export function handleDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    let component = deepClone(getStore("ComponentListStore").componentList.find((data) => data.component === e.dataTransfer.getData('index')))
    // 若添加成功返回true 并在撤销回退中记录
    console.log(e)
    if (component) {
        if (addComponent(getTarget(e.target.dataset), component, e)) {
            getStore("UndoRedoStore").addOperation('addComponent')
        }
    } else {
        ElMessage({message: "未找到相关组件", type: 'warning', duration: 2000, showClose: true,})
    }
}

// 添加组件
export function addComponent(target, component, e) {
    try {
        if (target.lock && component) {
            return false
        }
        let temporary = getTargetArray(target)
        let index = target.index
        if (target.elementType === "common") {
            let direction = getMousePosition(e)
            if (direction === "right" || direction === "bottom") {
                index++
            }
        }
        if (component instanceof Array) {
            if (isNaN(index)) {
                updateId(component, target.id).forEach(item => {
                    item.status.active = false // 消除选中状态
                    temporary.children.push(item)
                })
            } else {
                updateId(component, target.id).forEach(item => {
                    item.status.active = false // 消除选中状态
                    temporary.children.splice(index++, 0, item)
                })
            }
        } else {
            component.id = uuid()
            component.featherId = target.id
            if (component.type === "container" && component.children.length > 0) {
                component.children.forEach(item => {
                    item.id = uuid()
                    item.featherId = component.id
                })
            }
            if (temporary) {
                temporary.children.splice(isNaN(index) ? temporary.children.length : index, 0, component)
            }
        }
        temporary = null
        return true
    } catch (e) {
        console.log(e)
    }
    return false
}

// 组件粘贴
export function stickup() {
    // 获取选中的数据
    try {
        let e = getStore("MouseEventStore").mouseEvent
        if (addComponent(getTarget(e.target.dataset), deepClone(getStore("SimpleStore").copyPlate), e)) {
            // 向操作中增加记录
            getStore("UndoRedoStore").addOperation('stickComponent')
        }
        e = null
    } catch (e) {
        console.log(e)
    }
}

// 当id 或者类型为editor时直接返回页面数据进行操作，否则返回对应组件的信息
function getTargetArray(target) {
    if (target.elementType == "editor" || target.id === "editor") {
        return getStore("PagesStore").getNowPage()
    } else {
        return searchComponent(target.id)
    }
    return null
}

// 返回修正后的目标信息
function getTarget(target) {
    return {
        elementType: target.elementtype,
        elementId: target.elementid,
        featherId: target.featherid,
        index: Number(target.index),
        lock: target.lock === "true" ? true : false,
        id: target.elementtype === "editor" ? "editor" : target.elementtype === "container" ? target.elementid : target.featherid
    }
}

//移动鼠标时
function mousemoveInfo(moveEvent) {
    return {
        direction: getMousePosition(moveEvent),
        target: getTarget(moveEvent.target.dataset)
    }
}

// 搜索组件
export function searchComponent(targetId) {
    return deepSelectComponent(getStore("PagesStore").getNowPage().children, targetId)
}

//左右键选择组件事件
export function clickSelectComponent(e, component, index) {
    e.preventDefault()
    e.stopPropagation()
    const selectPlate = getStore("SimpleStore").selectPlate
    // 按住ctrl进行多选时触发
    if (e.ctrlKey) {
        // 若选中则改为未被选中状态，未选中则选中
        if (component.status.active) {
            component.status.active = false
            // 获取被选中的元素并删除
            const length = selectPlate.length
            for (let i = 0; i < length; i++) {
                if (selectPlate[i].index == index) {
                    selectPlate.splice(i, 1)
                    break
                }
            }
        } else {
            component.status.active = true
            selectPlate.push(component)
        }
    } else {
        // 左键单击时触发 1，右键单击时触发 2，
        if (e.buttons == 1) {
            // 将其他选中的元素全部置为未被选中状态
            selectPlate.forEach(item => {
                item.status.active = false
            })
            // 将单击元素设为选中状态
            component.status.active = true
            selectPlate.splice(0)
            selectPlate.push(component)
        } else if (e.buttons == 2) {
            // 只有当未被选中时才会进行选中触发
            if (!component.status.active) {
                component.status.active = true
                selectPlate.push(component)
            }
        }
    }
}

// 取消移动事件监听
function upMouse(move, method) {
    const up = (e) => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
        method()
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
}

// 设置光标方向
function getCursor(elementRotate) {
    const pointList = ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'] // 八个方向
    const initialAngle = { // 每个点对应的初始角度
        lt: 0,
        t: 45,
        rt: 90,
        r: 135,
        rb: 180,
        b: 225,
        lb: 270,
        l: 315,
    }
    const angleToCursor = [ // 每个范围的角度对应的光标
        {start: 338, end: 23, cursor: 'nw'},
        {start: 23, end: 68, cursor: 'n'},
        {start: 68, end: 113, cursor: 'ne'},
        {start: 113, end: 158, cursor: 'e'},
        {start: 158, end: 203, cursor: 'se'},
        {start: 203, end: 248, cursor: 's'},
        {start: 248, end: 293, cursor: 'sw'},
        {start: 293, end: 338, cursor: 'w'},
    ]
    const rotate = mod360(elementRotate) // 取余 360
    const result = {}
    let lastMatchIndex = -1 // 从上一个命中的角度的索引开始匹配下一个，降低时间复杂度
    pointList.forEach(point => {
        const angle = mod360(initialAngle[point] + rotate)
        const len = angleToCursor.length
        // eslint-disable-next-line no-constant-condition
        while (true) {
            lastMatchIndex = (lastMatchIndex + 1) % len
            const angleLimit = angleToCursor[lastMatchIndex]
            if (angle < 23 || angle >= 338) {
                result[point] = 'nw-resize'
                return
            }
            if (angleLimit.start <= angle && angle < angleLimit.end) {
                result[point] = angleLimit.cursor + '-resize'
                return
            }
        }
    })
    return result
}

// 获取指定组件的相关数据
function getEditor(ref) {
    return document.querySelector('#' + ref).getBoundingClientRect()
}

// 深度搜索查找父组件  PagesStore().pageComponents
function deepSelectComponent(ComponentList, targetComponentID) {
    const length = ComponentList.length
    for (let i = 0; i < length; i++) {
        if (ComponentList[i].id == targetComponentID) {
            return ComponentList[i]
        } else if (ComponentList[i].children && ComponentList[i].children.length > 0) {
            let result = deepSelectComponent(ComponentList[i].children, targetComponentID)
            if (result != null) {
                return result
            }
        }
    }
    return null
}

//导出格式化数据
export function exportComponent() {
    // let blob = new Blob([JSON.stringify(getStore("PagesStore").pageComponents)], {type: "text/json;charset=utf-8"});
    // saveAs(blob, "page.json")
    console.log(getStore("PagesStore").getPage())
}

// 清空画布
export function clearMap() {
    // 获取清空画布返回结果，清空则向撤销回退中增加记录
    if (clearNowPageChildren()) {
        getStore("UndoRedoStore").addOperation('clearMap')
    }
}

export function clearNowPageChildren() {
    try {
        getStore("PagesStore").getNowPage().children = []
        eventBus.emit("clearSetter", {type: "clearMap", params: null})
        return true
    } catch (e) {
        console.log(e)
    }
    return false
}

// 判断拖拽组件是否在目标组件上层
function isFeatherComponent(dragObject, targetId) {
    if (dragObject.children === undefined || dragObject.children === null) return false
    const targetComponent = deepSelectComponent(dragObject.children, targetId)
    return targetComponent ? true : false
}

// 判断两个容器组件是否有上下关系
function isLayer(dragObject, targetId) {
    let components = deepSelectComponent(dragObject.children, targetId)
    return components !== null
}

// 解析css样式
export function analysisCssText(cssText) {
    cssText = cssText.replace(".main", '').replace("{", '').replace("}", '')
    return postcssJs.objectify(postcss.parse(cssText))
}

export function objectToCss(style) {

    let result = postcss().process(style, {parser: postcssJs})
    return result.css
}


// 解析styles 取得shape应该跟着改变的样式
export function getShapeStyle(styles, lock) {
    const yesStyle = [
        'margin',
        'margin-left',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'display',
        'position',
        'left',
        'right',
        'bottom',
        'top',
    ]
    let result = {}
    for (let key in yesStyle) {
        if (styles[yesStyle[key]]) {
            result[yesStyle[key]] = styles[yesStyle[key]]
        }
    }
    if (lock) {
        result['pointer-events'] = 'none'
    } else {
        result['pointer-events'] = ''
    }
    return result
}

// 返回组件应该有的shape
export function getComponentStyle(isPreview, styles, type) {
    if (isPreview)
        return styles
    //component 不接受的样式
    const noStyle = [
        'margin',
        'margin-left',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'position',
        'left',
        'right',
        'bottom',
        'top']
    const result = {}
    for (let key in styles) {
        if (noStyle.indexOf(key) === -1) {
            result[key] = styles[key]
        }
    }
    return result

}

export function deleteSelectComponent() {
    // 删除了才增加不删除不添加
    if (deleteComponent(getStore("SimpleStore").selectPlate)) {
        getStore("UndoRedoStore").addOperation('deleteComponent')
    }
}

// 删除组件
export function deleteComponent(selectPlate) {
    try {
        let featherId = ''
        let target = []
        let deleteId = []
        selectPlate.forEach(item => {
            if (item.index !== undefined) {
                item = item.component
            }
            item.status.active = false
            if (!item.status.lock) {
                if (featherId !== item.featherId) {
                    if (item.featherId === "editor") {
                        target = getStore("PagesStore").getNowPage()
                    } else {
                        target = searchComponent(item.featherId)
                    }
                }
                deleteRefs(item)
                deleteId.push(item.id)
                let index = target.children.findIndex((data) => data.id === item.id)
                target.children.splice(index, 1)
                featherId = item.featherId
            }
        })
        selectPlate.splice(0)
        eventBus.emit("clearSetter", {type: "id", params: deleteId})
        return true
    } catch (e) {
        console.log(e)
    }
    return false
}

// 返回选中组件设置器配置
export function getComponentSetter() {
    if (getStore("SimpleStore").selectPlate[0] !== undefined) {
        let component = getStore("SimpleStore").selectPlate[0]['component']
        if (component) {
            let index = getStore("ComponentListStore").componentSetters.findIndex((item) => item.component === component)
            if (getStore("ComponentListStore").componentSetters[index].hasOwnProperty('setter'))
                return getStore("ComponentListStore").componentSetters[index]['setter']
        }
    }
    return null
}

// 锁定选中组件
export function lockComponent() {
    getStore("SimpleStore").selectPlate.forEach(item => {
        item.status.lock = !item.status.lock
    })
}

// 清空选中面板
export function clearSelectPlate() {
    getStore("SimpleStore").selectPlate.forEach(item => {
        item.status.active = false
    })
    getStore("SimpleStore").selectPlate = []
}

// 缓存页面数据
export function savePage() {
    try {
        localStorage.setItem("page", JSON.stringify(getStore("PagesStore").getPage(), re))
        ElMessage({message: "保存成功", type: 'success', duration: 2000, showClose: true,})
    } catch (e) {
        ElMessage({message: "保存失败", type: 'error', duration: 2000, showClose: true,})
    }
}

function re(key, value) {
    if (value instanceof Array) {
        return Array.from(value)
    }
    return value
}

// 获取保存到本地的浏览器数据
export function getLocalStorage() {
    const storage = localStorage.getItem("page")
    return (storage !== null && storage !== "undefined" && storage !== '') ? JSON.parse(storage) : []
}

// 复制选中组件
export function copy() {
    let selectPate = []
    if (getStore("SimpleStore").selectPlate) {
        selectPate = deepClone(getStore("SimpleStore").selectPlate)
    }
    getStore("SimpleStore").setCopyPlate(selectPate)
}

// 剪切选中组件 调用复制函数 并删除组件
export function shear() {
    copy()
    deleteSelectComponent()
}

// 递归更新组件中的父id 和id
function updateId(array, id) {
    if (array.length > 0) {
        array.forEach(item => {
            item.id = uuid()
            item.featherId = id
            if (item.children) {
                updateId(item.children, item.id)
            }
        })
    }
    return array
}

// 将页面vue信息生成函数并返回
export function createEcVue(ecVueInfo) {
    ecVueInfo = ecVueInfo.replace("export default", '')
    let ecVue = null
    try {
        if (ecVueInfo && ecVueInfo !== '') {
            let info = `()=>{return ${ecVueInfo}}`
            let a = eval(info)
            ecVue = new ECVue(a())
        }
    } catch (e) {
        console.log(e)
    }
    return ecVue
}


//导出格式化数据
export function exportPage(exportPage) {
    let blob = new Blob([JSON.stringify(exportPage, re)], {type: "text/json;charset=utf-8"});
    saveAs(blob, "page.json")
}

//导入格式化数据.
export function importPage(importPages, writable) {
    let nowPages = getStore("PagesStore").getPage()
    verifyPagesData(importPages)
    let index = -1
    if (nowPages.length === 0) {
        getStore("PagesStore").setPage(importPages)
    } else {
        importPages.forEach(item => {
            index = nowPages.findIndex((data) => data.pageName === item.pageName)
            if (index === -1) {
                nowPages.push(item)
            } else {
                if (writable) {
                    nowPages[index] = item
                }
            }
        })
    }
}

export function getPages() {
    return getStore("PagesStore").getPage()
}

// 页面数据校验
function verifyPagesData(Pages) {
    let i = 0
    if (Pages instanceof Array) {
        Pages.forEach(item => {
            if (!item.hasOwnProperty('ecVueInfo')) {
                item['ecVueInfo'] = 'export default{\n' +
                    'data(){\n' +
                    'return{\n' +
                    '}},\n' +
                    'methods:{\n' +
                    '}}\n'
            }
            item['EcVue'] = createEcVue(item.ecVueInfo)
            if (!item.hasOwnProperty('pageName')) {
                item['pageName'] = `pageName${i++}`
            }
            if (!item.hasOwnProperty('id')) {
                item['id'] = uuid()
            }
        })
    }
}

// 执行方法
export function execMethod(events,EcVue) {
    if (EcVue[events.method] && events && events.enable) {
        return true
    }
    return false
}

export function setMouseEvent(e) {
    getStore("MouseEventStore").setMouseEvent(e)
}

export function bindRefs(attr, refs, name, EcVue) {
    try {
        if (!EcVue.$refs) {
            EcVue['$refs'] = null
        }
        if (!refs) {
            refs = null
        }
        if (attr[name]) {
            let i = 0
            let value = attr[name].replace(/[0-9]+/g, "")
            while (EcVue.$refs[attr[name]]) {
                i++
                attr[name] = value + i
            }
            EcVue.$refs[attr[name]] = refs
        }
    }catch (e){
        console.log(e)
    }

}

export function deleteRefs(component) {
    try {
        for (let key in component.attributes) {
            if (key.indexOf('Ref') > -1) {
                delete getStore("PagesStore").getNowPage().EcVue.$refs [component.attributes[key]]
            }
        }
    }catch (e){
        console.log(e)
    }

}

export function upSelectComponent() {
    let selectPate = []
    if (getStore("SimpleStore").selectPlate) {
        selectPate = getStore("SimpleStore").selectPlate
        let firstComponent = selectPate[0]
        // 向上跳转只作用于选择列表的第一个 当父id为editor时则不进行向上查找
        if (firstComponent.featherId === 'editor') {
            return
        } else {
            let upComponent = searchComponent(firstComponent.featherId)
            if (upComponent.component === 'container') {
                upComponent = searchComponent(upComponent.featherId)
            }
            upComponent.status.active = true
            selectPate[0] = upComponent
            firstComponent.status.active = false
            eventBus.emit("setterComponent")
            upComponent = null
        }
        firstComponent = null
    }
    selectPate = null
}

export function setterComponent() {
    eventBus.emit("setterComponent")
}

// 输出源码
export async function generateCode(exportPage) {
    let zip = new JSZip()
    for (const item of exportPage) {
        let data = await formatText(ecTemplate(item),"html")
        console.log(data)
        let blob = new Blob([data], {type: "text/json;charset=utf-8"});
        zip.file(item.pageName + ".vue", blob, {binary: true})
    }
    return
    zip.generateAsync({type: "blob"}).then(content => {
        // 生成二进制流
        saveAs(content, "easyCode源码"); // 利用file-saver保存文件  自定义文件名
    });

}

// 格式化文本
export async function formatText(text, type) {
    try {
        if (!type || type === "javascript" ) return text
        let result = ""
        let plugin = null
        let vueIndentScriptAndStyle = false
        if (type === "css") {
            plugin = parserCss
            type = "css"
        }
        if (type === "html") {
            type = "html"
            plugin = parserHtml
            vueIndentScriptAndStyle = true
        }
        if (plugin !== null) {
            await prettier.format(text, {
                parser: type,
                plugins: [plugin],
                vueIndentScriptAndStyle: vueIndentScriptAndStyle
            }).then(data => {
                result = data
            })
        }
        return result
    }catch (e){
        console.log(e)
        ElMessage({message: "有错误请检查后在进行保存", type: 'warning', duration: 2000, showClose: true,})
    }

}

