import {ecTemplateFor, generalTemplate, generateAttribute, includeTemplate} from "../../../utils/ecTemplate";

export const ScTimeline = {
    component: {
        component: "ScTimeline",
        label: 'ScTimeline',
        events: {},
        attributes: {},
        styles: {},
        children: [
            {
                component: "container",
                attribute: 'timeline-item',
                label: "时间线每项",
                id: "",
                event: {},
                attributes: {
                    timestamp:"2018/4/12"
                },
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            }
        ],
        type:"container"
    },
    setter: {
        component: "ScTimeline",
        setter: {
            attributes: [
                {
                    attributeName: "timeline-item",
                    label: "配置时间线每项",
                    type: "table",
                    defaultValue: [],
                    isChildren: true,
                    column: [
                        {
                            attributeName: "timestamp",
                            label: "隐藏时间戳",
                            type: "input",
                            value: "",
                            defaultValue: "",
                            detail: "隐藏时间戳",
                        },
                        {
                            attributeName: "hide-timestamp",
                            label: "隐藏时间戳",
                            type: "switch",
                            value: false,
                            defaultValue: false,
                            detail: "是否隐藏时间戳",
                        },
                        {
                            attributeName: "center",
                            label: "垂直居中",
                            type: "switch",
                            value: false,
                            defaultValue: false,
                            detail: "是否垂直居中",
                        },
                        {
                            attributeName: "placement",
                            label: "时间戳位置",
                            type: "select",
                            value: "bottom",
                            defaultValue: "bottom",
                            detail: "时间戳位置",
                            typeArray: [{'label': 'top', 'value': 'top'}, {'label': 'bottom', 'value': 'bottom'},]
                        },
                        {
                            attributeName: "type",
                            label: "节点类型",
                            type: "input",
                            value: "",
                            defaultValue: "",
                            detail: "节点类型",
                            typeArray: [{'label': 'primary', 'value': 'primary'}, {
                                'label': 'success',
                                'value': 'success'
                            }, {'label': 'warning', 'value': 'warning'}, {
                                'label': 'danger',
                                'value': 'danger'
                            }, {'label': 'info', 'value': 'info'},]
                        },
                        {
                            attributeName: "color",
                            label: "节点颜色",
                            type: "select",
                            value: "",
                            defaultValue: "",
                            detail: "节点颜色",
                            typeArray: [{'label': 'hsl', 'value': 'hsl'}, {'label': 'hsv', 'value': 'hsv'}, {
                                'label': 'hex',
                                'value': 'hex'
                            }, {'label': 'rgb', 'value': 'rgb'},]
                        },
                        {
                            attributeName: "size",
                            label: "尺寸",
                            type: "select",
                            value: "normal",
                            defaultValue: "normal",
                            detail: "节点尺寸",
                            typeArray: [{'label': 'normal', 'value': 'normal'}, {'label': 'large', 'value': 'large'},]
                        },
                        {
                            attributeName: "icon",
                            label: "自定义图标",
                            type: "input",
                            value: "",
                            defaultValue: "",
                            detail: "自定义图标",
                        },
                        {
                            attributeName: "hollow",
                            label: "空心点",
                            type: "switch",
                            value: false,
                            defaultValue: false,
                            detail: "是否空心点",
                        },
                    ],
                },

            ],
            events: [],
            styles: {},
            configuration: {
                childrenTemplate: {
                    component: "container",
                    attribute: 'timeline-item',
                    label: "时间线每项",
                    id: "",
                    event: {},
                    attributes: {},
                    styles: {},
                    children: [],
                    featherId: "",
                    type: "container"
                },
            },
        }
    },

    template: (param) => {
        return `
        <el-timeline
            ${generalTemplate(param)}
        >
        ${ecTemplateFor(param.children, (citem,k) => {
            return `<el-timeline-item ${generateAttribute(citem.attributes,param.defaultAttributes['timeline-item'])}>
                ${ecTemplateFor(citem.children,(item2)=>{
                return includeTemplate(item2.component,item2)})}
            </el-timeline-item>`
        })}
        </el-timeline>
        `
    }
}
