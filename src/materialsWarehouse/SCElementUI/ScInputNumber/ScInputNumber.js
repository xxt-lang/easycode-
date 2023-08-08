import {generalTemplate} from "../../../utils/ecTemplate";
export const ScInputNumber = {
    component:{
        component: "ScInputNumber",
        label: 'ScInputNumber',
        events: {},
        attributes: {},
        styles: { display:"inline-flex"},
        shapeStyles:{

        }
    },
    setter:{
        component: "ScInputNumber",
        setter: {
            attributes: [
                    {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"绑定值",
                    bind:'value',
                    },
                    {
                    attributeName: "min",
                    label: "min",
                    type: "inputNumber",
                    value: "",
                    defaultValue: "",
                    detail:"设置计数器允许的最小值",
                    },
                    {
                    attributeName: "max",
                    label: "max",
                    type: "inputNumber",
                    value: "",
                    defaultValue: "",
                    detail:"设置计数器允许的最大值",
                    },
                    {
                    attributeName: "step",
                    label: "计数器步长",
                    type: "inputNumber",
                    value: 1,
                    defaultValue: 1,
                    detail:"计数器步长",
                    },
                    {
                    attributeName: "step-strictly",
                    label: "只能输入 step 的倍数",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"是否只能输入 step 的倍数",
                    },
                    {
                    attributeName: "precision",
                    label: "数值精度",
                    type: "inputNumber",
                    value: 1,
                    defaultValue: 1,
                    detail:"数值精度",
                    max:9999,
                    },
                    {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail:"计数器尺寸",
                    typeArray: [{'label': 'large', 'value': 'large'},{'label': 'default', 'value': 'default'},{'label': 'small', 'value': 'small'},]
                    },
                    {
                    attributeName: "readonly",
                    label: "只读",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"是否只读",
                    },
                    {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"是否禁用",
                    },
                    {
                    attributeName: "controls",
                    label: "使用控制按钮",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail:"是否使用控制按钮",
                    },
                    {
                    attributeName: "controls-position",
                    label: "控制按钮位置",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail:"控制按钮位置",
                    typeArray: [{'label': '', 'value': ''},{'label': 'right', 'value': 'right'},]
                    },
                    {
                    attributeName: "placeholder",
                    label: "占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"占位文本",
                    },
                    {
                    attributeName: "validate-event",
                    label: "触发表单验证",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail:"是否触发表单验证",
                    },

            ],
            events:[
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail:"绑定值被改变时触发",
                    method: ''// 绑定方法名
                },{
                    event: "blur", // 事件名称
                    enable: false,// 是否启用
                    detail:"在组件 Input 失去焦点时触发",
                    method: ''// 绑定方法名
                },{
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail:"在组件 Input 失去焦点时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-input-number
            ${generalTemplate(param)}
        >
        </el-input-number>
        `
    }
}
