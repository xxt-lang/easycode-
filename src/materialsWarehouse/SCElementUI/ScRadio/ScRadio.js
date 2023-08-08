import {generalTemplate} from "../../../utils/ecTemplate";

export const ScRadio= {
    component: {
        component: "ScRadio",
        label: '单选框',
        type: "ScRadio",
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: { display:"inline-flex"},
        shapeStyles:{

        }
    },
    setter:{
        component: "ScRadio",
        setter: {
            attributes: [
                {
                    attributeName: "radioValue",
                    label: "value绑定",
                    type: "input",
                    value: "radioValue",
                    defaultValue: "radioValue",
                    detail:"绑定值",
                    bind:'value',
                },
                {
                    attributeName: "label",
                    label: "单选框的值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"单选框的值",
                },
                {
                    attributeName: "labelText",
                    label: "label",
                    type: "input",
                    value: "radio",
                    defaultValue: "radio",
                    detail:"label文本",
                },
                {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"是否禁用单选框",
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
                    detail:"单选框的尺寸",
                    typeArray: [{'label': 'large', 'value': 'large'},{'label': 'default', 'value': 'default'},{'label': 'small', 'value': 'small'},]
                },
            ],
            events:[
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail:"绑定值变化时触发的事件",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-radio 
        ${generalTemplate(param,{attr:["labelText"]})}
        >
        ${param.attributes.labelText !==""?`${param.attributes.labelText }`:''} 
        </el-radio >
        `
    }
}

