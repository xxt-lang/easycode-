import {generalTemplate} from "../../../utils/ecTemplate";

export const ScSlider={
    component: {
        component: "ScSlider",
        label: '滑块',
        events: {},
        attributes: {},
        styles: {
            width: '200px',
            display:"inline-flex"
        },
        shapeStyles:{
        }
    },
    setter:{
        component: "ScSlider",
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
                    attributeName: "marks-bindValue",
                    label: "标记",
                    detail:"标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式",
                    bind: 'value',
                    type: "input",
                    value: "",
                    defaultValue: "",
                },
                {  attributeName: "formatTooltip-bindValue",
                    label: "格式化提示信息",
                    detail:"格式化提示信息function(value) 举例(value)={return value+*}",
                    bind: 'value',
                    type: "input",
                    value: "",
                    defaultValue: "",
                },
                {  attributeName: "formatValueText-value",
                    label: "aria-valuenow 属性的格式",
                    detail:"显示屏幕阅读器的 aria-valuenow 属性的格式,function(value) 举例(value)={return value+*}",
                    bind: 'value',
                    type: "input",
                    value: "",
                    defaultValue: "",
                },

                {
                    attributeName: "max",
                    label: "最大值",
                    type: "inputNumber",
                    detail: "最大值",
                    value: 100,
                    defaultValue: 100,
                    max: 9999,
                },
                {
                    attributeName: "min",
                    label: "最小值",
                    type: "inputNumber",
                    detail:"最小值",
                    value: 0,
                    defaultValue: 0,
                    max: 9999,
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
                    attributeName: "step",
                    label: "步长",
                    type: "inputNumber",
                    detail:"步长",
                    value: 1,
                    defaultValue: 1,
                    max: 9999,
                    min:1
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail:"slider 包装器的大小，垂直模式下该属性不可用",
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
                    attributeName: "input-size",
                    label: "输入框大小",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail:"输入框的大小，如果设置了 size 属性，默认值自动取 size",
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
                    attributeName: "label",
                    label: "屏幕阅读器标签",
                    type: "input",
                    detail:"屏幕阅读器标签",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "range-start-label",
                    label: "开始标记",
                    type: "input",
                    detail:"当 range 为true时，屏幕阅读器标签开始的标记",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "range-end-label",
                    label: "结束标记",
                    type: "input",
                    detail:"当 range 为true时，屏幕阅读器标签结尾的标记",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "show-stops",
                    label: "间断点",
                    type: "switch",
                    detail:"是否显示间断点",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "show-tooltip",
                    label: "提示信息",
                    type: "switch",
                    detail:"是否显示提示信息",
                    value: true,
                    defaultValue: true,
                },
                {
                    attributeName: "debounce",
                    label: "去抖延迟",
                    type: "inputNumber",
                    detail:"输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效",
                    value: 300,
                    defaultValue: 300,
                    max: 99999,
                    min:0
                },
                {
                    attributeName: "tooltip-class",
                    label: "tooltip 的自定义类名",
                    detail:"tooltip 的自定义类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                },
                {
                    attributeName: "placement",
                    label: "Tooltip位置",
                    type: "select",
                    value: "top",
                    defaultValue: "top",
                    detail:"Tooltip 出现的位置",
                    typeArray: [
                        {
                            value: 'top',
                            label: 'top'
                        },
                        {
                            value: 'top-start',
                            label: 'top-start'
                        },
                        {
                            value: 'top-end',
                            label: 'top-end'
                        },
                        {
                            value: 'bottom',
                            label: 'bottom'
                        },
                        {
                            value: 'bottom-start',
                            label: 'bottom-start'
                        },
                        {
                            value: 'bottom-end',
                            label: 'bottom-end'
                        },
                        {
                            value: 'right',
                            label: 'right'
                        },
                        {
                            value: 'right-start',
                            label: 'right-start'
                        },
                        {
                            value: 'right-end',
                            label: 'right-end'
                        },
                       ]
                },
                {
                    attributeName: "range",
                    label: "选择范围",
                    type: "switch",
                    detail:"是否开启选择范围",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "vertical",
                    label: "垂直模式",
                    type: "switch",
                    detail:"垂直模式",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "height",
                    label: "滑块高度",
                    type: "input",
                    detail:"滑块高度，垂直模式必填",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "show-input",
                    label: "输入框",
                    type: "switch",
                    detail:"是否显示输入框，仅在非范围选择时有效",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "show-input-controls",
                    label: "输入框的控制按钮",
                    type: "switch",
                    detail:"在显示输入框的情况下，是否显示输入框的控制按钮",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "validate-event",
                    label: "校验事件",
                    type: "switch",
                    detail:"validate-event",
                    value: true,
                    defaultValue: true,
                }
            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail:"值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",
                    method: ''// 绑定方法名
                },
                {
                    event: "input", // 事件名称
                    enable: false,// 是否启用
                    detail:"数据改变时触发（使用鼠标拖曳时，活动过程实时触发）",
                    method: ''// 绑定方法名
                },
            ],
            styles: {},
        }
    },
    template: (param)=>{
        return `
        <el-slider
        ${generalTemplate(param)}
        >
        </el-slider>
        `
    }
}
