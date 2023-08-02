import {generalTemplate} from "../../../utils/ecTemplate";

export const ScTimePicker = {
    component: {
        component: "ScTimePicker",
        label: 'ScTimePicker',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {
            display: "inline-flex"
        }
    },
    setter: {
        component: "ScTimePicker",
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
                    attributeName: "disabled-hours-bindValue",
                    label: "禁止选择部分小时选项",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "禁止选择部分小时选项 <br> Function (role: string, comparingDate?: Dayjs) => number[]",
                    bind: 'value',
                },
                {
                    attributeName: "disabled-minutes-bindValue",
                    label: "禁止选择部分分钟选项",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "禁止选择部分分钟选项 <br> Function (hour: number, role: string, comparingDate?: Dayjs) => number[]",
                    bind: 'value',
                },
                {
                    attributeName: "disabled-seconds-bindValue",
                    label: "禁止选择部分秒选项",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "禁止选择部分秒选项 <br> Function (hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]",
                    bind: 'value',
                },
                {
                    attributeName: "readonly",
                    label: "只读",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否只读",
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
                    attributeName: "editable",
                    label: "文本框可输入",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "文本框可输入",
                },
                {
                    attributeName: "clearable",
                    label: "显示清除按钮",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否显示清除按钮",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "尺寸",
                    typeArray: [{'label': 'large', 'value': 'large'}, {
                        'label': 'default',
                        'value': 'default'
                    }, {'label': 'small', 'value': 'small'},]
                },
                {
                    attributeName: "placeholder",
                    label: "占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "非范围选择时的占位文本",
                },
                {
                    attributeName: "start-placeholder",
                    label: "开始日期的占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "范围选择时开始日期的占位文本",
                },
                {
                    attributeName: "end-placeholder",
                    label: "结束日期的占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "范围选择时结束日期的占位内容",
                },
                {
                    attributeName: "is-range",
                    label: "时间范围选择",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否为时间范围选择",
                },
                {
                    attributeName: "arrow-control",
                    label: "箭头进行时间选择",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否使用箭头进行时间选择",
                },
                {
                    attributeName: "popper-class",
                    label: "下拉框的类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "TimePicker 下拉框的类名",
                },
                {
                    attributeName: "range-separator",
                    label: "选择范围时的分隔符",
                    type: "input",
                    value: "-",
                    defaultValue: "-",
                    detail: "选择范围时的分隔符",
                },
                {
                    attributeName: "format",
                    label: "格式",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "显示在输入框中的格式",
                },
                {
                    attributeName: "default-value",
                    label: "default-value",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "可选，选择器打开时默认显示的时间",
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
                    attributeName: "teleported",
                    label: "teleported",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否将 popover 的下拉列表镜像至 body 元素",
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
                    detail: "用户确认选定的值时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail: "在组件 Input 获得焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "visiblechange", // 事件名称
                    enable: false,// 是否启用
                    detail: "当 TimePicker 的下拉列表出现/消失时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-timepicker
            ${generalTemplate(param)}
        >
        </el-timepicker>
        `
    }
}
