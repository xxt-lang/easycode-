export const ScScrollbar = {
    component: {
        component: "ScScrollbar",
        label: '滚动条', // 左侧组件列表中显示的名字
        type: "container",
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
    },
    setter:{
        component: "ScScrollbar", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
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
                    max:999
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
                {
                    attributeName: "tag",//组件配置中属性字段名
                    label: "视图的元素标签",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "div",//属性值
                    defaultValue: "div",//默认属性值
                },
                {
                    attributeName: "ref",//组件配置中属性字段名
                    label: "ref",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "link",//属性值
                    defaultValue: "link",//默认属性值
                },
                {
                    attributeName: "innerRef",//组件配置中属性字段名
                    label: "innerRef",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                },

            ],
            styles: {},
            events: [
                {
                    event: "scroll", // 事件名称
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ],
        },
    },
}
