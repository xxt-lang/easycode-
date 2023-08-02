import {generalTemplate} from "../../../utils/ecTemplate";

export const ScSelect= {
    component: {
        component: "ScSelect",
        label: 'ScSelect',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {
            display: "inline-flex"
        }
    },
    setter: {
        component: "ScSelect",
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
                    attributeName: "filter-method-bindValue",
                    label: "自定义筛选方法",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "自定义筛选方法",
                },
                {
                    attributeName: "remote-method-bindValue",
                    label: "自定义远程搜索方法",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "自定义远程搜索方法",
                },
                {
                    attributeName: "option-bindValue",
                    label: "绑定下拉数据",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: 'value',
                    detail: "绑定下拉数据如[{value:'name',label:'name'}]",
                },
                {
                    attributeName: "multiple",
                    label: "多选",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否多选",
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
                    attributeName: "value-key",
                    label: "value-key",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "作为 value 唯一标识的键名，绑定值为对象类型时必填",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail: "输入框尺寸",
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
                    attributeName: "clearable",
                    label: "清空选项",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否可以清空选项",
                },
                {
                    attributeName: "collapse-tags",
                    label: "collapse-tags",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "多选时是否将选中值按文字的形式展示",
                },
                {
                    attributeName: "collapse-tags-tooltip",
                    label: "collapse-tags-tooltip",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true",
                },
                {
                    attributeName: "multiple-limit",
                    label: "multiple-limit",
                    type: "inputNumber",
                    value: 0,
                    defaultValue: 0,
                    detail: "multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制",
                    max: 9999,
                },
                {
                    attributeName: "effect",
                    label: "主题",
                    type: "select",
                    value: "light",
                    defaultValue: "light",
                    detail: "Tooltip 主题，内置了 dark / light 两种",
                    typeArray: [{
                        value: 'light',
                        label: 'light'
                    }, {
                        value: 'dark',
                        label: 'dark'
                    }]
                },
                {
                    attributeName: "placeholder",
                    label: "占位文字",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "占位文字",
                },
                {
                    attributeName: "filterable",
                    label: "筛选",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "Select 组件是否可筛选",
                },
                {
                    attributeName: "allow-create",
                    label: "allow-create",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。",
                },
                {
                    attributeName: "remote",
                    label: "remote",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "其中的选项是否从服务器远程加载",
                },
                {
                    attributeName: "remote-show-suffix",
                    label: "remote-show-suffix",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "远程搜索方法显示后缀图标",
                },
                {
                    attributeName: "loading",
                    label: "loading",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否正在从远程获取数据",
                },
                {
                    attributeName: "loading-text",
                    label: "loading-text",
                    type: "input",
                    value: "Loading",
                    defaultValue: "Loading",
                    detail: "从服务器加载内容时显示的文本",
                },
                {
                    attributeName: "no-match-text",
                    label: "no-match-text",
                    type: "input",
                    value: "No matching data",
                    defaultValue: "No matching data",
                    detail: "搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置",
                },
                {
                    attributeName: "no-data-text",
                    label: "no-data-text",
                    type: "input",
                    value: "No data",
                    defaultValue: "No data",
                    detail: "无选项时显示的文字，也可以使用 empty 插槽设置自定义内容",
                },
                {
                    attributeName: "popper-class",
                    label: "popper-class",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "选择器下拉菜单的自定义类名",
                },
                {
                    attributeName: "reserve-keyword",
                    label: "reserve-keyword",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词",
                },
                {
                    attributeName: "default-first-option",
                    label: "default-first-option",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用",
                },
                {
                    attributeName: "teleported",
                    label: "teleported",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "该下拉菜单是否使用teleport插入body元素",
                },
                {
                    attributeName: "persistent",
                    label: "persistent",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "当下拉选择器未被激活并且persistent设置为false，选择器会被删除。",
                },
                {
                    attributeName: "automatic-dropdown",
                    label: "automatic-dropdown",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单",
                },
                {
                    attributeName: "clear-icon",
                    label: "clear-icon",
                    type: "input",
                    value: "CircleClose",
                    defaultValue: "CircleClose",
                    detail: "自定义清除图标",
                },
                {
                    attributeName: "fit-input-width",
                    label: "fit-input-width",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "下拉框的宽度是否与输入框相同",
                },
                {
                    attributeName: "suffix-icon",
                    label: "后缀图标",
                    type: "input",
                    value: "ArrowDown",
                    defaultValue: "ArrowDown",
                    detail: "自定义后缀图标",
                },
                {
                    attributeName: "tag-type",
                    label: "标签类型",
                    type: "select",
                    value: "info",
                    defaultValue: "info",
                    detail: "标签类型",
                    typeArray: [
                        {
                            value: 'info',
                            label: 'info'
                        }, {
                            value: 'success',
                            label: 'success'
                        },
                        {
                            value: 'warning',
                            label: 'warning'
                        },
                        {
                            value: 'danger',
                            label: 'danger'
                        }]
                },
                {
                    attributeName: "validate-event",
                    label: "触发表单验证",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否触发表单验证",
                },
                {
                    attributeName: "placement",
                    label: "下拉框出现的位置",
                    type: "select",
                    value: "bottom-start",
                    defaultValue: "bottom-start",
                    detail: "下拉框出现的位置",
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
                            value: 'left',
                            label: 'left'
                        },
                        {
                            value: 'left-start',
                            label: 'left-start'
                        },
                        {
                            value: 'left-end',
                            label: 'left-end'
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
            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "选中值发生变化时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "visiblechange", // 事件名称
                    enable: false,// 是否启用
                    detail: "下拉框出现/隐藏时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "removetag", // 事件名称
                    enable: false,// 是否启用
                    detail: "多选模式下移除tag时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "clear", // 事件名称
                    enable: false,// 是否启用
                    detail: "可清空的单选模式下用户点击清空按钮时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "blur", // 事件名称
                    enable: false,// 是否启用
                    detail: "当 input 失去焦点时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "focus", // 事件名称
                    enable: false,// 是否启用
                    detail: "当 input 获得焦点时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-select
            ${generalTemplate(param)}
        >
         <el-option
          v-for="item in ${param.attributes['option-bindValue']}"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
        </el-select>
        `
    }
}
