import {ecTemplateFor, generalTemplate, includeTemplate} from "../../../utils/ecTemplate";

export const ScCard = {
    component: {
        component: "ScCard",
        label: '卡片',
        events: {},
        attributes: {},
        styles: {"min-height": "100px"},
        type: "container",
        children: [
            {
                component: "container",
                attribute: 'slot',
                label: "default",
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
                attribute: 'slot',
                label: "header",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
        ],
    },
    setter: {
        component: "ScCard",
        setter: {
            attributes: [
                {
                    attributeName: "header",//组件配置中属性字段名 必写
                    label: "类型",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    detail: '类型'
                },
                {
                    attributeName: "shadow",//组件配置中属性字段名 必写
                    label: "边框阴影",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "always",//属性值 必写
                    defaultValue: "always",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'always', label: 'always'},
                        {value: 'never', label: 'never'},
                        {value: 'hover', label: 'hover'},], //类型选择数组  非必写
                    detail: "边框阴影"
                },
                {
                    attributeName: "header-slot",
                    label: "header slot",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "头部插槽",
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-card 
        ${generalTemplate(param)}
        >
         ${param.attributes['header-slot'] ? `<template v-slot:header>
                        ${ecTemplateFor(param.children[1].children, (item2) => {
            return includeTemplate(item2.component, item2)
        })}</template>` : ''}
          ${ecTemplateFor(param.children[0].children, (item2) => {
            return includeTemplate(item2.component, item2)
        })}
        </el-card >
        `
    }
}
