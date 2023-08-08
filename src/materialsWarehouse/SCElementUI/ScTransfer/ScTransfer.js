import {generalTemplate} from "../../../utils/ecTemplate";

export const ScTransfer = {
    component: {
        component: "ScTransfer",
        label: 'ScTransfer',
        events: {},
        attributes: {},
        styles: {display: "inline-flex"},
        shapeStyles: {

        }
    },
    setter: {
        component: "ScTransfer",
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
                    attributeName: "data-bindValue",
                    label: "数据源",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "Transfer 的数据源Array<{ key, label, disabled }>",
                    bind: 'value',
                },
                {
                    attributeName: "filter-method-bindValue",
                    label: "自定义搜索方法",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义搜索方法",
                    bind: 'value',
                },
                {
                    attributeName: "titles-bindValue",
                    label: "列表标题",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义列表标题 array ['List 1', 'List 2']",
                    bind: 'value',
                },
                {
                    attributeName: "button-texts-bindValue",
                    label: "自定义按钮文案",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义按钮文案 array",
                    bind: 'value',
                },

                {
                    attributeName: "left-default-checked-bindValue",
                    label: "左侧列表的已勾选项",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind:"value",
                    detail: "初始状态下左侧列表的已勾选项的 key 数组 array",
                },
                {
                    attributeName: "right-default-checked-bindValue",
                    label: "右侧列表的已勾选项",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind:"value",
                    detail: "初始状态下右侧列表的已勾选项的 key 数组 array",
                },
                {
                    attributeName: "render-content-bindValue",
                    label: "自定义数据项渲染函数",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义数据项渲染函数 function(h, option)",
                    bind:"value",
                },
                {
                    attributeName: "format-bindValue",
                    label: "列表顶部勾选状态文案",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "列表顶部勾选状态文案 { noChecked, hasChecked } <br>{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }",
                    bind:"value"
                },
                {
                    attributeName: "props-bindValue",
                    label: "props",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "数据源的字段别名 { key, label, disabled }",
                    bind:"value"
                },
                {
                    attributeName: "filterable",
                    label: "搜索",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否可搜索",
                },
                {
                    attributeName: "filter-placeholder",
                    label: "搜索框占位符",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "搜索框占位符",
                },
                {
                    attributeName: "target-order",
                    label: "排序策略",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序；<br> 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前",
                    typeArray: [
                        {'label': 'original', 'value': 'original'},
                        {'label': 'push', 'value': 'push'},
                        {'label': 'unshift','value': 'unshift'}]
                },
                {
                    attributeName: "validate-event",
                    label: "触发表单验证",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否触发表单验证",
                },

            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "右侧列表元素变化时触发 <br> 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组",
                    method: ''// 绑定方法名
                }, {
                    event: "left-check-change", // 事件名称
                    enable: false,// 是否启用
                    detail: "左侧列表元素被用户选中 / 取消选中时触发 <br> 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组",
                    method: ''// 绑定方法名
                }, {
                    event: "right-check-change", // 事件名称
                    enable: false,// 是否启用
                    detail: "右侧列表元素被用户选中 / 取消选中时触发 <br> 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-transfer
            ${generalTemplate(param)}
        >
        </el-transfer>
        `
    }
}
