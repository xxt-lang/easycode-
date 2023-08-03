import {generalTemplate} from "../../../utils/ecTemplate";

export const ScRate = {
    component:  {
        component: "ScRate",
        label: '评分',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles:{
            display:"inline-flex"
        }
    },
    setter:  {
        component: "ScRate",
        setter: {
            attributes: [
                {
                    attributeName: "modelValue",//组件配置中属性字段名 必写
                    label: "value绑定",// 字段标签
                    bind: true,
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                },
                {
                    attributeName: "max",
                    label: "最大分数值",
                    detail:"最大分数值",
                    type: "inputNumber",
                    value: 5,
                    defaultValue: 5,
                    max:9999
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    detail:'尺寸',
                    value: "",
                    defaultValue: "",
                    typeArray: [
                        {value: 'large', label: 'large'},
                        {value: 'default', label: 'default'},
                        {value: 'small', label: 'small'},]
                },
                {
                    attributeName: "disabled",
                    label: "只读",
                    detail: '是否为只读',
                    type: "switch",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "allow-half",
                    label: "半选",
                    detail: '是否允许半选',
                    type: "switch",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "low-threshold",
                    label: "低分值",
                    type: "inputNumber",
                    detail:"低分和中等分数的界限值， 值本身被划分在低分中",
                    value: 2,
                    defaultValue: 2,
                    max: 9999,
                    min: 0
                },
                {
                    attributeName: "high-threshold",
                    label: "高分值",
                    type: "inputNumber",
                    detail:"高分和中等分数的界限值， 值本身被划分在高分中",
                    value: 4,
                    defaultValue: 4,
                    max: 9999,
                    min: 0
                },
                {
                    attributeName: "void-color",
                    label: "未选中颜色",
                    detail:"未选中icon颜色",
                    type: "color",
                    value: "#C6D1DE",
                    defaultValue: "#C6D1DE",
                },
                {
                    attributeName: "disabled-void-color",
                    label: "只读时未选颜色",
                    detail:"只读时未选中 icon 的颜色",
                    type: "color",
                    value: "#EFF2F7",
                    defaultValue: "#EFF2F7",
                },
                {
                    attributeName: "void-icon",
                    label: "未选中图标",
                    detail:"未被选中的图标组件",
                    type: "input",
                    value: 'Star',
                    defaultValue: 'Star',
                },
                {
                    attributeName: "disabled-void-icon",
                    label: "禁用未选中图标",
                    detail:"禁用状态的未选择图标",
                    type: "input",
                    value: 'StarFilled',
                    defaultValue: 'StarFilled',
                },
                {
                    attributeName: "show-text",
                    label: "显示辅助文字",
                    detail: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
                    type: "switch",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "show-score",
                    label: "显示当前分数",
                    detail: '是否显示当前分数， show-score 和 show-text 不能同时为真',
                    type: "switch",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "text-color",
                    label: "辅助文字颜色",
                    detail:"辅助文字颜色",
                    type: "color",
                    value: "#1F2D3D",
                    defaultValue: "#1F2D3D",
                },
                {
                    attributeName: "score-template",
                    label: "分数显示模板",
                    detail:"分数显示模板",
                    type: "input",
                    value: '{value}',
                    defaultValue: '{value}',
                },
                {
                    attributeName: "clearable",
                    label: "重置值为 0",
                    detail: '是否可以重置值为 0',
                    type: "switch",
                    value: false,
                    defaultValue: false,
                },
            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ],
            styles:[]
        }
    },
    template: (param)=>{
        return `
        <el-rate
        ${generalTemplate(param)}
        >
        </el-rate>
        `
    }
}
