import {generalTemplate} from "../../../utils/ecTemplate";

export const ScInput = {
    component: {
        component: "ScInput",
        label: '输入框',
        events: {},
        attributes: {},
        styles: {display:"inline-flex"},
        shapeStyles:{

        }
    },
    setter:{
        component: "ScInput",
        setter: {
            attributes: [
                {
                    attributeName: "modelValue",
                    label: "value绑定",
                    detail:"绑定值",
                    bind: 'value',
                    type: "input",
                    value: "",
                    defaultValue: "",
                },
                {
                    attributeName: "type",
                    label: "类型",
                    type: "select",
                    value: "text",
                    defaultValue: "text",
                    detail:"类型",
                    typeArray: [{
                        value: 'text',
                        label: 'text'
                    }, {
                        value: 'textarea',
                        label: 'textarea'
                    },]
                },
                {
                    attributeName: "placeholder",
                    label: "输入提示",
                    type: "input",
                    value: "请输入",
                    defaultValue: "请输入",
                    detail:"输入框占位文本",
                    typeArray: [
                        {value: 'text', label: 'text'},
                        {value: 'textarea', label: 'textarea'},
                    ]
                },
                {
                    attributeName: "max-length",
                    label: "最大输入长度",
                    type: "inputNumber",
                    detail: "最大输入长度",
                    value: 100,
                    defaultValue: 100,
                    max: 9999,
                    min: 0
                },
                {
                    attributeName: "min-length",
                    label: "最小输入长度",
                    type: "inputNumber",
                    detail:"最小输入长度",
                    value: 0,
                    defaultValue: 0,
                    max: 100,
                    min: 0
                },
                {
                    attributeName: "show-word-limit",
                    label: "统计字数",
                    type: "switch",
                    detail:"是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "clearable",
                    label: "显示清除按钮",
                    type: "switch",
                    detail:"是否显示清除按钮，只有当 type 不是 textarea时生效",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "show-password",
                    label: "切换密码图标",
                    type: "switch",
                    detail:"是否显示切换密码图标",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "disabled",
                    label: "是否禁用",
                    type: "switch",
                    detail:"是否禁用",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail:"输入框尺寸，只在 type 不为 'textarea' 时有效",
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
                    attributeName: "prefix-icon",
                    label: "前缀图标",
                    type: "input",
                    detail:"自定义前缀图标",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "suffix-icon",
                    label: "后缀图标",
                    type: "input",
                    detail:"自定义后缀图标",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "rows",
                    label: "行数",
                    type: "inputNumber",
                    detail: "输入框行数，仅 type 为 'textarea' 时有效",
                    value: 1,
                    defaultValue: 1,
                    max:9999
                },
                {
                    attributeName: "autosize",
                    label: "高度是否自适应",
                    type: "switch",
                    detail: "原生 autocomplete 属性",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "autocomplete",
                    label: "autocomplete 属性",
                    type: "input",
                    value: 'off',
                    defaultValue: 'off',
                },
                {
                    attributeName: "name",
                    label: "name 属性",
                    type: "input",
                    detail: "等价于原生 input name 属性",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "readonly",
                    label: "是否只读",
                    type: "switch",
                    detail: "原生  readonly 属性，是否只读",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "max",
                    label: "max 属性",
                    type: "inputNumber",
                    detail:'原生 max 属性，设置最大值',
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "min",
                    label: "min 属性",
                    type: "inputNumber",
                    detail:"原生属性，设置最小值",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "step",
                    label: "合法数字间隔",
                    type: "input",
                    detail:"原生属性，设置输入字段的合法数字间隔",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "resize",
                    label: "缩放",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail:"控制是否能被用户缩放",
                    typeArray: [{
                        value: 'none',
                        label: 'none'
                    }, {
                        value: 'both',
                        label: 'both'
                    }, {
                        value: 'horizontal',
                        label: 'horizontal'
                    }, {
                        value: 'vertical',
                        label: 'vertical'
                    }]
                },
                {
                    attributeName: "autofocus",
                    label: "自动获取焦点",
                    type: "switch",
                    detail: "输入时是否触发表单的校验",
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
                    attributeName: "tabindex",
                    label: "输入框的 tabindex",
                    type: "inputNumber",
                    detail: "输入框的 tabindex",
                    value: 0,
                    defaultValue: 0,
                },
                {
                    attributeName: "input-style",
                    label: "元素的 style",
                    type: "input",
                    value: '',
                    defaultValue: '',
                },
            ],
            styles: {},
            events: [
                {
                    event: "blur", // 事件名称
                    enable: false,// 是否启用
                    detail:"当选择器的输入框失去焦点时触发",
                    method: ''// 绑定方法名
                },
                {
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail:"当选择器的输入框获得焦点时触发",
                    method: ''// 绑定方法名
                },
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail:"仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发",
                    method: ''// 绑定方法名
                },
                {
                    event: "input", // 事件名称
                    enable: false,// 是否启用
                    detail:"在 Input 值改变时触发",
                    method: ''// 绑定方法名
                },
                {
                    event: "clear", // 事件名称
                    enable: false,// 是否启用
                    detail:"在点击由 clearable 属性生成的清空按钮时触发",
                    method: ''// 绑定方法名
                }
            ],
        }
    },
    template: (param)=>{
        return `
        <el-input
        ${generalTemplate(param)}
        >
        </el-input>
        `
    }
}
