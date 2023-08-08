import {generalTemplate} from "../../../utils/ecTemplate";

export const ScLink={
    component: {
        component: "ScLink",
        label: '链接', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {display:"inline-flex"},
        shapeStyles:{

        }
    },
    setter:{
        component: "ScLink", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "type",//组件配置中属性字段名
                    label: "类型",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "default",//属性值
                    defaultValue: "default",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
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
                            value: 'default',
                            label: 'default'
                        }] //类型选择数组
                },
                {
                    attributeName: "label",//组件配置中属性字段名
                    label: "文本",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "link",//属性值
                    defaultValue: "link",//默认属性值
                },
                {
                    attributeName: "href",//组件配置中属性字段名
                    label: "链接",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "underline",//组件配置中属性字段名
                    label: "下划线",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "disabled",//组件配置中属性字段名
                    label: "禁用",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "icon",//组件配置中属性字段名
                    label: "图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "target",//组件配置中属性字段名
                    label: "target",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                // {
                //     attributeName: "ref",//组件配置中属性字段名
                //     label: "ref",
                //     type: "input",//编辑自段的类型input select number switch buttonList
                //     value: "link",//属性值
                //     defaultValue: "link",//默认属性值
                // },
            ],
            styles: {},
            events: [
                {
                    event: "click", // 事件名称
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ],
        },
    },
    template: (param)=>{
        return `
        <el-link
        ${generalTemplate(param,{attr:["label"]})}
        >
        ${param.attributes.label !==""?`${param.attributes.label }`:''} 
        </el-link>
        `
    }
}
