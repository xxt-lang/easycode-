import {generalTemplate} from "../../../utils/ecTemplate";

export const ScSwitch = {
    component: {
        component: "ScSwitch",
        label: 'ScSwitch',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {
            display: "inline-flex"
        }
    },
    setter: {
        component: "ScSwitch",
        setter: {
            attributes: [

                {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "modelValue",
                    defaultValue: "modelValue",
                    detail: "绑定值",
                    bind: 'value',
                },
                {
                    attributeName: "active-value-bindValue",
                    label: "on 时的值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "switch 状态为 on 时的值 boolean / string / number",
                },
                {
                    attributeName: "inactive-value-bindValue",
                    label: "off 时的值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "switch的状态为 off 时的值 boolean / string / number",
                },
                {
                    attributeName: "before-change-bindValue",
                    label: "before-change",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换 boolean/Function",
                },
                {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否禁用",
                },
                {
                    attributeName: "loading",
                    label: "显示加载中",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否显示加载中",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "switch 的尺寸",
                    typeArray: [{'label': '', 'value': ''}, {'label': 'large', 'value': 'large'}, {
                        'label': 'default',
                        'value': 'default'
                    }, {'label': 'small', 'value': 'small'},]
                },
                {
                    attributeName: "width",
                    label: "宽度",
                    type: "inputNumber",
                    value: "",
                    defaultValue: "",
                    detail: "switch 的宽度",
                },
                {
                    attributeName: "inline-prompt",
                    label: "inline-prompt",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "无论图标或文本是否显示在点内，只会呈现文本的第一个字符",
                },
                {
                    attributeName: "active-icon",
                    label: "on时所显示图标",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "switch 状态为 on 时所显示图标，设置此项会忽略 active-text",
                },
                {
                    attributeName: "inactive-icon",
                    label: "off时所显示的图标",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text",
                },
                {
                    attributeName: "active-text",
                    label: "on时所显示文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "switch 打开时的文字描述",
                },
                {
                    attributeName: "inactive-text",
                    label: "off时所显示的文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "switch 的状态为 off 时的文字描述",
                },
                {
                    attributeName: "validate-event",
                    label: "触发表单的校验",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "改变 switch 状态时是否触发表单的校验",
                },
            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "switch 状态发生变化时的回调函数",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-switch
            ${generalTemplate(param)}
        >
        </el-switch>
        `
    }
}
