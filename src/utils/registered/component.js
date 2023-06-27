export const componentList = [
    {
        component: "ScButton",
        label: '按钮', // 左侧组件列表中显示的名字
        icon: 'el-icon-edit', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
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
            width: '200px'
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
        styles: {},
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
            width: '200px'
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
        styles: {},
        type: "container"
    },
    {
        component: "ScRow",
        label: '行',
        event: {},
        attributes: {},
        styles: {},
        children: [
            {
                component: "container",
                attribute: 'col',
                label: "列",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'col',
                label: "列",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
        ],
        type: "container"
    },
    {
        component: "ScMenu",
        label: '导航',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScDrawer",
        label: '抽屉',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScDialog",
        label: '弹窗',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
]
export const componentSetters = [
    {
        component: "ScButton", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "type",//组件配置中属性字段名
                    label: "类型",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "primary",//属性值
                    defaultValue: "primary",//默认属性值
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
                            value: 'text',
                            label: 'text'
                        }] //类型选择数组
                },
                {
                    attributeName: "size",//组件配置中属性字段名
                    label: "尺寸",
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
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                    valueType: Boolean,// 属性值类型,
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [] //类型选择数组
                },
                {
                    attributeName: "round",//组件配置中属性字段名
                    label: "原型按钮",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "disabled",//组件配置中属性字段名
                    label: "禁用状态",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "circle",//组件配置中属性字段名
                    label: "圆形",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "loading",//组件配置中属性字段名
                    label: "loading",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "loading-icon",//组件配置中属性字段名
                    label: "加载中状态图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: 'Loading',//属性值
                    defaultValue: 'Loading',//默认属性值
                },
                {
                    attributeName: "icon",//组件配置中属性字段名
                    label: "图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "autofocus",//组件配置中属性字段名
                    label: "原生autofocus",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "native-type",//组件配置中属性字段名
                    label: "原生type属性",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: 'button',//属性值
                    defaultValue: 'button',//默认属性值
                    typeArray: [
                        {value: 'button', label: 'button'}, {value: 'submit', label: 'submit'}, {
                            value: 'reset',
                            label: 'reset'
                        }
                    ] //类型选择数组
                },
                {
                    attributeName: "color",//组件配置中属性字段名
                    label: "颜色",
                    type: "color",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "dark",//组件配置中属性字段名
                    label: "dark模式",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
            ],
            styles: {},
            events: [
                {
                    event: "click", // 事件名称
                    enable:false,// 是否启用
                    method:''// 绑定方法名

                }
            ]
        },
    },
    {
        component: "ScInput",
        setter: {
            attributes: [
                {
                    attributeName: "value",//组件配置中属性字段名 必写
                    label: "value绑定",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                },
                {
                    attributeName: "type",//组件配置中属性字段名 必写
                    label: "类型",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "text",//属性值 必写
                    defaultValue: "text",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    verifyRule: "",// 属性值校验规则 可填入正则表达式 非必写
                    typeArray: [{
                        value: 'text',
                        label: 'text'
                    }, {
                        value: 'textarea',
                        label: 'textarea'
                    },] //类型选择数组  非必写
                },
                {
                    attributeName: "placeholder",//组件配置中属性字段名 必写
                    label: "输入提示",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "请输入",//属性值 必写
                    defaultValue: "请输入",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'text', label: 'text'},
                        {value: 'textarea', label: 'textarea'},
                    ] //类型选择数组  非必写
                },
                {
                    attributeName: "maxlength",//组件配置中属性字段名 必写
                    label: "最大输入长度",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 100,//属性值 必写
                    defaultValue: 100,//默认属性值 必写
                    max: 1000,
                    min:0
                },
                {
                    attributeName: "minlength",//组件配置中属性字段名 必写
                    label: "最小输入长度",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 0,//属性值 必写
                    defaultValue: 0,//默认属性值 必写
                    max: 100,
                    min:0
                },
                {
                    attributeName:"show-word-limit",//组件配置中属性字段名
                    label:"统计字数",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"clearable",//组件配置中属性字段名
                    label:"显示清除按钮",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"show-password",//组件配置中属性字段名
                    label:"切换密码图标",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"disabled",//组件配置中属性字段名
                    label:"是否禁用",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName: "size",//组件配置中属性字段名 必写
                    label: "尺寸",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    verifyRule: "",// 属性值校验规则 可填入正则表达式 非必写
                    typeArray: [{
                        value: 'large',
                        label: 'large'
                    }, {
                        value: 'default',
                        label: 'default'
                    },{
                        value: 'small',
                        label: 'small'
                    },] //类型选择数组  非必写
                },
                {
                    attributeName:"prefix-icon",//组件配置中属性字段名
                    label:"前缀图标",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName:"suffix-icon",//组件配置中属性字段名
                    label:"后缀图标",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName:"rows",//组件配置中属性字段名
                    label:"行数",
                    type:"inputNumber",//编辑自段的类型input select number switch buttonList
                    value:1,//属性值
                    defaultValue:1,//默认属性值
                },
                {
                    attributeName:"autosize",//组件配置中属性字段名
                    label:"高度是否自适应",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"autocomplete",//组件配置中属性字段名
                    label:"autocomplete 属性",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'off',//属性值
                    defaultValue:'off',//默认属性值
                },
                {
                    attributeName:"name",//组件配置中属性字段名
                    label:"name 属性",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName:"readonly",//组件配置中属性字段名
                    label:"是否只读",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"max",//组件配置中属性字段名
                    label:"max 属性",
                    type:"inputNumber",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName:"min",//组件配置中属性字段名
                    label:"min 属性",
                    type:"inputNumber",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName:"step",//组件配置中属性字段名
                    label:"合法数字间隔",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName: "resize",//组件配置中属性字段名 必写
                    label: "缩放",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    verifyRule: "",// 属性值校验规则 可填入正则表达式 非必写
                    typeArray: [{
                        value: 'none',
                        label: 'none'
                    }, {
                        value: 'both',
                        label: 'both'
                    },{
                        value: 'horizontal',
                        label: 'horizontal'
                    },{
                        value: 'vertical',
                        label: 'vertical'
                    }] //类型选择数组  非必写
                },
                {
                    attributeName:"autofocus",//组件配置中属性字段名
                    label:"自动获取焦点",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"form",//组件配置中属性字段名
                    label:"form属性",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
                {
                    attributeName:"validate-event",//组件配置中属性字段名
                    label:"是否触发校验",
                    type:"switch",//编辑自段的类型input select number switch buttonList
                    value:false,//属性值
                    defaultValue:false,//默认属性值
                },
                {
                    attributeName:"tabindex",//组件配置中属性字段名
                    label:"输入框的 tabindex",
                    type:"inputNumber",//编辑自段的类型input select number switch buttonList
                    value:0,//属性值
                    defaultValue:0,//默认属性值
                },
                {
                    attributeName:" input-style",//组件配置中属性字段名
                    label:"元素的 style",
                    type:"input",//编辑自段的类型input select number switch buttonList
                    value:'',//属性值
                    defaultValue:'',//默认属性值
                },
            ],
            styles: {}
        }
    },
    {
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
    {
        component: "ScRate",
        setter: {
            attributes: [
                {
                    attributeName: "max",//组件配置中属性字段名 必写
                    label: "最大分数值",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 5,//属性值 必写
                    defaultValue: 5,//默认属性值 必写
                    valueType: Number,// 属性值类型 必写
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
    {
        component: "ScSwitch", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "size",//组件配置中属性字段名
                    label: "尺寸",
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
                    attributeName: "width",//组件配置中属性字段名
                    label: "宽度",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 0,//属性值
                    defaultValue: 0,//默认属性值
                    valueType: Number,// 属性值类型,
                },
                {
                    attributeName: "loading",//组件配置中属性字段名
                    label: "是否显示加载中",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                    valueType: Boolean,// 属性值类型,
                },
                {
                    attributeName: "disabled",//组件配置中属性字段名
                    label: "禁用状态",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                    valueType: Boolean,// 属性值类型,
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [] //类型选择数组
                },
                {
                    attributeName: "active-text",//组件配置中属性字段名
                    label: "open文字描述",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                    valueType: Boolean,// 属性值类型,
                },
                {
                    attributeName: " inactive-text",//组件配置中属性字段名
                    label: "off文字描述",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                    valueType: Boolean,// 属性值类型,
                },

            ],
            styles: {},
            events: [
                {
                    event: "click", // 事件名称
                    annotation: "",
                    eventContent: {}
                }
            ]
        },
    },
    {
        component: "ScRow",
        setter: {
            attributes: [
                {
                    attributeName: "justify",//组件配置中属性字段名
                    label: "flex水平布局",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "start",//属性值
                    defaultValue: "start",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [
                        {
                            value: 'start',
                            label: 'start'
                        },
                        {
                            value: 'end',
                            label: 'end'
                        },
                        {
                            value: 'center',
                            label: 'center'
                        },
                        {
                            value: 'space-around',
                            label: 'space-around'
                        },
                        {
                            value: 'space-between',
                            label: 'space-between'
                        },
                        {
                            value: 'space-evenly',
                            label: 'space-evenly'
                        },] //类型选择数组
                },
                {
                    attributeName: "gutter",//组件配置中属性字段名
                    label: "栅格间隔",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 0,//属性值
                    defaultValue: 0,//默认属性值
                    valueType: Number,// 属性值类型,
                },
                {
                    attributeName: "col",//组件配置中属性字段名
                    label: "配置列",
                    type: "table",//编辑自段的类型input select number switch buttonList
                    defaultValue: [],
                    isChildren: true,// 是否与children绑定
                    column: [
                        {
                            attributeName: "span",//组件配置中属性字段名
                            label: "栅格列数",
                            type: "inputNumber",//编辑自段的类型input select number switch buttonList
                            value: 12,//属性值
                            defaultValue: 12,//默认属性值
                            max: 24,
                            valueType: Number,// 属性值类型,
                        },
                        {
                            attributeName: "offset",//组件配置中属性字段名
                            label: "栅格左侧间隔",
                            type: "inputNumber",//编辑自段的类型input select number switch buttonList
                            value: 0,//属性值
                            defaultValue: 0,//默认属性值
                            valueType: Number,// 属性值类型,
                        },
                    ],
                },
            ],
            styles: {},
            events: [
                {
                    event: "click", // 事件名称
                    annotation: "",
                    eventContent: {}
                }
            ],
            configuration: {
                childrenTemplate: {
                    component: "container",
                    attribute: 'col',
                    label: "列",
                    id: "",
                    event: {},
                    attributes: {},
                    styles: {},
                    children: [],
                    featherId: "",
                    type: "container"
                },
            }

        },
    },
    {
        component: "ScSlider",
        setter: {
            attributes: [],
            styles: {},
            events: []
        }
    }
]
