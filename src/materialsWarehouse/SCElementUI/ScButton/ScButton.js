import {generalTemplate} from "../../../utils/ecTemplate";

export const ScButton = {
    component: {
        component: "ScButton",
        label: '按钮', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
        shapeStyles:{
            display:"inline-flex"
        }
    },
    setter: {
        component: "ScButton", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "type",//组件配置中属性字段名
                    label: "类型",
                    detail: '类型',
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "primary",//属性值
                    defaultValue: "primary",//默认属性值
                    typeArray: [
                        {
                            value: 'primary',
                            label: 'primary'
                        },
                        {
                            value: 'success',
                            label: 'success'
                        },
                        {
                            value: 'warning',
                            label: 'warning'
                        },
                        {
                            value: 'danger',
                            label: 'danger'
                        },
                        {
                            value: 'info',
                            label: 'info'
                        },
                        {
                            value: 'text',
                            label: 'text'
                        }] //类型选择数组
                },
                {
                    attributeName: "size",//组件配置中属性字段名
                    label: "尺寸",
                    detail: '尺寸',
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "default",//属性值
                    defaultValue: "default",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [
                        {
                            value: 'large',
                            label: 'large'
                        },
                        {
                            value: 'default',
                            label: 'default'
                        },
                        {
                            value: 'small',
                            label: 'small'
                        }] //类型选择数组
                },
                {
                    attributeName: "label",//组件配置中属性字段名
                    label: "文本",
                    detail: "自定应文本内容",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "按钮",//属性值
                    defaultValue: "按钮",//默认属性值
                    valueType: Boolean,// 属性值类型,
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [] //类型选择数组
                },
                {
                    attributeName: "plain",//组件配置中属性字段名
                    label: "朴素按钮",
                    detail: '是否为朴素按钮',
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                    valueType: Boolean,// 属性值类型,
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [] //类型选择数组
                },
                {
                    attributeName: "round",//组件配置中属性字段名
                    label: "圆角",
                    detail: '是否为圆角按钮',
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "disabled",//组件配置中属性字段名
                    label: "禁用状态",
                    detail: '按钮是否为禁用状态',
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "circle",//组件配置中属性字段名
                    label: "圆形",
                    detail: "是否为圆形按钮",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "loading",//组件配置中属性字段名
                    label: "加载中状态",
                    detail: "是否为加载中状态",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "loading-icon",//组件配置中属性字段名
                    label: "加载中状态图标",
                    detail: "加载中状态图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: 'Loading',//属性值
                    defaultValue: 'Loading',//默认属性值
                },
                {
                    attributeName: "icon",//组件配置中属性字段名
                    label: "图标",
                    detail: "图标组件",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "autoInsertSpace",//组件配置中属性字段名
                    label: "插入空格",
                    detail: "自动在两个中文字符之间插入空格",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "color",//组件配置中属性字段名
                    label: "颜色",
                    detail: "自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色",
                    type: "color",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "dark",//组件配置中属性字段名
                    label: "dark模式",
                    detail: "自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
            ],
            events: [
                {
                    event: "click", // 事件名称
                    detail:'点击事件',
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ],
            styles: {},
            configuration: {
                setterAttributes: [
                    {
                        component: "SetButton",
                        param: {name: "自定义设置器"}
                    }
                ]
            }
        },
    },
    template: (param)=>{
        return `
        <el-button
        ${generalTemplate(param,{attr:["label"]})}
        >
        ${param.attributes.label !==""?`${param.attributes.label }`:''} 
        </el-button>
        `
    }
}
