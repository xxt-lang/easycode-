import {ecTemplateFor, generalTemplate, generateAttribute, includeTemplate} from "../../../utils/ecTemplate";

export const ScSpace = {
    component:{
        component: "ScSpace",
        label: 'Space间距', // 左侧组件列表中显示的名字
        type: "container",
        children: [
            {
                component: "container",
                attribute: 'space',
                label: "space",
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
                attribute: 'space',
                label: "space",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
        ],
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
        shapeStyles:{
            display:"inline-flex"
        }
    },
    setter:{
        component: "ScSpace",
        setter: {
            attributes: [
                {
                    attributeName: "alignment",//组件配置中属性字段名 必写
                    label: "对齐的方式",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "center",//属性值 必写
                    defaultValue: "center",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'center', label: 'center'},
                        {value: 'normal', label: 'normal'},
                        {value: 'stretch', label: 'stretch'},
                        {value: 'flex-end', label: 'flex-end'},
                        {value: 'flex-start', label: 'flex-start'},
                    ]
                },
                {
                    attributeName: "direction",//组件配置中属性字段名 必写
                    label: "排列的方向",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "horizontal",//属性值 必写
                    defaultValue: "horizontal",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'vertical', label: 'vertical'},
                        {value: 'horizontal', label: 'horizontal'},
                    ]
                },
                {
                    attributeName: "spacer",//组件配置中属性字段名 必写
                    label: "间隔符",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: '',//属性值 必写
                    defaultValue: '',//默认属性值 必写
                },
                {
                    attributeName: "size",//组件配置中属性字段名 必写
                    label: "大小number",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 0,//属性值 必写
                    defaultValue: 0,//默认属性值 必写
                },
                {
                    attributeName: "size",//组件配置中属性字段名 必写
                    label: "大小select",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "small",//属性值 必写
                    defaultValue: "small",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'small', label: 'small'},
                        {value: 'default', label: 'default'},
                        {value: 'large', label: 'large'},
                    ]
                },
                {
                    attributeName: "fillRatio",//组件配置中属性字段名 必写
                    label: "填充父容器的比例",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 100,//属性值 必写
                    defaultValue: 100,//默认属性值 必写
                },
                {
                    attributeName: "fill",//组件配置中属性字段名
                    label: "是否填充父容器",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "wrap",//组件配置中属性字段名
                    label: "wrap",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },

                {
                    attributeName: "spaceContent",//组件配置中属性字段名
                    label: "spaceContent",
                    type: "table",//编辑自段的类型input select number switch buttonList
                    defaultValue: [],
                    isChildren: true,// 是否与children绑定
                    column: [],
                },
            ],
            styles: {},
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
        }
    },
    template:(param)=>{
        return `
        <el-space
        ${generalTemplate(param)}
         >
        ${ecTemplateFor(param.children, (citem,k) => {
            return `<div>
                ${ecTemplateFor(param.children[k].children,(item2)=>{
                return includeTemplate(item2.component,item2)})}
            </div>`
        })}
         </el-space>
        `
    }
}
