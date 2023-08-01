import {ecTemplateFor, generalTemplate} from "../../../utils/ecTemplate";
export const ScCheckbox = {
    component:{
        component: "ScCheckbox",
        label: 'ScCheckbox',
        events: {},
        attributes: {},
        styles: {"margin-right": "30px"},
        shapeStyles:{
            display:"inline-flex"
        }
    },
    setter:{
        component: "ScCheckbox",
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
                    attributeName: "label",
                    label: "选中状态的值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
                },
                {
                    attributeName: "labelText",
                    label: "label",
                    type: "input",
                    value: "checkbox",
                    defaultValue: "checkbox",
                    detail:"label文本",
                },
                {
                    attributeName: "true-label",
                    label: "选中时的值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"选中时的值",
                },
                {
                    attributeName: "false-label",
                    label: "没有选中时的值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"没有选中时的值",
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
                    attributeName: "border",
                    label: "显示边框",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"是否显示边框",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail:"尺寸",
                    typeArray: [{'label': 'large', 'value': 'large'},{'label': 'default', 'value': 'default'},{'label': 'small', 'value': 'small'},]
                },
                {
                    attributeName: "checked",
                    label: "当前是否勾选",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"当前是否勾选",
                },
                {
                    attributeName: "indeterminate",
                    label: "设置不确定状态",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"设置不确定状态，仅负责样式控制",
                },
                {
                    attributeName: "validate-event",
                    label: "输入时是否触发表单的校验",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail:"输入时是否触发表单的校验",
                },
            ],
            events:[
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail:"输入时是否触发表单的校验",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-checkbox
       ${generalTemplate(param,{attr:["labelText"]})}
        >
        ${param.attributes.labelText !==""?`${param.attributes.labelText }`:''}
        </el-checkbox>
        `
    }
}
