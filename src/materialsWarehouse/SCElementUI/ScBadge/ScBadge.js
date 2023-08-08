import {ecTemplateFor, generalTemplate, includeTemplate} from "../../../utils/ecTemplate";

export const ScBadge = {
    component:{
        component: "ScBadge",
        label: '徽章',
        type: "container",
        events: {},
        attributes: {},
        styles: {
            "min-height": "50px",
            "min-width": "50px",
            display:"inline-flex"
        },
        shapeStyles:{

        }
    },
    setter:    {
        component: "ScBadge",
        setter: {
            attributes: [
                {
                    attributeName: "value",
                    label: "显示值",
                    type: "input",
                    detail:"显示值",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "value",
                    label: "显示值number",
                    type: "inputNumber",
                    detail:'显示值number',
                    value: 0,
                    defaultValue: 0,
                    max:99999
                },
                {
                    attributeName: "max",
                    label: "最大值",
                    type: "inputNumber",
                    detail:"最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用",
                    value: 99,
                    defaultValue: 99,
                    max: 9999,
                },
                {
                    attributeName: "is-dot",
                    label: "小圆点",
                    type: "switch",
                    detail:'是否显示小圆点',
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "hidden",
                    label: "隐藏",
                    type: "switch",
                    detail: "是否隐藏徽章",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "type",
                    label: "类型",
                    type: "select",
                    detail:"徽章类型",
                    value: "danger",
                    defaultValue: "danger",
                    typeArray: [
                        {value: 'primary', label: 'primary'},
                        {value: 'success', label: 'success'},
                        {value: 'warning', label: 'warning'},
                        {value: 'danger', label: 'danger'},
                        {value: 'info', label: 'info'}]
                },

            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-badge 
        ${generalTemplate(param)}
        >
        ${ecTemplateFor(param.children,(item2)=>{
            return includeTemplate(item2.component,item2)})}
        </el-badge >
        `
    }
}
