import {ComponentListStore} from "../stores/counter"
import {uuid} from "./tool";
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
        events: {
        }, // 事件列表
        attributes: {},
        styles: {},
    },
    {
        component: "ScInput",
        label: '输入框',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScRate",
        label: '评分',
        events: {},
        attributes: {},
        styles: {
            width:'200px',
        },
    },
    {
        component: "ScSelect",
        label: 'select选择器',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScColorPicker",
        label: '颜色选择器',
        events: {},
        attributes: {},
        styles: {
        },
    },
    {
        component: "ScRadio",
        label: '单选框',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScSlider",
        label: '滑块',
        events: {},
        attributes: {},
        styles: {
        },
    },
    {
        component: "ScSwitch",
        label: '开关',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScCard",
        label: '卡片',
        events: {},
        attributes: {},
        styles: {
        },
        type:"container"
    },
    {
        component: "ScRow",
        label: '行',
        event: {},
        attributes: {},
        children:[
            {
                component:"container",
                id:"",
                event: {},
                attributes: {},
                styles: {
                },
                children:[],
                featherId:"",
                type:"container"},
            {
                component:"container",
                id:"",
                event: {},
                attributes: {},
                styles: {},
                children:[],
                featherId:"",
                type:"container"},
        ],
        styles: {
        },
        type:"container"
    },
]
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
const componentSetters = [
    {
        component:"ScButton", //组件名 与组件列表中的组件一致
        setter:{
            attributes:[
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
                ],
            styles:{},
            events:[
                {
                    event:"click", // 事件名称
                    annotation:"",
                    eventContent:{}
                }
            ]
        },
    },
    {
        component: "ScInput",
        setter: {
            attributes:[
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
            },
                {
                    attributeName:"placeholder",//组件配置中属性字段名 必写
                    label:"输入提示",// 字段标签
                    type:"input",//编辑自段的类型input select number switch 必写
                    value:"请输入",//属性值 必写
                    defaultValue:"请输入",//默认属性值 必写
                    valueType:String,// 属性值类型 必写
                    typeArray:[
                        {value: 'text',label: 'text'},
                        {value: 'textarea',label: 'textarea'},
                       ] //类型选择数组  非必写
                }
                ],
            styles:{}
        }
    },
    {
        component: "ScCard",
        setter: {
            attributes:[
                {
                    attributeName:"header",//组件配置中属性字段名 必写
                    label:"类型",// 字段标签
                    type:"input",//编辑自段的类型input select number switch 必写
                    value:"",//属性值 必写
                    defaultValue:"",//默认属性值 必写
                    valueType:String,// 属性值类型 必写
                },
                {
                    attributeName:"shadow",//组件配置中属性字段名 必写
                    label:"输入提示",// 字段标签
                    type:"select",//编辑自段的类型input select number switch 必写
                    value:"always",//属性值 必写
                    defaultValue:"always",//默认属性值 必写
                    valueType:String,// 属性值类型 必写
                    typeArray:[
                        {value: 'always',label: 'always'},
                        {value: 'never',label: 'never'},
                        {value: 'hover',label: 'hover'},] //类型选择数组  非必写
                }
            ],
            styles:{}
        }
    },
    {
        component: "ScRate",
        setter: {
            attributes:[
                {
                    attributeName:"max",//组件配置中属性字段名 必写
                    label:"最大分数值",// 字段标签
                    type:"inputNumber",//编辑自段的类型input select number switch 必写
                    value:5,//属性值 必写
                    defaultValue:5,//默认属性值 必写
                    valueType:Number,// 属性值类型 必写
                },
                {
                    attributeName:"shadow",//组件配置中属性字段名 必写
                    label:"输入提示",// 字段标签
                    type:"select",//编辑自段的类型input select number switch 必写
                    value:"always",//属性值 必写
                    defaultValue:"always",//默认属性值 必写
                    valueType:String,// 属性值类型 必写
                    typeArray:[
                        {value: 'always',label: 'always'},
                        {value: 'never',label: 'never'},
                        {value: 'hover',label: 'hover'},] //类型选择数组  非必写
                }
            ],
            styles:{}
        }
    },
    {
        component:"ScSwitch", //组件名 与组件列表中的组件一致
        setter:{
            attributes:[
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
                    attributeName:"width",//组件配置中属性字段名
                    label:"宽度",
                    type:"inputNumber",//编辑自段的类型input select number switch buttonList
                    value:0,//属性值
                    defaultValue:0,//默认属性值
                    valueType:Number,// 属性值类型,
                },
                {
                    attributeName:"loading",//组件配置中属性字段名
                    label:"是否显示加载中",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                    valueType:Boolean,// 属性值类型,
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
                {
                    attributeName:"active-text",//组件配置中属性字段名
                    label:"open文字描述",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:"",//属性值
                    defaultValue:"",//默认属性值
                    valueType:Boolean,// 属性值类型,
                },
                {
                    attributeName:" inactive-text",//组件配置中属性字段名
                    label:"off文字描述",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:"",//属性值
                    defaultValue:"",//默认属性值
                    valueType:Boolean,// 属性值类型,
                },

            ],
            styles:{},
            events:[
                {
                    event:"click", // 事件名称
                    annotation:"",
                    eventContent:{}
                }
            ]
        },
    },
    {component: "ScRow",
        setter:{
            attributes:[
                {
                    attributeName:"justify",//组件配置中属性字段名
                    label:"flex水平布局",
                    type:"select",//编辑自段的类型input select number switch buttonList
                    value:"start",//属性值
                    defaultValue:"start",//默认属性值
                    valueType:String,// 属性值类型
                    verifyRule:"",// 属性值校验规则 可填入正则表达式
                    typeArray:[
                        {value: 'start',
                            label: 'start'},
                        {value: 'end',
                            label: 'end'},
                        {value: 'center',
                            label: 'center'},
                        {value: 'space-around',
                            label: 'space-around'},
                        {value: 'space-between',
                            label: 'space-between'},
                        {value: 'space-evenly',
                            label: 'space-evenly'},] //类型选择数组
                },
                {
                    attributeName:"gutter",//组件配置中属性字段名
                    label:"栅格间隔",
                    type:"inputNumber",//编辑自段的类型input select number switch buttonList
                    value:0,//属性值
                    defaultValue:0,//默认属性值
                    valueType:Number,// 属性值类型,
                },
                {
                    attributeName:"col",//组件配置中属性字段名
                    label:"配置列",
                    type:"table",//编辑自段的类型input select number switch buttonList
                    defaultValue:[],
                    isChildren:true,// 是否于children绑定
                    column:[
                        {
                            attributeName:"span",//组件配置中属性字段名
                            label:"栅格列数",
                            type:"inputNumber",//编辑自段的类型input select number switch buttonList
                            value:12,//属性值
                            defaultValue:12,//默认属性值
                            valueType:Number,// 属性值类型,
                        },
                        {
                        attributeName:"offset",//组件配置中属性字段名
                        label:"栅格左侧间隔",
                        type:"inputNumber",//编辑自段的类型input select number switch buttonList
                        value:0,//属性值
                        defaultValue:0,//默认属性值
                        valueType:Number,// 属性值类型,
                    },
                    ],
                },
            ],
            styles:{},
            events:[
                {
                    event:"click", // 事件名称
                    annotation:"",
                    eventContent:{}
                }
            ]
        },
    },
]

// 加载组件配置
export function loadComponentConfiguration(){
    const componentListStore = ComponentListStore()
    // 组件相关属性值初始化
    componentList.forEach(item=>{
        Object.keys(baseAttribute).forEach(aItem=>{
            item[aItem] = baseAttribute[aItem]
            if(item.type && item.type === "container"){
                item["children"] = item["children"]?item["children"]:[]
            }else{
                item.status.activeContainer = false
                item["type"] = "common" //是否为容器组件
                if(item.styles['display'] === undefined){
                    item.styles['display'] = 'inline-block'
                }
            }
        })
    })
    setAttribute()
    componentListStore.componentList = componentList
    componentListStore.componentSetters = componentSetters
}

// 根据组件配置属性设置组件属性
function setAttribute(){
    let setterMap = new Map();
    //后期可配置为持久化数据
    componentSetters.forEach((item,index)=>{
        setterMap.set(item.component,index)
    })
    componentList.forEach(item=>{
        let index = setterMap.get(item.component)
        if(index!==undefined){
            item['setterIndex'] = index
            componentSetters[index].setter.attributes.forEach(setterItem=>{
                item.attributes[setterItem.attributeName] = setterItem.defaultValue
                if(setterItem.type === "table"){
                    let columnObject = {}
                    setterItem.column.forEach(columnItem=>{
                        columnObject[columnItem.attributeName] = columnItem.defaultValue
                    })
                    if(setterItem.isChildren){
                        let childrenLength = item.children.length
                        for (let i = 0; i < childrenLength; i++) {
                            item.attributes[setterItem.attributeName].push(columnObject)
                        }
                    }else{
                        item.attributes[setterItem.attributeName].push(columnObject)
                    }
                }
            })
        }
    })
}
