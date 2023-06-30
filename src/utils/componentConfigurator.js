import {ComponentListStore} from "../stores/counter"
import {componentList, componentSetters, materials} from "./registered/component";
// 组件的基础属性
const baseAttribute = {
    status: {
        active: false,
        activeContainer: false,
        isHidden: false,
        lock: false,// false 不锁 true 锁
    },// 组件状态 r
}
// 注册的组件列表
/*component:"ScButton", //组件名 与组件列表中的组件一致
    setter:{
     attributes:[
    {
        attributeName:"",//组件配置中属性字段名 必写
        label:"",// 字段标签
        type:"",//编辑自段的类型input select number switch 必写
        value:"",//属性值 必写
        defaultValue:"",//默认属性值 必写
        valueType:String,// 属性值类型 必写
        verifyRule:"",// 属性值校验规则 可填入正则表达式 非必写
        typeArray:[], //类型选择数组  非必写
        event:{} // 此属性的方法
    }
]
    }
    */
// 组件设置器配置

// 加载组件配置
export function loadComponentConfiguration() {
    const componentListStore = ComponentListStore()
    // 先判断本地有没有对应数据，有则直接读取不在进行处理
    // if(localStorage.getItem('componentList') && localStorage.getItem('componentSetters'))
    // {
    //     componentListStore.componentList = JSON.parse(localStorage.getItem('componentList'))
    //     componentListStore.componentSetters =  JSON.parse(localStorage.getItem('componentSetters'))
    // }else{
    //
    //     localStorage.setItem('componentList',JSON.stringify(componentList))
    //     localStorage.setItem('componentSetters',JSON.stringify(componentSetters))
    // }
    // 组件相关属性值初始化
    componentList.forEach(item => {
        Object.keys(baseAttribute).forEach(aItem => {
            item[aItem] = baseAttribute[aItem]
            if (item.type && item.type === "container") {
                item["children"] = item["children"] ? item["children"] : []
                if (item["children"].length > 0) {
                    item["children"].forEach((citem) => {
                        citem[aItem] = baseAttribute[aItem]
                    })
                }
            } else {
                item.status.activeContainer = false
                item["type"] = "common" //是否为容器组件
                if (item.styles['display'] === undefined) {
                    item.styles['display'] = 'inline-flex'
                }
            }
        })
    })
    setAttribute()
    componentListStore.componentList = componentList
    componentListStore.componentSetters = componentSetters
    componentListStore.materials = materials
}

// 根据组件配置属性设置组件属性
function setAttribute() {
    let setterMap = new Map();
    //后期可配置为持久化数据
    componentSetters.forEach((item, index) => {
        setterMap.set(item.component, index)
    })
    componentList.forEach(item => {
        let index = setterMap.get(item.component)
        if (index !== undefined) {
            item['setterIndex'] = index
            // 容器模板增加基础状态
            if (componentSetters[index].setter.configuration && componentSetters[index].setter.configuration.childrenTemplate) {
                componentSetters[index].setter.configuration.childrenTemplate["status"] = baseAttribute["status"]
            }
            componentSetters[index].setter.attributes.forEach(setterItem => {
                item.attributes[setterItem.attributeName] = setterItem.defaultValue
                if (setterItem.type === "table") {
                    let columnObject = {}
                    setterItem.column.forEach(columnItem => {
                        columnObject[columnItem.attributeName] = columnItem.defaultValue
                    })
                    if (setterItem.isChildren) {
                        let childrenLength = item.children.length
                        for (let i = 0; i < childrenLength; i++) {
                            item.attributes[setterItem.attributeName].push(columnObject)
                        }
                    } else {
                        item.attributes[setterItem.attributeName].push(columnObject)
                    }
                }
            })
        }
    })
}
