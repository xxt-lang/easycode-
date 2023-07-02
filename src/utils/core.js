import eventBus from '@/utils/eventBus.js'
import {ref} from "vue";
import {deepClone,uuid} from "./tool";
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
import {ECVue, proxy} from "./ECVue";

export function getStore(name){
    if(name === "PagesStore")
        return PagesStore()
    if(name === "ComponentListStore")
        return ComponentListStore()
    if(name === "SimpleStore")
        return SimpleStore()
    if(name === "CommonStatusStore")
        return CommonStatusStore()
    if(name === "MouseEventStore")
        return MouseEventStore()
    if(name === "UndoRedoStore")
        return UndoRedoStore()
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
export function ecRouter(path){
    eventBus.emit("router",{path:path})
}
// 返回当前页面绑定的数据
export function getPageData(attribute,EcVue){
    const params = analysisData(attribute)
    let setData = EcVue
    let result = ''
    if(params.length>0){

        let length = params.length
        result = (setData!==null && setData[params[0]])?setData[params[0]]:''

        if(setData){
            for (let i = 1; i < length; i++) {
                result = result[params[i]]
            }
        }
        return result
    }
}

// 设置当前页面绑定的数据
export function setPageData(attribute,value,EcVue){
    const params = analysisData(attribute)
    let setData = EcVue
    if(params.length>0){
        let length = params.length
        for (let i = 0; i < length - 1; i++) {
            setData = setData[params[i]]
        }
        setData[params[length - 1]] = value
    }
}

// 解析数据绑定的数值
function analysisData(param){
    return param.split(".")
}

export function initProject(){
    let pageData = getLocalStorage()

    pageData.forEach(item=>{
        item.EcVue = createEcVue(item.ecVueInfo)
    })
    getStore("PagesStore").setPage(pageData)
}




// 预览时展示的界面
export function previewPage(index){
    let result = {page:[],css:{},message:"请先选择或创建页面",isPage:false}
    if(index !== -1){
        let localPage = getLocalStorage()
        if(localPage.length>0){
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
export function undo(){
    getStore("UndoRedoStore").undo()
}
// 撤销回退
export function redo(){
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


// 组件拖拽功能
export function moveComponent(e, index,dragObject) {
    // 只有按住左键时才进行拖拽
    if (e.buttons != 1) return
    e.preventDefault()
    e.stopPropagation()
    // 是否可以进行推拽
    let startClientY= e.clientY
    let startClientX = e.clientX
    let message =`选中${dragObject.label}组件`
    // node当前鼠标悬浮的元素
    let target ={
        targetIndex : index,
        targetFeatherId : "",
        targetType : "common",
        targetId : "",
        targetComponentId : "",
        targetLock:'false'
    }
    // eId 当前托拽元素的id
    let drag = {
         dragFeatherId : e.target.dataset.featherid,
         dragIndex : index,
         dragId: e.target.dataset.elementid,
         dragType : e.target.dataset.elementtype,
         dragComponentId : e.target.dataset.componentid
    }
    // 鼠标在元素的方位
    let direction = ""
    // 获取元素的初始内边距
    let oldX = 0;
    let oldY = 0;
    if(getStore("CommonStatusStore").editMargin){
        if(!dragObject.status.lock){
            // 当是定位时可以直接修改left 于 top
            if(dragObject.styles['position']){
                if(dragObject.styles['left']){
                    oldX = getCssAttributeValue(dragObject.styles['left'])
                }
                if(dragObject.styles['top']){
                    oldY = getCssAttributeValue(dragObject.styles['top'])
                }
                message = `调整${dragObject.label}position`
            }else{
                if(dragObject.styles['margin-left']){
                    oldX = getCssAttributeValue(dragObject.styles['margin-left'])
                }
                if(dragObject.styles['margin-top']){
                    oldY = getCssAttributeValue(dragObject.styles['margin-top'])
                }
                message =  `调整${dragObject.label}margin`
            }
        }
    }


    eventBus.emit(`move-dragTip`, {style:{top: e.clientY + 'px', left: e.clientX  + 'px'},message:message})

    // position:absolute
    const move = (moveEvent) => {
        const curX = moveEvent.clientX
        const curY = moveEvent.clientY
        eventBus.emit(`move-dragTip`, {style:{top: moveEvent.clientY + 'px', left: moveEvent.clientX + 'px', display: ''},message:null})

        if(getStore("CommonStatusStore").editMargin  && !dragObject.status.lock){
            if(dragObject.styles['position']){
                changePosition(dragObject.styles,(moveEvent.clientX-startClientX),(moveEvent.clientY-startClientY),oldX,oldY)
            }else{
                // 如果有margit-left  margin-top
                changeMargin(dragObject.styles,(curX-startClientX),(curY-startClientY),oldX,oldY)
            }
        }else{
            let result = mousemoveInfo(moveEvent)
            direction = result.direction
            target = result.target
        }
    }

    upMouse(move, () => {
        // 用于拖拽时的提示定位
        eventBus.emit(`move-dragTip`, {style:{top: 0, left: 0, display: 'none'},message:null})
        if(getStore("CommonStatusStore").editMargin) return
        if(upMouseMoveInfo(target,dragObject,direction,index)){
            getStore("UndoRedoStore").addOperation('moveComponent')
        }
    })

}

// 改变组件的外边距
function changeMargin(style,X,Y,oldX,oldY){
    if(isNaN(oldX) && isNaN(oldY))
        return
    // 没有margin时的操作
    style['margin-left'] = `${oldX + X }px`
    style['margin-top'] = `${oldY + Y }px`
}

// 当组件定位布局是可以更换上下左右坐标
function changePosition(style,X,Y,oldX,oldY){
    if(isNaN(oldX) && isNaN(oldY))
        return
    style['left'] = `${oldX + X }px`
    style['top'] = `${oldY + Y }px`
}

function getCssAttributeValue(param){
    let value = 0
    if(param.indexOf('px')!=-1){
        value = Number(param.replace('px',''))
    }
    return value
}

//移动鼠标时
function mousemoveInfo(moveEvent){
    return {
        direction : getMousePosition(moveEvent),
        target:{
            targetIndex : Number(moveEvent.target.dataset.index),
            targetFeatherId :moveEvent.target.dataset.featherid,
            targetType : moveEvent.target.dataset.elementtype,
            targetId :moveEvent.target.dataset.elementid,
            targetComponentId :moveEvent.target.dataset.componentid,
            targetLock: moveEvent.target.dataset.lock
        }}

}
// 获取鼠标悬停在组件的那个方位上
function getMousePosition(moveEvent){
    let mX = moveEvent.offsetX//鼠标X轴坐标
    let scX = moveEvent.target.offsetWidth / 2
    return mX<=scX?"left":"right"
}

//鼠标松开时的事件
export function upMouseMoveInfo(target,dragObject,direction,index){
    let result = false
    let targetComponent = {}
    // 父组件不能拖动到子组件上
    if(!dragAllowed(target,dragObject)) return

    const pageComponents = getStore("PagesStore").getNowPage().children
    let rootId = "editor"
    let dragComponents = pageComponents,targetComponents = pageComponents
    // 当将组件拖拽到画布上时调用
    if (target.targetType === rootId) {
        if(dragObject.featherId!==rootId){
            targetComponents = deepSelectComponent(pageComponents, dragObject.featherId).children
        }
        targetComponents[index].featherId = "editor"
        dragComponents.push(targetComponents[index])
        targetComponents.splice(index, 1)
        result = true
    } else if ((target.targetIndex != NaN && target.targetFeatherId && dragObject.featherId && dragObject.id !== target.targetId)) {
        let insertIndex = direction === 'right' || direction === 'bottom' ? target.targetIndex + 1 : target.targetIndex
        // 统一个容器下目标下表要是大于当前下标则当前下表+1
        let deleteIndex = index > target.targetIndex && target.targetFeatherId === dragObject.featherId ? index + 1 : index
        // 目标组件类型为容器，拖拽组件则插入到容器的children中
        if (target.targetType === "container" && target.targetLock === "false") {
            deleteIndex = index
            if(dragObject.featherId !== rootId){
                dragComponents = deepSelectComponent(pageComponents, dragObject.featherId).children
            }
            targetComponents = deepSelectComponent(pageComponents, target.targetId).children
            dragComponents[index].featherId = target.targetId
            targetComponents.push(dragComponents[index])
            dragComponents.splice(deleteIndex, 1)
            result = true
        } else {
            if( dragObject.featherId !== rootId){
                dragComponents = deepSelectComponent(pageComponents,  dragObject.featherId).children
            }
            if(target.targetFeatherId !== rootId){
                if( dragObject.featherId === target.targetFeatherId){
                    targetComponents = dragComponents
                }else{
                    targetComponent = deepSelectComponent(pageComponents, target.targetFeatherId)
                    targetComponents = targetComponent.children
                }
            }
            dragComponents[ index].featherId = target.targetFeatherId
            targetComponents.splice(insertIndex, 0, dragComponents[ index])
            dragComponents.splice(deleteIndex, 1)
            result = true
        }
    }
    return result
}

// 是否允许进行拖拽插入
function dragAllowed(target,dragObject){
    if(target.targetFeatherId === dragObject.id ) return false
    if( isFeatherComponent(dragObject,target.targetId)) return false
    if (target.targetType === "container" && dragObject.type === "container") {
        if (target.targetComponentId === dragObject.id || isLayer(dragObject, target.targetId)) return false
    }
    return true
}

//拖拽到画布前配置组件相关数据
export function handleDrop(e){
    e.preventDefault()
    e.stopPropagation()
    let component = deepClone(getStore("ComponentListStore").componentList.find((data)=>data.component === e.dataTransfer.getData('index')))
    // 若添加成功返回true 并在撤销回退中记录
    if(component){
        if(addComponent(getTarget(e.target.dataset),component,e)){
            getStore("UndoRedoStore").addOperation('addComponent')
        }
    }else{
        ElMessage({message: "未找到相关组件", type: 'warning',duration:2000,showClose: true,})
    }
}

// 添加组件
export function addComponent(target,component,e){
    try {
        if (target.lock) {return false}
        let temporary = getTargetArray(target)
        let index = target.index
        if(target.elementType === "common"){
            let direction = getMousePosition(e)
            if(direction === "right" || direction === "bottom"){
                index++
            }
        }
        if(component instanceof Array){
            if(isNaN(index)){
                updateId(component, target.id).forEach(item => {
                    item.status.active = false // 消除选中状态
                    temporary.children.push(item)
                })
            }else{
                updateId(component, target.id).forEach(item => {
                    item.status.active = false // 消除选中状态
                    temporary.children.splice(index++, 0, item)
                })
            }
        }else{
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
    }catch (e){
        console.log(e)
    }
    return false
}

// 组件粘贴
export function stickup(){
    // 获取选中的数据
    let stickPate = deepClone(getStore("SimpleStore").copyPlate)
    try {
        let e = getStore("MouseEventStore").mouseEvent
        if (addComponent(getTarget(e.target.dataset),stickPate,e)){
            // 向操作中增加记录
            getStore("UndoRedoStore").addOperation('stickComponent')
        }
    } catch (e) {
        console.log(e)
    }
}

function getTargetArray(target){
    if (target.elementType == "editor" || target.id === "editor") {
        return getStore("PagesStore").getNowPage()
    } else {
        return searchComponent(target.id)
    }
    return null
}
function getTarget(target){
    return {
        elementType : target.elementtype,
        elementId : target.elementid,
        featherId:target.featherid,
        index: Number(target.index),
        lock: target.lock === "true"?true:false,
        id:target.elementtype === "editor" ? "editor" : target.elementtype === "container" ? target.elementid : target.featherid
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
export function clearMap(){
    // 获取清空画布返回结果，清空则向撤销回退中增加记录
    let result = clearNowPageChildren()
    if(result!==null){
        getStore("UndoRedoStore").addOperation('clearMap')
    }
}

export function clearNowPageChildren(){
    let result = null
    try {
        result = deepClone(getStore("PagesStore").getNowPage().children)
        getStore("PagesStore").getNowPage().children = []
        eventBus.emit("clearSetter",{type:"clearMap",params:null})
    }catch (e){
        console.log(e)
    }finally {
        return result
    }
}

// 判断拖拽组件是否在目标组件上层
function isFeatherComponent(dragObject,targetId){
    if(dragObject.children === undefined || dragObject.children === null) return false
    const targetComponent = deepSelectComponent(dragObject.children,targetId)
    return targetComponent?true:false
}

// 判断两个容器组件是否有上下关系
function isLayer(dragObject,targetId){
    let components = deepSelectComponent(dragObject.children,targetId)
    return components!==null
}

// 解析css样式
export function analysisCssText(cssText){
    let css = {}
    // 清除\n
    let str = cssText.replace('.main{','').replace('}','').replaceAll(/(?:\r:|\t|\n)/g,'')
    let s1 = str.replaceAll(/:{1,}/g,':')
    let s2 = s1.replaceAll(/;{1,}/g,';')
    let attrAndValues = s2.split(/[:*;]/)
    let length = attrAndValues.length
    if(attrAndValues[length-1] === ''){
        length--
    }

    for (let i = 0; i < length; i+=2) {
        css[`${attrAndValues[i].replaceAll(/\s{1,}/g,'')}`] = attrAndValues[i+1]
    }
    return css
}

export function objectToCss(styles){
    return  JSON.stringify(styles).replaceAll(/[{]|[}]|["]/g,'')
            .replaceAll(',',';\n')
}

export function getContainerStyle(isPreview,styles,lock){
    let result = deepClone(styles)
    // result['height'] = styles.height === undefined?'':`${Number(styles.height.replace('px',''))-12}px`
    result['border-style'] = isPreview?'none':'solid'
    return result

}


// 解析styles 取得shape应该跟着改变的样式
export function getShapeStyle(styles){
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
        'width',
        'height'
    ]
    let result = {}
    for(let key in yesStyle) {
        if(styles[yesStyle[key]]){
            result[yesStyle[key]] = styles[yesStyle[key]]
        }
    }
    return result
}

// 返回组件应该有的shape
export function getComponentStyle(isPreview,styles){
    if(isPreview)
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
            if(noStyle.indexOf(key) === -1){
                result[key] = styles[key]
            }
    }
    return result

}
export function deleteSelectComponent(){
    const selectPlate = getStore("SimpleStore").selectPlate
    // 删除了才增加不删除不添加
    let result = deleteComponent(selectPlate)
    if(result.length>0){
        getStore("UndoRedoStore").addOperation('deleteComponent')
    }
}

// 删除组件
export function deleteComponent(selectPlate){
    let featherId = ''
    let target = []
    let root = "editor"
    let deleteId = []
    let deleteComponentList = []
    selectPlate.forEach(item=>{
        if(item.index !== undefined){
            item = item.component
        }
        item.status.active = false
        if(!item.status.lock){
            if(featherId !== item.featherId){
                if(item.featherId === root){
                    target = getStore("PagesStore").getNowPage()
                }else{
                    target = searchComponent(item.featherId)
                }
            }
            deleteId.push(item.id)
            let index = target.children.findIndex((data)=>data.id === item.id)
            deleteComponentList.push({index:index,component:deepClone(item)})
            target.children.splice(index,1)
            featherId = item.featherId
        }
    })
    selectPlate.splice(0)
    eventBus.emit("clearSetter",{type:"id",params:deleteId})
    return deleteComponentList
}

// 返回选中组件设置器配置
export function getComponentSetter(){
    if(getStore("SimpleStore").selectPlate[0]!==undefined){
        return getStore("ComponentListStore").componentSetters[getStore("SimpleStore").selectPlate[0]['setterIndex']]['setter']
    }
    return null
}
// 锁定选中组件
export function lockComponent(){
    getStore("SimpleStore").selectPlate.forEach(item=>{
        item.status.lock = !item.status.lock
    })
}

// 清空选中面板
export function clearSelectPlate(){
    getStore("SimpleStore").selectPlate.forEach(item => {
        item.status.active = false
    })
    getStore("SimpleStore").selectPlate = []
}

// 缓存页面数据
export function savePage(){
    ElMessage({message: "保存成功", type: 'success',duration:2000,showClose: true,})
    localStorage.setItem("page",JSON.stringify(getStore("PagesStore").getPage(),re))
}
function re (key,value){
    if(value instanceof Array){
        return Array.from(value)
    }
    return value
}

// 获取保存到本地的浏览器数据
export function getLocalStorage(){
   const storage = localStorage.getItem("page")
   return (storage!== null && storage!=="undefined" && storage !== '') ?JSON.parse(storage):[]
}

// 复制选中组件
export function copy(){
    let selectPate = []
    if(getStore("SimpleStore").selectPlate){
        selectPate = deepClone(getStore("SimpleStore").selectPlate)
    }
    getStore("SimpleStore").setCopyPlate(selectPate)
}

// 剪切选中组件 调用复制函数 并删除组件
export function shear(){
    copy()
    deleteSelectComponent()
}

// 递归更新组件中的父id 和id
function updateId(array,id){
    if(array.length>0){
        array.forEach(item=>{
            item.id = uuid()
            item.featherId = id
            if(item.children){
                updateId(item.children,item.id)
            }
        })
    }
    return array
}
// 将页面vue信息生成函数并返回
export function createEcVue(ecVueInfo){
    ecVueInfo = ecVueInfo.replace("export default",'')
    let ecVue = null
    try {
        if(ecVueInfo && ecVueInfo !==''){
            let info = `()=>{return ${ecVueInfo}}`
            let a = eval(info)
            ecVue = new ECVue(a())
        }
    }catch (e){
        console.log(e)
    }
    return ecVue

}
