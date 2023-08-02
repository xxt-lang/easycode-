import {generalTemplate} from "../../../utils/ecTemplate";

export const ScDateTimePicker = {
    component: {
        component: "ScDateTimePicker",
        label: '日期时间选择器',
        events: {},
        attributes: {},
        styles: {display: "inline-flex"},
        shapeStyles: {
            display: "inline-flex"
        }
    },
    setter: {
        component: "ScDateTimePicker",
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
                    attributeName: "disabled-date-value",
                    label: "disabled-date",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。Function(Date)",
                },
                {
                    attributeName: "cell-class-name-value",
                    label: "cell-class-name",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "设置自定义类名 Function(Date)",
                },
                {
                    attributeName: "default-value",
                    label: "默认显示的时间",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "选择器打开时默认显示的时间  Date / [Date, Date]",
                },
                {
                    attributeName: "default-time-value",
                    label: "选择日期后的默认时间值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "选择日期后的默认时间值。 如未指定则默认时间值为 00:00:00  Date / [Date, Date]",
                },
                // {
                //     attributeName: "shortcuts-vale",
                //     label: "快捷",
                //     type: "input",
                //     value: "",
                //     defaultValue: "",
                //     bind: 'value',
                //     detail: "设置快捷选项，需要传入数组对象 object[{ text: string, value: date / function }]",
                // },
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
                    label: "清除按钮",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否显示清除按钮",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
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
                        }], //类型选择数组
                    detail: "尺寸",
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
                    detail: "范围选择时结束日期的占位文本",
                },
                {
                    attributeName: "time-arrow-control",
                    label: "使用箭头按钮选取时间",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否使用箭头按钮选取时间",
                },
                {
                    attributeName: "type",
                    label: "类型",
                    type: "select",
                    value: "date",
                    defaultValue: "date",
                    typeArray: [
                        {
                            value: 'year',
                            label: 'year'
                        },
                        {
                            value: 'month',
                            label: 'month'
                        },
                        {
                            value: 'date',
                            label: 'date'
                        },
                        {
                            value: 'datetime',
                            label: 'datetime'
                        },
                        {
                            value: 'week',
                            label: 'week'
                        },
                        {
                            value: 'datetimerange',
                            label: 'datetimerange'
                        },
                        {
                            value: 'daterange',
                            label: 'daterange'
                        }],
                    detail: "显示类型",
                },

                {
                    attributeName: "format",
                    label: "格式",
                    type: "input",
                    value: "YYYY-MM-DD HH:mm:ss",
                    defaultValue: "YYYY-MM-DD HH:mm:ss",
                    detail: "显示在输入框中的格式",
                },
                {
                    attributeName: "popper-class",
                    label: "下拉框的类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "DateTimePicker 下拉框的类名",
                },
                {
                    attributeName: "range-separator",
                    label: "选择范围时的分隔符",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "选择范围时的分隔符",
                },
                {
                    attributeName: "value-format",
                    label: "绑定值的格式",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "绑定值的格式。 不指定则绑定值为 Date 对象",
                },
                {
                    attributeName: "unlink-panels",
                    label: "unlink-panels",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "在范围选择器里取消两个日期面板之间的联动",
                },
                {
                    attributeName: "prefix-icon",
                    label: "前缀图标",
                    type: "input",
                    value: "Calendar",
                    defaultValue: "Calendar",
                    detail: "自定义前缀图标",
                },
                {
                    attributeName: "clear-icon",
                    label: "清除图标",
                    type: "input",
                    value: "CircleClose",
                    defaultValue: "CircleClose",
                    detail: "自定义清除图标",
                },
                {
                    attributeName: "teleported",
                    label: "teleported",
                    type: "switch",
                    value: false,
                    defaultValue: true,
                    detail: "是否将 datetime-picker 的下拉列表插入至 body 元素",
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
                    detail: "在组件 Input 失去焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail: "在组件 Input 获得焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "calendarchange", // 事件名称
                    enable: false,// 是否启用
                    detail: "如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 datetimerange 才生效",
                    method: ''// 绑定方法名
                }, {
                    event: "visiblechange", // 事件名称
                    enable: false,// 是否启用
                    detail: "当 DateTimePicker 的下拉列表出现/消失时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-date-picker
            ${generalTemplate(param,{attr:['default-value']})}
            ${param.attributes['default-value'] !== ''?`default-value="${param.attributes['default-value']}"`:''}
        >
        </el-date-picker>
        `
    }
}
