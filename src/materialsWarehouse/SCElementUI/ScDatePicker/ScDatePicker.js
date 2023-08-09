import {generalTemplate} from "../../../utils/ecTemplate";

export const ScDatePicker = {
    component: {
        component: "ScDatePicker",
        label: '日期选择器',
        events: {},
        attributes: {},
        styles: {display:"inline-flex"},
        shapeStyles:{
        }
    },
    setter: {
        component: "ScDatePicker",
        setter: {
            attributes: [
                {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "绑定值",
                    bind: 'value',
                },
                {
                    attributeName: "readonly",
                    label: "只读",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "只读",
                },
                {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "禁用",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail: "输入框尺寸",
                    typeArray:[
                        {label:"large",value:"large"},
                        {label:"default",value:"default"},
                        {label:"small",value:"small"}
                    ]
                },
                {
                    attributeName: "editable",
                    label: "可输入",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "文本框可收入",
                },
                {
                    attributeName: "clearable",
                    label: "清除按钮",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否展示清除按钮",
                },
                {
                    attributeName: "placeholder",
                    label: "占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "非范围选择占位文本",
                },
                {
                    attributeName: "start-placeholder",
                    label: "开始日期占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "范围选择时开始日期的占位文本",
                },
                {
                    attributeName: "end-placeholder",
                    label: "结束日期占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "范围选择时结束日期的占位文本",
                },
                {
                    attributeName: "type",
                    label: "显示类型",
                    type: "select",
                    value: "date",
                    defaultValue: "date",
                    detail: "显示类型",
                    typeArray: [
                        {label:"year",value:"year"},
                        {label:"month",value:"month"},
                        {label:"date",value:"date"},
                        {label:"dates",value:"dates"},
                        {label:"datetime",value:"datetime"},
                        {label:"week",value:"week"},
                        {label:"datetimerange",value:"datetimerange"},
                        {label:"daterange",value:"daterange"},
                        {label:"monthrange",value:"monthrange"},
                    ]
                },
                {
                    attributeName: "format",
                    label: "格式",
                    type: "input",
                    value: "YYYY-MM-DD",
                    defaultValue: "YYYY-MM-DD",
                    detail: "显示在输入框中的格式 参考 date formats",
                },
                {
                    attributeName: "popper-class",
                    label: "下拉框类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "DatePicker下拉框类名",
                },
                // {
                // attributeName: "popper-options",
                // label: "popper-options",
                // type: "input",
                // value: "",
                // defaultValue: "",
                // detail:"Customized popper option see more at popper.js",
                // },
                {
                    attributeName: "range-separator",
                    label: "分隔符",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "选择范围时的分隔符",
                },
                // {
                // attributeName: "default-value",
                // label: "default-value",
                // type: "input",
                // value: "",
                // defaultValue: "",
                // detail:"optional, default date of the calendar",
                // },
                // {
                // attributeName: "default-time",
                // label: "default-time",
                // type: "input",
                // value: "",
                // defaultValue: "",
                // detail:"optional, the time value to use when selecting date range",
                // },
                {
                    attributeName: "value-format",
                    label: "绑定值格式",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "可选，绑定值的格式。不指定则绑定值未Date对象 参考date formats",
                },
                {
                    attributeName: "id",
                    label: "id",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "原生input id",
                },
                {
                    attributeName: "name",
                    label: "name",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "原生input name",
                },
                {
                    attributeName: "unlink-panels",
                    label: "取消联动",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "在范围选择器里取消两个日期面板之间的联动",
                },
                {
                    attributeName: "prefix-icon",
                    label: "前缀图标",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义前缀图标",
                },
                {
                    attributeName: "clear-icon",
                    label: "清除图标",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义清除图标",
                },
                {
                    attributeName: "validate-event",
                    label: "表单验证",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否触发表单验证",
                },
                // {
                // attributeName: "disabled-date",
                // label: "disabled-date",
                // type: "input",
                // value: "",
                // defaultValue: "",
                // detail:"a function determining if a date is disabled with that date as its parameter. Should return a Boolean",
                // },
                // {
                // attributeName: "shortcuts",
                // label: "shortcuts",
                // type: "input",
                // value: "",
                // defaultValue: "",
                // detail:"an object array to set shortcut options",
                // },
                // {
                // attributeName: "cell-class-name",
                // label: "cell-class-name",
                // type: "input",
                // value: "",
                // defaultValue: "",
                // detail:"设置自定义类名",
                // },
                {
                    attributeName: "teleported",
                    label: "插入body",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否将 date-picker 的下拉列表插入至 body 元素",
                },
            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "用户确认选定的值时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "blur", // 事件名称
                    enable: false,// 是否启用
                    detail: "在组件 Input 获得焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail: "在组件 Input 获得焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "calendarChange", // 事件名称
                    enable: false,// 是否启用
                    detail: "当日历所选的日期更改时触发。 仅适用于 daterange",
                    method: ''// 绑定方法名
                }, {
                    event: "panelChange", // 事件名称
                    enable: false,// 是否启用
                    detail: "当日期面板改变时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "visibleChange", // 事件名称
                    enable: false,// 是否启用
                    detail: "当 DatePicker 的下拉列表出现/消失时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-date-picker
        ${generalTemplate(param)}
        >
        </el-date-picker >
        `
    }
}
