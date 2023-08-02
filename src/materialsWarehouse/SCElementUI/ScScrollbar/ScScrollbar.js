import {ecTemplateFor, generalTemplate, includeTemplate} from "../../../utils/ecTemplate";

export const ScScrollbar = {
    component: {
        component: "ScScrollbar",
        label: '滚动条', // 左侧组件列表中显示的名字
        type: "container",
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {
            'background-color': '#c6e2ff', height: "500px", padding: '5px'
        },
    },
    setter: {
        component: "ScScrollbar", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "scrollbarRef",//组件配置中属性字段名
                    label: "绑定scrollbarRef",
                    bind: 'ref',
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "scrollbarRef",//属性值
                    defaultValue: "scrollbarRef",//默认属性值
                },
                {
                    attributeName: "innerRef",//组件配置中属性字段名
                    label: "绑定innerRef",
                    bind: 'ref',
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "innerRef",//属性值
                    defaultValue: "innerRef",//默认属性值
                },
                {
                    attributeName: "height",//组件配置中属性字段名
                    label: "滚动条高度",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "400px",//属性值
                    defaultValue: "400px",//默认属性值
                },
                {
                    attributeName: "max-height",//组件配置中属性字段名
                    label: "滚动条最大高度",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                },
                {
                    attributeName: "native",//组件配置中属性字段名
                    label: "原生滚动条样式",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "min-size",//组件配置中属性字段名
                    label: "滚动条最小尺寸",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 20,//属性值
                    defaultValue: 20,//默认属性值
                    max: 999
                },
                {
                    attributeName: "noresize",//组件配置中属性字段名
                    label: "不响应容器尺寸变化",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "always",//组件配置中属性字段名
                    label: "滚动条总是显示",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
            ],
            styles: {},
            events: [
                {
                    event: "scroll", // 事件名称
                    enable: false,// 是否启用
                    detail: "当触发滚动事件时，返回滚动的距离",
                    method: ''// 绑定方法名
                }
            ],
        },
    },
    template:(param)=>{
        return `
        <el-scrollbar
        ${generalTemplate(param,{attr:"innerRef"})}
         >
         <div ref="${param.attributes["innerRef"]}">
         ${ecTemplateFor(param.children,(item2)=>{
            return includeTemplate(item2.component,item2)})}
         </div>
         </el-scrollbar>

        `
    }
}
