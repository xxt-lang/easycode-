import {ecTemplateFor, generalTemplate, generateAttribute, includeTemplate} from "../../../utils/ecTemplate";

export const ScCollapse = {
    component: {
        component: "ScCollapse",
        label: 'ScCollapse',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {},
        type: "container",
        children: [
            {
                component: "container",
                attribute: 'collapse-item',
                label: "collapse-item",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            }
        ],
    },
    setter: {
        component: "ScCollapse",
        setter: {
            attributes: [
                {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "modelValue",
                    defaultValue: "modelValue",
                    detail: "当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)<br>" +
                        "string (accordion mode) / array (non-accordion mode)",
                    bind: 'value',
                },
                {
                    attributeName: "accordion",
                    label: "手风琴模式",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否手风琴模式",
                },
                {
                    attributeName: "collapse-item",
                    label: "collapse-item",
                    type: "table",
                    defaultValue: [],
                    isChildren: true,
                    column: [
                        {
                            attributeName: "name",
                            label: '唯一标识符',
                            detail: "唯一标识符",
                            type: "input",
                            value: '',
                            defaultValue: '',
                        },
                        {
                            attributeName: "title",
                            label: '标题',
                            detail: "面板标题",
                            type: "input",
                            value: '',
                            defaultValue: '',
                        },
                        {
                            attributeName: "disabled",
                            label: '禁用',
                            detail: "是否禁用",
                            type: "switch",
                            value: false,
                            defaultValue: false,
                        }
                    ],
                },
            ],
            events: [
                {
                    event: "change", // 事件名称
                    enable: false,// 是否启用
                    detail: "当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)<br>" +
                        "(activeNames: array (non-accordion mode) / string (accordion mode))",
                    method: ''// 绑定方法名
                },
            ],
            configuration: {
                childrenTemplate: {
                    component: "container",
                    attribute: 'collapse-item',
                    label: "collapse-item",
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
    template: (param) => {
        return `
        <el-collapse
            ${generalTemplate(param)}
        >
         ${ecTemplateFor(param.children, (citem, k) => {
            return `<el-collapse-item ${generateAttribute(citem.attributes, param.defaultAttributes['collapse-item'])}>
                ${ecTemplateFor(citem.children, (item2) => {
                return includeTemplate(item2.component, item2)
            })}
            </el-collapse-item>`
        })}
        </el-collapse>
        `
    }
}
