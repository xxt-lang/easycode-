export const ScCard = {
    component:{
        component: "ScCard",
        label: '卡片',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    setter:{
        component: "ScCard",
        setter: {
            attributes: [
                {
                    attributeName: "header",//组件配置中属性字段名 必写
                    label: "类型",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                },
                {
                    attributeName: "shadow",//组件配置中属性字段名 必写
                    label: "输入提示",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "always",//属性值 必写
                    defaultValue: "always",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'always', label: 'always'},
                        {value: 'never', label: 'never'},
                        {value: 'hover', label: 'hover'},] //类型选择数组  非必写
                }
            ],
            styles: {}
        }
    },
}
