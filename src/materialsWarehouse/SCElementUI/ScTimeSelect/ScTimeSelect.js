import {generalTemplate} from "../../../utils/ecTemplate";
export const ScTimeSelect = {
    component:{
        component: "ScTimeSelect",
        label: 'ScTimeSelect',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles:{
            display:"inline-flex"
        }
    },
    setter:{
        component: "ScTimeSelect",
        setter: {
            attributes: [
                    {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "modelValue",
                    defaultValue: "modelValue",
                    detail:"绑定值",
                    bind:'value',
                    },
                    {
                    attributeName: "disabled",
                    label: "禁用状态",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail:"禁用状态",
                    },
                    {
                    attributeName: "editable",
                    label: "文本框可输入",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail:"文本框可输入",
                    },
                    {
                    attributeName: "clearable",
                    label: "显示清除按钮",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail:"是否显示清除按钮",
                    },
                    {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail:"输入框尺寸",
                    typeArray: [{'label': 'large', 'value': 'large'},{'label': 'default', 'value': 'default'},{'label': 'small', 'value': 'small'},]
                    },
                    {
                    attributeName: "placeholder",
                    label: "占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"非范围选择时的占位内容",
                    },
                    {
                    attributeName: "effect",
                    label: "主题",
                    type: "select",
                    value: "light",
                    defaultValue: "light",
                    detail:"Tooltip 主题，内置了 dark / light 两种主题",
                    typeArray: [{'label': 'dark', 'value': 'dark'},{'label': 'light', 'value': 'light'},]
                    },
                    {
                    attributeName: "prefix-icon",
                    label: "自定义前缀图标",
                    type: "input",
                    value: "Clock",
                    defaultValue: "Clock",
                    detail:"自定义前缀图标",
                    },
                    {
                    attributeName: "clear-icon",
                    label: "自定义清除图标",
                    type: "input",
                    value: "CircleClose",
                    defaultValue: "CircleClose",
                    detail:"自定义清除图标",
                    },
                    {
                    attributeName: "start",
                    label: "开始时间",
                    type: "input",
                    value: "09:00",
                    defaultValue: "09:00",
                    detail:"开始时间",
                    },
                    {
                    attributeName: "end",
                    label: "结束时间",
                    type: "input",
                    value: "18:00",
                    defaultValue: "18:00",
                    detail:"结束时间",
                    },
                    {
                    attributeName: "step",
                    label: "间隔时间",
                    type: "input",
                    value: "00:30",
                    defaultValue: "00:30",
                    detail:"间隔时间",
                    },
                    {
                    attributeName: "min-time",
                    label: "最早时间点",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"最早时间点，早于该时间的时间段将被禁用",
                    },
                    {
                    attributeName: "max-time",
                    label: "最晚时间点",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"最晚时间点，晚于该时间的时间段将被禁用",
                    },
                    {
                    attributeName: "format",
                    label: "时间格式",
                    type: "input",
                    value: "HH:mm",
                    defaultValue: "HH:mm",
                    detail:"设置时间格式",
                    },
            ],
            events:[
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail:"用户确认选定的值时触发",
                    method: ''// 绑定方法名
                },{
                    event: "blur", // 事件名称
                    enable: false,// 是否启用
                    detail:"在组件 Input 失去焦点时触发",
                    method: ''// 绑定方法名
                },{
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail:"在组件 Input 获得焦点时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-time-select
            ${generalTemplate(param)}
        >
        </el-time-select>
        `
    }
}
