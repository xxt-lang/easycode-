import {generalTemplate} from "../../../utils/ecTemplate";

export const ScAutocomplete = {
    component: {
        component: "ScAutocomplete",
        label: '自动补全输入',
        events: {},
        attributes: {},
        styles: {},
    },
    setter: {
        component: "ScAutocomplete",
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
                    attributeName: "autocompleteRef",//组件配置中属性字段名
                    label: "绑定autocompleteRef",
                    bind:'ref',
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "autocompleteRef",//属性值
                    defaultValue: "autocompleteRef",//默认属性值
                },
                // {
                //     attributeName: "fetchSuggestionsValue",
                //     label: "fetch-suggestions",
                //     detail:"获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它",
                //     bind: 'value',
                //     type: "input",
                //     value: "fetchSuggestionsValue",
                //     defaultValue: "fetchSuggestionsValue",
                // },
                {
                    attributeName: "placeholder",
                    label: "占位文本",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "占位文本",
                },
                {
                    attributeName: "clearable",
                    label: "清空",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否可清空",
                },
                {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "自动补全组件是否被禁用",
                },
                {
                    attributeName: "value-key",
                    label: "键名",
                    type: "input",
                    value: "value",
                    defaultValue: "value",
                    detail: "输入建议对象中用于显示的键名",
                },
                {
                    attributeName: "debounce",
                    label: "防抖",
                    type: "inputNumber",
                    value: 300,
                    defaultValue: 300,
                    detail: "获取输入建议的防抖延时，单位为毫秒",
                    max: 9999,
                },
                {
                    attributeName: "placement",
                    label: "菜单弹出位置",
                    type: "input",
                    value: "bottom-start",
                    defaultValue: "bottom-start",
                    detail: "菜单弹出位置",
                    typeArray: [
                        {'label': 'top', 'value': 'top'},
                        {'label': 'top-start','value': 'top-start'},
                        {'label': 'top-end', 'value': 'top-end'},
                        {'label': 'bottom','value': 'bottom'},
                        {'label': 'bottom-start', 'value': 'bottom-start'},
                        {'label': 'bottom-end','value': 'bottom-end'}]
                },
                {
                    attributeName: "trigger-on-focus",
                    label: "输入焦点时是否显示建议",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "输入焦点时是否显示建议",
                },
                {
                    attributeName: "select-when-unmatched",
                    label: "触发select事件",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件",
                },
                {
                    attributeName: "name",
                    label: "name",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "等价于原生 input name 属性",
                },
                {
                    attributeName: "label",
                    label: "label",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "输入框关联的 label 文字",
                },
                {
                    attributeName: "hide-loading",
                    label: "隐藏加载图标",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否隐藏远程加载时的加载图标",
                },
                {
                    attributeName: "popper-class",
                    label: "下拉列表的类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "下拉列表的类名",
                },
                {
                    attributeName: "teleported",
                    label: "插入append-to指向的元素",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否将下拉列表元素插入 append-to 指向的元素下",
                },
                {
                    attributeName: "highlight-first-item",
                    label: "高亮远程搜索结果第一项",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否默认高亮远程搜索结果的第一项",
                },
                {
                    attributeName: "fit-input-width",
                    label: "下拉框与输入框同宽",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "下拉框的宽度是否与输入框相同",
                },
            ],
            events: [
                {
                    event: "select", // 事件名称
                    enable: false,// 是否启用
                    detail: "下拉框的宽度是否与输入框相同",
                    method: ''// 绑定方法名
                }, {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "下拉框的宽度是否与输入框相同",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-autocomplete 
        ${generalTemplate(param)}
        >
        </el-autocomplete >
        `
    }
}
