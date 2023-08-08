import {generalTemplate} from "../../../utils/ecTemplate";

export const ScProgress = {
    component: {
        component: "ScProgress",
        label: 'ScProgress',
        events: {},
        attributes: {},
        styles: {
            "width":"250px",
            display: "inline-flex"
        },
        shapeStyles: {

        }
    },
    setter: {
        component: "ScProgress",
        setter: {
            attributes: [
                {
                    attributeName: "percentage-bindValue",
                    label: "百分比",
                    type: "input",
                    value: '',
                    defaultValue: '',
                    bind: "value",
                    resultType:"number",
                    detail: "百分比，必填",
                },
                {
                    attributeName: "format-bindValue",
                    label: "进度条文字内容",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: "value",
                    detail: "指定进度条文字内容 Function",
                },
                {
                    attributeName: "color-bindValue",
                    label: "进度条背景色",
                    type: "input",
                    bind: "value",
                    value: "",
                    defaultValue: "",
                    detail: "进度条背景色 进度条背景色 （会覆盖 status 状态颜色）",
                },
                {
                    attributeName: "type",
                    label: "进度条类型",
                    type: "select",
                    value: "line",
                    defaultValue: "line",
                    detail: "进度条类型",
                    typeArray: [{'label': 'line', 'value': 'line'}, {
                        'label': 'circle',
                        'value': 'circle'
                    }, {'label': 'dashboard', 'value': 'dashboard'},]
                },
                {
                    attributeName: "stroke-width",
                    label: "宽度",
                    type: "inputNumber",
                    value: 6,
                    defaultValue: 6,
                    detail: "进度条的宽度",
                    max: 9999,
                },
                {
                    attributeName: "text-inside",
                    label: "text-inside",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）",
                },
                {
                    attributeName: "status",
                    label: "进度条当前状态",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "进度条当前状态",
                    typeArray: [{'label': '', 'value': ''},{'label': 'success', 'value': 'success'}, {
                        'label': 'exception',
                        'value': 'exception'
                    }, {'label': 'warning', 'value': 'warning'},]
                },
                {
                    attributeName: "indeterminate",
                    label: "动画进度条",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否为动画进度条",
                },
                {
                    attributeName: "duration",
                    label: "进度条流动速度",
                    type: "inputNumber",
                    value: 3,
                    defaultValue: 3,
                    detail: "控制动画进度条速度和条纹进度条流动速度",
                    max: 9999,
                },
                {
                    attributeName: "width",
                    label: "环形进度条画布宽度",
                    type: "inputNumber",
                    value: 126,
                    defaultValue: 126,
                    detail: "环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）",
                    max: 9999,
                },
                {
                    attributeName: "show-text",
                    label: "显示进度条文字内容",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否显示进度条文字内容",
                },
                {
                    attributeName: "stroke-linecap",
                    label: "stroke-linecap",
                    type: "select",
                    value: "round",
                    defaultValue: "round",
                    detail: "circle/dashboard 类型路径两端的形状",
                    typeArray: [{'label': 'butt', 'value': 'butt'}, {
                        'label': 'round',
                        'value': 'round'
                    }, {'label': 'square', 'value': 'square'},]
                },
                {
                    attributeName: "striped",
                    label: "条纹",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "在进度条上增加条纹",
                },
                {
                    attributeName: "striped-flow",
                    label: "条纹流动",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "让进度条上的条纹流动起来",
                },
            ],
            events: [],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-progress
            ${generalTemplate(param)}
        >
        </el-progress>
        `
    }
}
