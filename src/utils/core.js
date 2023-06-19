import eventBus from '@/utils/eventBus.js'
import {ref} from "vue";
import {deepClone,uuid} from "./tool";
import {
    SimpleStore,
    PageComponentsStore,
    ComponentListStore,
    CommonStatusStore
} from '@/stores/counter'
import {saveAs} from 'file-saver';
import {ElMessage} from "element-plus";

export function getStore(name){
    if(name === "PageComponentsStore")
        return PageComponentsStore()
    if(name === "ComponentListStore")
        return ComponentListStore()
    if(name === "SimpleStore")
        return SimpleStore()
    if(name === "CommonStatusStore")
        return CommonStatusStore()
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
    let startLayerY= e.layerY
    let startLayerX = e.layerX
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
        upMouseMoveInfo(target,dragObject,direction,index)
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
    //target 拖拽时鼠标悬停所指元素
    let result = {direction : '',target:{
            targetIndex : Number(moveEvent.target.dataset.index),
            targetFeatherId :moveEvent.target.dataset.featherid,
            targetType : moveEvent.target.dataset.elementtype,
            targetId :moveEvent.target.dataset.elementid,
            targetComponentId :moveEvent.target.dataset.componentid,
            targetLock: moveEvent.target.dataset.lock
        }}

    let mX = moveEvent.layerX - moveEvent.target.offsetLeft//鼠标X轴坐标
    let mY = moveEvent.layerY - moveEvent.target.offsetTop//鼠标Y轴坐标
    let scY = moveEvent.target.offsetHeight / 2
    let scX = moveEvent.target.offsetWidth / 4
    //right 前插  top 前插  bottom 后插  right 后插
    if (mX <= scX) {
        result.direction = "left"
    } else if (mX > scX && mX < 3 * scX) {
        if (mY <= scY) {
            result.direction = "top"
        } else if (mY > scY) {
            result.direction = "bottom"
        }
    } else if (mX >= 3 * scX) {
        result.direction = "right"
    }
    return result

}
//鼠标松开时的事件
function upMouseMoveInfo(target,dragObject,direction,index){
    let targetComponent = {}

    // 父组件不能拖动到子组件上
    if(target.targetFeatherId === dragObject.id || isFeatherComponent(dragObject,target.targetId)) return
    if (target.targetType === "container") {
        if(dragObject.type === "container"){
            if (target.targetComponentId === dragObject.id || isLayer(dragObject, target.targetId)) return
        }
    }

    const pageComponents = getStore("PageComponentsStore").pageComponents
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
    } else if ((target.targetIndex != NaN && index != undefined && target.targetFeatherId && dragObject.featherId && dragObject.id !== target.targetId)) {
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
        }
    }
}


//拖拽到画布前配置组件相关数据
export function handleDrop(e){
    e.preventDefault()
    e.stopPropagation()
    if (e.target.id == "editor") {
        let component = deepClone(getStore("ComponentListStore").componentList[e.dataTransfer.getData('index')])
        component.featherId = "editor"
        component.id = uuid()
        //若容器是组件并且其中包含预定义的容器则向其中容器添加id 与父亲id

        if(component.type === "container" && component.children.length>0){
            component.children.forEach(item=>{
                item.id = uuid()
                item.featherId = component.id
            })
        }
        getStore("PageComponentsStore").pageComponents.push(component)
    }else if(e.target.dataset.elementtype == "container"){

            // 向容器中添加元素
            let component = deepClone(getStore("ComponentListStore").componentList[e.dataTransfer.getData('index')])
            component.featherId = e.target.dataset.elementid
            component.id = uuid()
            if(component.type === "container" && component.children.length>0){
                component.children.forEach(item=>{
                    item.id = uuid()
                    item.featherId = component.id
                })
            }
            searchComponent(e.target.dataset.elementid).children.push(component)
    }
}

// 搜索组件
export function searchComponent(targetId) {
    return deepSelectComponent(getStore("PageComponentsStore").pageComponents, targetId)
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
            selectPlate.push({
                info: component,
                index: index
            })
        }
    } else {
        // 左键单击时触发 1，右键单击时触发 2，
        if (e.buttons == 1) {
            // 将其他选中的元素全部置为未被选中状态
            selectPlate.forEach(item => {
                item.info.status.active = false
            })
            // 将单击元素设为选中状态
            component.status.active = true
            selectPlate.splice(0)
            selectPlate.push({
                info: component,
                index: index
            })
        } else if (e.buttons == 2) {
            // 只有当未被选中时才会进行选中触发
            if (!component.status.active) {
                component.status.active = true
                selectPlate.push({
                    info: component,
                    index: index
                })
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

// 深度搜索查找父组件  PageComponentsStore().pageComponents
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
    // let blob = new Blob([JSON.stringify(getStore("PageComponentsStore").pageComponents)], {type: "text/json;charset=utf-8"});
    // saveAs(blob, "page.json")
    console.log(getStore("PageComponentsStore").pageComponents)
}

// 清空画布
export function clearMap(){
    getStore("PageComponentsStore").pageComponents = []
    eventBus.emit("clearSetter",{type:"clearMap",params:null})
}

// 判断拖拽组件是否在目标组件上层
function isFeatherComponent(dragObject,targetId){
    if(dragObject.children !== undefined || dragObject.children !== null) return false
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
    let str = cssText.replaceAll(/(?:\r:|\t|\n)/g,'')
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
    return {
         height: styles.height === undefined?'':`${Number(styles.height.replace('px',''))-12}px`,
        'border-style':isPreview?'none':'solid',
        'pointer-events':lock?'none':''
    }

}


// 解析styles 取得shape应该跟着改变的样式
export function getShapeStyle(styles){
    const yesStyle = ['margin',
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
    const noStyle = ['margin',
        'margin-left',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'display',
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

// 删除组件
export function deleteComponent(){
    const selectPlate = getStore("SimpleStore").selectPlate
    let featherId = ''
    let children = []
    let root = "editor"
    let deleteId = []
    selectPlate.forEach(item=>{
        item.info.status.active = false
        if(!item.info.status.lock){
            if(featherId !== item.info.featherId){
                if(item.info.featherId === root){
                    children = getStore("PageComponentsStore").pageComponents
                }else{
                    children = searchComponent(item.info.featherId).children
                }
            }
            deleteId.push(item.info.id)
            children.splice(item.index,1)
            featherId = item.info.featherId
        }
    })
    selectPlate.splice(0)
    eventBus.emit("clearSetter",{type:"id",params:deleteId})
}

// 返回选中组件设置器配置
export function getComponentSetter(){
    if(getStore("SimpleStore").selectPlate[0]!==undefined){
        return getStore("ComponentListStore").componentSetters[getStore("SimpleStore").selectPlate[0].info['setterIndex']]['setter']
    }
    return null
}
// 锁定选中组件
export function lockComponent(){
    getStore("SimpleStore").selectPlate.forEach(item=>{
        item.info.status.lock = !item.info.status.lock
    })
}

// 清空选中面板
export function clearSelectPlate(){
    getStore("SimpleStore").selectPlate.forEach(item => {
        item.info.status.active = false
    })
    getStore("SimpleStore").selectPlate = []
}

// 缓存页面数据
export function savePage(){
    // let saveInfo =
    ElMessage({message: "保存成功", type: 'success',duration:2000,showClose: true,})
    localStorage.setItem("page",JSON.stringify(getStore("PageComponentsStore").pageComponents))
}

export function getLocalStorage(){
   return localStorage.getItem("page")!==null?JSON.parse(localStorage.getItem("page")):[]
}

