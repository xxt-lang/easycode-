import {ecTemplateFor, includeTemplate, generalTemplate, generateAttribute} from "../../../utils/ecTemplate";

export const ScLayout = {
    component:{
        component: "ScLayout",
        label: '行',
        event: {},
        attributes: {},
        styles: {},
        children: [
            {
                component: "container",
                attribute: 'col',
                label: "列",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'col',
                label: "列",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
        ],
        type: "container"
    },
    setter:{
            component: "ScLayout",
            setter: {
                attributes: [
                    {
                        attributeName: "justify",
                        label: "flex水平排列",
                        type: "select",
                        value: "start",
                        defaultValue: "start",
                        detail:"flex 布局下的水平排列方式",
                        typeArray: [
                            {
                                value: 'start',
                                label: 'start'
                            },
                            {
                                value: 'end',
                                label: 'end'
                            },
                            {
                                value: 'center',
                                label: 'center'
                            },
                            {
                                value: 'space-around',
                                label: 'space-around'
                            },
                            {
                                value: 'space-between',
                                label: 'space-between'
                            },
                            {
                                value: 'space-evenly',
                                label: 'space-evenly'
                            },]
                    },
                    {
                        attributeName: "align",
                        label: "flex垂直排列",
                        type: "select",
                        value: "start",
                        defaultValue: "start",
                        detail:"flex 布局下的垂直排列方式",
                        typeArray: [
                            {
                                value: 'top',
                                label: 'top'
                            },
                            {
                                value: 'middle',
                                label: 'middle'
                            },
                            {
                                value: 'bottom',
                                label: 'bottom'
                            },]
                    },
                    {
                        attributeName: "gutter",
                        label: "栅格间隔",
                        type: "inputNumber",
                        detail:'栅格间隔',
                        max:9999,
                        value: 0,
                        defaultValue: 0,
                    },
                    {
                        attributeName: "col",
                        label: "配置列",
                        type: "table",
                        defaultValue: [],
                        isChildren: true,
                        column: [
                            {
                                attributeName: "span",
                                label: "栅格列数",
                                type: "inputNumber",
                                value: 24,
                                defaultValue: 24,
                                max: 24,
                            },
                            {
                                attributeName: "offset",
                                label: "栅格左侧间隔",
                                type: "inputNumber",
                                value: 0,
                                defaultValue: 0,
                                max: 24,

                            },
                            {
                                attributeName: "push",
                                label: "右移格数",
                                type: "inputNumber",
                                detail:'栅格向右移动格数',
                                value: 0,
                                defaultValue: 0,
                                max: 24,
                            },
                            {
                                attributeName: "pull",
                                label: "左移格数",
                                type: "inputNumber",
                                detail:'栅格向左移动格数',
                                value: 0,
                                defaultValue: 0,
                                max: 24,

                            },
                            {
                                attributeName: "xs",
                                label:'xs',
                                detail: "<768px 响应式栅格数或者栅格属性对象",
                                type: "inputNumber",
                                value: null,
                                defaultValue: null,
                                max: 24,
                            },
                            {
                                attributeName: "sm",
                                label:'sm',
                                detail: "≥768px 响应式栅格数或者栅格属性对象",
                                type: "inputNumber",
                                value: null,
                                defaultValue: null,
                                max: 24,
                            },
                            {
                                attributeName: "md",
                                label:'md',
                                detail: "≥992px 响应式栅格数或者栅格属性对象",
                                type: "inputNumber",
                                value: null,
                                defaultValue: null,
                                max: 24,
                            },

                            {
                                attributeName: "lg",
                                label:'lg',
                                detail: "≥1200px 响应式栅格数或者栅格属性对象",
                                type: "inputNumber",
                                value: null,
                                defaultValue: null,
                                max: 24,
                            },
                            {
                                attributeName: "xl",
                                label:'xl',
                                detail: "≥1920px 响应式栅格数或者栅格属性对象",
                                type: "inputNumber",
                                value: null,
                                defaultValue: null,
                                max: 24,
                            },

                        ],
                    },
                ],
                styles: {},
                events: [],
                configuration: {
                    childrenTemplate: {
                        component: "container",
                        attribute: 'col',
                        label: "列",
                        id: "",
                        event: {},
                        attributes: {},
                        styles: {},
                        children: [],
                        featherId: "",
                        type: "container"
                    },
                }

            },
        },
    template:(param)=>{
        return `
        <el-row
        ${generalTemplate(param)}
         >
        ${ecTemplateFor(param.children, (citem,k) => {
            return `<el-col ${generateAttribute(param.attributes['col'][k],param.defaultAttributes['col'][k],['span'])}
                    :span="${param.attributes['col'][k]["span"]}">
                ${ecTemplateFor(param.children[k].children,(item2)=>{
                return includeTemplate(item2.component,item2)})}
            </el-col>`
        })}
         </el-row>
        `
    }
}
