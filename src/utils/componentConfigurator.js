import {ComponentListStore} from "../stores/counter"
// 组件的基础属性
const baseAttribute = {
    status:{
        active:false,
        activeContainer:false,
        isHidden:false,
    },// 组件状态 r
}
// 注册的组件列表
const componentList = [
    {
        component: "ScButton",
        label: '按钮', // 左侧组件列表中显示的名字
        icon: 'el-icon-edit', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attribute: {},
        style: {
            width: 80,
            height: 33
        },
    },
    {
        component: "ScInput",
        label: '输入框',
        event: {},
        attribute: {},
        style: {
            width: 192,
            height: 33
        },
    },
    {
        component: "ScCard",
        label: '卡片',
        event: {},
        attribute: {},
        style: {
            width: 192,
            height: 33
        },
        type:"container"
    },
]
/*component:"ScButton", //组件名 与组件列表中的组件一致
    setter:[
    {
        attributeName:"",//组件配置中属性字段名 必写
        label:"",// 字段标签
        type:"",//编辑自段的类型input select number switch 必写
        value:"",//属性值 必写
        defaultValue:"",//默认属性值 必写
        valueType:String,// 属性值类型 必写
        verifyRule:"",// 属性值校验规则 可填入正则表达式 非必写
        typeArray:[] //类型选择数组  非必写
    }
]*/

// 组件设置器配置
const componentSetters = [
    {
        component:"ScButton", //组件名 与组件列表中的组件一致
        setter:[
            {
                attributeName:"type",//组件配置中属性字段名
                label:"类型",
                type:"select",//编辑自段的类型input select number switch buttonList
                value:"primary",//属性值
                defaultValue:"primary",//默认属性值
                valueType:String,// 属性值类型
                verifyRule:"",// 属性值校验规则 可填入正则表达式
                typeArray:[
                    {value: 'primary',
                        label: 'primary'},
                    {value: 'success',
                        label: 'success'},
                    {value: 'warning',
                        label: 'warning'},
                    {value: 'danger',
                        label: 'danger'},
                    {value: 'info',
                        label: 'info'},
                    {value: 'text',
                        label: 'text'}] //类型选择数组
            },
            {
                attributeName:"size",//组件配置中属性字段名
                label:"尺寸",
                type:"select",//编辑自段的类型input select number switch buttonList
                value:"default",//属性值
                defaultValue:"default",//默认属性值
                valueType:String,// 属性值类型
                verifyRule:"",// 属性值校验规则 可填入正则表达式
                typeArray:[
                    {value: 'large',
                        label: 'large'},
                    {value: 'default',
                        label: 'default'},
                    {value: 'small',
                        label: 'small'}] //类型选择数组
            },
            {
                attributeName:"label",//组件配置中属性字段名
                label:"文本",
                type:"input",//编辑自段的类型input select number switch buttonList
                value:"按钮",//属性值
                defaultValue:"按钮",//默认属性值
                valueType:Boolean,// 属性值类型,
                verifyRule:"",// 属性值校验规则 可填入正则表达式
                typeArray:[] //类型选择数组
            },
            {
                attributeName:"plain",//组件配置中属性字段名
                label:"朴素按钮",
                type:"switch",//编辑自段的类型input select number switch buttonList
                value:false,//属性值
                defaultValue:false,//默认属性值
                valueType:Boolean,// 属性值类型,
                verifyRule:"",// 属性值校验规则 可填入正则表达式
                typeArray:[] //类型选择数组
            },
            {
                attributeName:"round",//组件配置中属性字段名
                label:"原型按钮",
                type:"switch",//编辑自段的类型input select number switch buttonList
                value:false,//属性值
                defaultValue:false,//默认属性值
                valueType:Boolean,// 属性值类型,
                verifyRule:"",// 属性值校验规则 可填入正则表达式
                typeArray:[] //类型选择数组
            },
            {
                attributeName:"disabled",//组件配置中属性字段名
                label:"禁用状态",
                type:"switch",//编辑自段的类型input select number switch buttonList
                value:false,//属性值
                defaultValue:false,//默认属性值
                valueType:Boolean,// 属性值类型,
                verifyRule:"",// 属性值校验规则 可填入正则表达式
                typeArray:[] //类型选择数组
            },

        ]
    },
    {
        component: "ScInput",
        setter: [
            {
                attributeName:"type",//组件配置中属性字段名 必写
                label:"类型",// 字段标签
                type:"select",//编辑自段的类型input select number switch 必写
                value:"text",//属性值 必写
                defaultValue:"text",//默认属性值 必写
                valueType:String,// 属性值类型 必写
                verifyRule:"",// 属性值校验规则 可填入正则表达式 非必写
                typeArray:[   {value: 'text',
                    label: 'text'},   {value: 'textarea',
                    label: 'textarea'},] //类型选择数组  非必写
            }
        ]
    }
]

export function loadComponentConfiguration(){
    const componentListStore = ComponentListStore()
    // 组件相关属性值初始化
    componentList.forEach(item=>{
        Object.keys(baseAttribute).forEach(aItem=>{
            item[aItem] = baseAttribute[aItem]
            if(item.type && item.type === "container"){
                item["children"] = []
            }else{
                item.status.activeContainer = false
                item["type"] = "common" //是否为容器组件
            }

        })
    })
    setAttribute()
    componentListStore.componentList = componentList
    componentListStore.componentSetters = componentSetters
}

// 根据组件配置属性设置组件属性
function setAttribute(){
    let settersLength = componentSetters.length
    componentList.forEach(item=>{
        for (let i = 0; i < settersLength; i++) {
            if(item.component == componentSetters[i].component){
                componentSetters[i].setter.forEach(setterItem=>{
                    item.attribute[setterItem.attributeName] = setterItem.defaultValue
                })
                break
            }
        }

    })
}
