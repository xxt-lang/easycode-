export const ScColorPicker = {
    component: {
        component: "ScColorPicker",
        label: '颜色选择器',
        events: {},
        attributes: {},
        styles: {},
    },
    setter: {
        component: "ScInput",
        setter: {
            attributes: [
                {
                    attributeName: "colorValue",
                    label: "value绑定",
                    detail: "选中项绑定值",
                    bind: 'value',
                    type: "input",
                    value: "colorValue",
                    defaultValue: "colorValue",
                },
                {
                    attributeName: "predefineValue",
                    label: "value绑定",
                    detail: "预定义颜色",
                    bind: 'value',
                    type: "input",
                    value: "predefineValue",
                    defaultValue: "predefineValue",
                },
                {
                    attributeName: "colorRef",//组件配置中属性字段名
                    label: "绑定colorRef",
                    bind:'ref',
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "colorRef",//属性值
                    defaultValue: "colorRef",//默认属性值
                },
                {
                    attributeName: "disabled",
                    label: "是否禁用",
                    type: "switch",
                    detail: "是否禁用",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "尺寸",
                    typeArray: [{
                        value: 'large',
                        label: 'large'
                    }, {
                        value: 'default',
                        label: 'default'
                    }, {
                        value: 'small',
                        label: 'small'
                    },]
                },
                {
                    attributeName: "show-alpha",
                    label: "透明度选择",
                    type: "switch",
                    detail: "是否支持透明度选择",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "validate-event",
                    label: "是否触发校验",
                    type: "switch",
                    detail: "输入时是否触发表单的校验",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "color-format",
                    label: "颜色的格式",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "尺寸",
                    typeArray: [
                        {
                            value: 'hsl',
                            label: 'hsl'
                        },
                        {
                            value: 'hsl',
                            label: 'hsl'
                        },
                        {
                            value: 'hex',
                            label: 'hex'
                        },
                        {
                            value: 'rgb',
                            label: 'rgb'
                        },
                    ]
                },

            ],
            styles: {},
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "当绑定值变化时触发",
                    method: ''// 绑定方法名
                },
                {
                    event: "active-change", // 事件名称
                    enable: false,// 是否启用
                    detail: "面板中当前显示的颜色发生改变时触发",
                    method: ''// 绑定方法名
                },
            ],
        }
    }
}
