import {ecTemplateFor, generalTemplate, generateAttribute, includeTemplate} from "../../../utils/ecTemplate";

export const ScForm = {
    component: {
        component: "ScForm",
        label: 'ScForm',
        type: "container",
        events: {},
        children: [
            {
                component: "container",
                attribute: 'form-item',
                label: "form-item",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            }],
        attributes: {},
        styles: {},
    },
    setter: {
        component: "ScForm",
        setter: {
            attributes: [
                {
                    attributeName: "modelValue",
                    label: "表单值绑定",
                    type: "input",
                    bind: 'value',
                    value: "",
                    defaultValue: "",
                    detail: "表单数据对象",
                },
                {
                    attributeName: "formRef",//组件配置中属性字段名
                    label: "绑定formRef",
                    bind:'ref',
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                },
                {
                    attributeName: "rules-bindValue",
                    label: "表单验证规则",
                    type: "input",
                    bind: 'value',
                    value: "",
                    defaultValue: "",
                    detail: "表单验证规则",
                },

                {
                    attributeName: "inline",
                    label: "inline",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "行内表单模式",
                },
                {
                    attributeName: "label-position",
                    label: "表单域标签的位置",
                    type: "select",
                    value: "right",
                    defaultValue: "right",
                    detail: "表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性",
                    typeArray: [{'label': 'left', 'value': 'left'}, {
                        'label': 'right',
                        'value': 'right'
                    }, {'label': 'top', 'value': 'top'},]
                },
                {
                    attributeName: "label-width",
                    label: "标签的长度",
                    type: "inputNumber",
                    value: "",
                    defaultValue: "",
                    detail: "标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。",
                    max: 9999,

                },
                {
                    attributeName: "label-suffix",
                    label: "表单域标签的后缀",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "表单域标签的后缀",
                },

                {
                    attributeName: "hide-required-asterisk",
                    label: "红色星号",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否隐藏必填字段标签旁边的红色星号。",


                },
                {
                    attributeName: "require-asterisk-position",
                    label: "星号的位置",
                    type: "select",
                    value: "left",
                    defaultValue: "left",
                    detail: "星号的位置。",
                    typeArray: [{'label': 'left', 'value': 'left'}, {'label': 'right', 'value': 'right'},]
                },

                {
                    attributeName: "show-message",
                    label: "校验错误信息",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否显示校验错误信息",
                },
                {
                    attributeName: "inline-message",
                    label: "行内形式展示校验信息",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否以行内形式展示校验信息",
                },
                {
                    attributeName: "status-icon",
                    label: "校验结果反馈图标",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否在输入框中显示校验结果反馈图标",
                },

                {
                    attributeName: "validate-on-rule-change",
                    label: "rules改变后立即触发",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否在 rules 属性改变后立即触发一次验证",
                },
                {
                    attributeName: "size",
                    label: "尺寸",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "用于控制该表单内组件的尺寸",
                    typeArray: [{'label': '', 'value': ''}, {'label': 'large', 'value': 'large'}, {
                        'label': 'default',
                        'value': 'default'
                    }, {'label': 'small', 'value': 'small'},]
                },

                {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性",
                },

                {
                    attributeName: "scroll-to-error",
                    label: "滚动到第一个错误表单项",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "当校验失败时，滚动到第一个错误表单项",
                },
                {
                    attributeName: "scroll-into-view-options",
                    label: "滚动位置",
                    type: "switch",
                    value: "",
                    defaultValue: "",
                    detail: "当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置",
                },
                {
                    attributeName: "form-item",
                    label: "配置form-item",
                    type: "table",
                    defaultValue: [],
                    isChildren: true,
                    column: [
                        {
                            attributeName: "prop",
                            label: "prop",
                            type: "input",
                            detail:"model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])。 在定义了 validate、resetFields 的方法时，该属性是必填的",
                            value: '',
                            defaultValue: '',
                        },
                        {
                            attributeName: "label",
                            label: "标签文本",
                            type: "input",
                            value: '',
                            defaultValue: '',
                        },
                        {
                            attributeName: "label-width",
                            label: "标签宽度",
                            type: "inputNumber",
                            detail:'标签宽度，例如 \'50px\'。 可以使用 auto。',
                            value: '',
                            defaultValue: '',
                        },
                        {
                            attributeName: "required",
                            label: "必填",
                            type: "switch",
                            detail:'是否为必填项，如不设置，则会根据校验规则确认',
                            value: false,
                            defaultValue: false,
                        },
                        // {
                        //     attributeName: "error",
                        //     label:'错误提示',
                        //     detail: "表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。",
                        //     type: "input",
                        //     value: '',
                        //     defaultValue: '',
                        // },
                        // {
                        //     attributeName: "show-message",
                        //     label:'显示校验错误信息',
                        //     detail: "是否显示校验错误信息",
                        //     type: "switch",
                        //     value: true,
                        //     defaultValue: true,
                        // },
                        {
                            attributeName: "inline-message",
                            label:'行内显示校验信息',
                            detail: "是否在行内显示校验信息",
                            type: "switch",
                            value: false,
                            defaultValue: false,
                        },
                        {
                            attributeName: "size",
                            label: "尺寸",
                            type: "select",
                            value: "",
                            defaultValue: "",
                            detail: "用于控制该表单内组件的尺寸",
                            typeArray: [{'label': '', 'value': ''}, {'label': 'large', 'value': 'large'}, {
                                'label': 'default',
                                'value': 'default'
                            }, {'label': 'small', 'value': 'small'},]
                        },
                        // {
                        //     attributeName: "validate-status",
                        //     label: "校验的状态",
                        //     type: "select",
                        //     value: "",
                        //     defaultValue: "",
                        //     detail: "formItem校验的状态",
                        //     typeArray: [{'label': '', 'value': ''}, {'label': 'error', 'value': 'error'}, {
                        //         'label': 'validating',
                        //         'value': 'validating'
                        //     }, {'label': 'success', 'value': 'success'},]
                        // },

                    ],
                },
            ],
            events: [
                {
                    event: "validate", // 事件名称
                    enable: false,// 是否启用
                    detail: "任一表单项被校验后触发",
                    method: ''// 绑定方法名
                },
            ],
            configuration: {
                childrenTemplate: {
                    component: "container",
                    attribute: 'form-item',
                    label: "form-item",
                    id: "",
                    event: {},
                    attributes: {},
                    styles: {},
                    children: [],
                    featherId: "",
                    type: "container"
                },
            },
            styles: {}
        }
    },
    template:(param)=>{
        return `
        <el-form
        ${generalTemplate(param)}
         >
        ${ecTemplateFor(param.children, (citem,k) => {
            return `<el-form-item ${generateAttribute(param.attributes['form-item'][k])}>
                ${ecTemplateFor(param.children[k].children,(item2)=>{
                return includeTemplate(item2.component,item2)})}
            </el-form-item>`
        })}
         </el-form>
        `
    }
}
