import eventBus from '@/utils/eventBus.js'
import {
    SimpleStore,
    PageComponentsStore
} from '@/stores/counter'

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

// 组件拖拽功能
export function moveComponent(e,index) {
    // 只有按住左键时才进行拖拽
    if(e.buttons != 1) return
    e.preventDefault()
    e.stopPropagation()
    // 是否可以进行推拽
    const startY = e.clientY
    const startX = e.clientX
    // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
    eventBus.emit(`move-dragTip`,{top:startY,left:startX})
    let nodeIndex = index
    let direction = ""
    const move = (moveEvent) => {
        const curX = moveEvent.clientX
        const curY = moveEvent.clientY
        //访问数组中的元素
        eventBus.emit(`move-dragTip`,{top:curY,left:curX,display:''})
        nodeIndex = Number(moveEvent.target.dataset.index)
        let mX = moveEvent.clientX - moveEvent.target.offsetLeft//鼠标X轴坐标
        let mY = moveEvent.clientY - moveEvent.target.offsetTop//鼠标Y轴坐标
        let scY =  moveEvent.target.offsetHeight / 2
        let scX =  moveEvent.target.offsetWidth / 4
        if(mX<=scX){
            direction = "left"
            //right 前插
        }else if(mX>scX && mX<3 * scX){
            if(mY<=scY){
                direction = "top"
                // top 前插
            }else if(mY>scY){
                direction = "bottom"
                // bottom 后插
            }
        }else if(mX>=3 * scX){
            direction = "right"
            // right 后插
        }
    }
    upMouse(move, () => {
        const pageComponents = PageComponentsStore().pageComponents
        if( nodeIndex != NaN && index != undefined){
            let insertIndex = direction === 'right' || direction === 'bottom' ?nodeIndex + 1 : nodeIndex
            let deleteIndex = index>nodeIndex ? index+1 : index
            pageComponents.splice(insertIndex,0,pageComponents[index])
            pageComponents.splice(deleteIndex,1)
        }
        eventBus.emit(`move-dragTip`,{top:0,left:0,display:'none'})
    })
}


// 搜索组件
export function searchComponent(ComponentList, targetId) {
    return deepSelectComponent(ComponentList, targetId)
}

//左右键选择组件事件
export function clickSelectComponent(e, component, index) {
    e.preventDefault()
    e.stopPropagation()
    const simpleStore = SimpleStore()
    // 按住ctrl进行多选时触发
    if (e.ctrlKey) {
        // 若选中则改为未被选中状态，未选中则选中
        if (component.status.active) {
            component.status.active = false
            // 获取被选中的元素并删除
            const length = simpleStore.selectPlate.length
            for (let i = 0; i < length; i++) {
                if(simpleStore.selectPlate[i].index == index){
                    simpleStore.selectPlate.splice(i,1)
                    break
                }
            }
        } else {
            component.status.active = true
            simpleStore.selectPlate.push({
                info: component,
                index: index
            })
        }
    } else {
        // 左键单击时触发 1，右键单击时触发 2，
        if (e.buttons == 1) {
            // 将其他选中的元素全部置为未被选中状态
            simpleStore.selectPlate.forEach(item => {
                item.info.status.active = false
            })
            // 将单击元素设为选中状态
            component.status.active = true
            simpleStore.selectPlate = [{
                info: component,
                index: index
            }]
        } else if (e.buttons == 2) {
            // 只有当未被选中时才会进行选中触发
            if (!component.status.active) {
                component.status.active = true
                simpleStore.selectPlate.push({
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

//向前或者向后找插入的位置
function findInsertIndex(direction,top,left){
    let pageComponentsStore = PageComponentsStore()
    // pageComponentsStore
}

// 查询组件对应的坐标
function findIndex(id){
    let pageComponentsStore = PageComponentsStore()
    let length = pageComponentsStore.pageComponents.length
    for (let j = 0; j < length; j++) {
        if(pageComponentsStore.pageComponents[j].id == id) return j
    }
}


//导出格式化数据
export function exportComponent(){
    const pageComponentsStore = PageComponentsStore()
}


