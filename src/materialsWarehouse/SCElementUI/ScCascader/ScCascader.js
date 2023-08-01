import { generalTemplate} from "../../../utils/ecTemplate";

export const ScCascader = {
    component: {
        component: "ScCascader",
        label: 'ScCascader',
        events: {},
        attributes: {},
        styles: {},
    },
    setter: {
        component: "ScCascader",
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
                    attributeName: "cascaderOptions-value",
                    label: "options绑定",
                    type: "input",
                    bind: 'value',
                    value: "",
                    defaultValue: "",
                    detail: "选项的数据源， value 和 label 可以通过 CascaderProps 自定义.",
                },
                // {
                //     attributeName: "props",
                //     label: "props",
                //     type: "input",
                //     value: "",
                //     defaultValue: "",
                //     detail: "配置选项, 请参阅下面 CascaderProps 表",
                // },
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
                    detail: "输入框占位文本",
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
                    attributeName: "clearable",
                    label: "清空",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否支持清空选项",
                },
                {
                    attributeName: "show-all-levels",
                    label: "值的完整路径",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "输入框中是否显示选中值的完整路径",
                },
                {
                    attributeName: "collapse-tags",
                    label: "多选模式下是否折叠Tag",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "多选模式下是否折叠Tag",
                },
                {
                    attributeName: "collapse-tags-tooltip",
                    label: "鼠标悬停显示选中标签",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
                },
                {
                    attributeName: "separator",
                    label: "分隔符",
                    type: "input",
                    value: " / ",
                    defaultValue: " / ",
                    detail: "用于分隔选项的字符",
                },
                {
                    attributeName: "filterable",
                    label: "该选项是否可以被搜索",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "该选项是否可以被搜索",
                },
                // {
                //     attributeName: "filter-method",
                //     label: "搜索选项",
                //     type: "switch",
                //     value: "",
                //     defaultValue: "",
                //     detail: "自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项",
                // },
                {
                    attributeName: "debounce",
                    label: "防抖延迟",
                    type: "inputNumber",
                    value: 300,
                    defaultValue: 300,
                    detail: "搜索关键词正在输入时的去抖延迟，单位为毫秒",
                    max: 9999,
                },
                // {
                //     attributeName: "before-filter",
                //     label: "before-filter",
                //     type: "switch",
                //     value: "",
                //     defaultValue: "",
                //     detail: "过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行",
                // },
                {
                    attributeName: "popper-class",
                    label: "弹出内容类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "弹出内容的自定义类名",
                },
                {
                    attributeName: "teleported",
                    label: "弹层使用teleport",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "弹层是否使用teleport",
                },
                {
                    attributeName: "tag-type",
                    label: "标签类型",
                    type: "select",
                    value: "info",
                    defaultValue: "info",
                    detail: "标签类型",
                    typeArray: [
                        {'label': 'success', 'value': 'success'},
                        {'label': 'info','value': 'info'},
                        {'label': 'warning', 'value': 'warning'},
                        {'label': 'danger', 'value': 'danger'},]
                },

                {
                    attributeName: "validate-event",
                    label: "表单的校验",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "输入时是否触发表单的校验",
                },

            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "当绑定值变化时触发的事件",
                    method: ''// 绑定方法名
                }, {
                    event: "expandChange", // 事件名称
                    enable: false,// 是否启用
                    detail: "当展开节点发生变化时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "blur", // 事件名称
                    enable: false,// 是否启用
                    detail: "当失去焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail: "当获得焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "visibleChange", // 事件名称
                    enable: false,// 是否启用
                    detail: "下拉框出现/隐藏时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "removeTag", // 事件名称
                    enable: false,// 是否启用
                    detail: "在多选模式下，移除Tag时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-cascader
        ${generalTemplate(param)}
        >
        </el-cascader>
        `
    }
}
