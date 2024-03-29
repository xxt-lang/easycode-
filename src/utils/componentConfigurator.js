import {ComponentListStore} from "../stores/counter"
import {materials} from "../materialsWarehouse/materials";
import {deepClone} from "./tool";
// 组件的基础属性
const baseAttribute = {
    status: {
        active: false,
        activeContainer: false,
        isHidden: false,
        lock: false,// false 不锁 true 锁
    },// 组件状态 r
}
const componentList = []
const componentSetters = []
const componentTemplates = {}

// 加载组件配置
export function loadComponentConfiguration() {
    const componentListStore = ComponentListStore()
    componentListStore.materials = materials
    // 先判断本地有没有对应数据，有则直接读取不在进行处理
    if(localStorage.getItem('componentList') && localStorage.getItem('componentSetters'))
    {
        componentListStore.componentList = JSON.parse(localStorage.getItem('componentList'))
        componentListStore.componentSetters =  JSON.parse(localStorage.getItem('componentSetters'))
        componentListStore.componentTemplates =  JSON.parse(localStorage.getItem('componentTemplates'))
    }else{
        // 组件相关属性值初始化
        componentList.forEach(item => {
            Object.keys(baseAttribute).forEach(aItem => {
                if(!item[aItem]){
                    item[aItem] = baseAttribute[aItem]
                }
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
                }
                if(!item["shapeStyles"]){
                    item["shapeStyles"] = {}
                }
                item['bindClass'] = ""
            })
        })
        setAttribute()
        componentListStore.componentList = componentList
        componentListStore.componentSetters = componentSetters
        componentListStore.componentTemplates = componentTemplates
        localStorage.setItem('componentList',JSON.stringify(componentList))
        localStorage.setItem('componentSetters',JSON.stringify(componentSetters))
        localStorage.setItem('componentTemplates',JSON.stringify(componentTemplates))
    }

}

export function assembleComponent(component, name) {
    if (!component) {
        return
    }
    if (component.hasOwnProperty('component')) {
        componentList.push(component.component)
    }
    if (component.hasOwnProperty('setter')) {
        componentSetters.push(component.setter)
    }
    if (component.hasOwnProperty('template')) {
        componentTemplates[name] = component.template
    }
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
        if(!item["defaultAttributes"]){
            item["defaultAttributes"] = {}
        }
        if (index !== undefined) {
            // 容器模板增加基础状态
            if (componentSetters[index].setter.configuration && componentSetters[index].setter.configuration.childrenTemplate) {
                componentSetters[index].setter.configuration.childrenTemplate["status"] = baseAttribute["status"]
            }
            componentSetters[index].setter.attributes.forEach(setterItem => {
                if (setterItem.type === "table") {
                    let columnObject = {}
                    setterItem.column.forEach(columnItem => {
                        columnObject[columnItem.attributeName] = columnItem.defaultValue
                    })
                    let childrenLength = item.children.length
                    for (let i = 0; i < childrenLength; i++) {
                        if (JSON.stringify(item.children[i].attributes) == "{}") {
                            item.children[i].attributes = columnObject
                        } else {
                            for (let key in columnObject) {
                                if (item.children[i].attributes[key] === undefined) {
                                    item.children[i].attributes[key] = columnObject[key]
                                }
                            }
                        }
                    }
                    if(componentSetters[index].setter.configuration){
                       componentSetters[index].setter.configuration.childrenTemplate.attributes = columnObject
                    }
                    item.defaultAttributes[setterItem.attributeName] = deepClone(columnObject)
                } else {
                    item.attributes[setterItem.attributeName] = setterItem.defaultValue
                    item.defaultAttributes[setterItem.attributeName] = deepClone(setterItem.defaultValue)
                }
            })
            if (componentSetters[index].setter.events) {
                componentSetters[index].setter.events.forEach(setterItem => {
                    item.events[setterItem.event] = {enable: setterItem.enable, method: setterItem.method}
                })
            }
        }
        Object.defineProperty(item, "defaultAttributes", {
            writable: false, // 这里我们writable设置为false
        });
    })
}
