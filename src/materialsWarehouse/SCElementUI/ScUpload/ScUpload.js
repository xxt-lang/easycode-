import {ecTemplateFor, generalTemplate, includeTemplate} from "../../../utils/ecTemplate";

export const ScUpload = {
    component: {
        component: "ScUpload",
        label: 'ScUpload',
        events: {},
        attributes: {},
        styles: {},
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
                label: "tip",
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
        component: "ScUpload",
        setter: {
            attributes: [
                {
                    attributeName: "modelValue",
                    label: "value 绑定值",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "默认上传文件 []",
                    bind: "value"
                },
                {
                    attributeName: "uploadRef",//组件配置中属性字段名
                    label: "绑定uploadRef",
                    bind: 'ref',
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "uploadRef",//属性值
                    defaultValue: "uploadRef",//默认属性值
                },
                {
                    attributeName: "headers-bindValue",
                    label: "headers",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "设置上传的请求头部 <br> Headers | Record<string, any>",
                    bind: "value"
                },
                {
                    attributeName: "data-bindValue",
                    label: "额外参数",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "上传时附带的额外参数 <br>Record<string, any>",
                    bind: "value"
                },
                {
                    attributeName: "on-preview-bindValue",
                    label: "on-preview",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "点击文件列表中已上传的文件时的钩子 <br> (uploadFile: UploadFile) => void",
                    bind: "value"
                },
                {
                    attributeName: "on-remove-bindValue",
                    label: "文件列表移除文件时的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "文件列表移除文件时的钩子 <br> (uploadFile: UploadFile, uploadFiles: UploadFiles) => void",
                    bind: "value"
                },
                {
                    attributeName: "on-success-bindValue",
                    label: "文件上传成功时的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "文件上传成功时的钩子 <br> (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void",
                    bind: "value"
                },
                {
                    attributeName: "on-error-bindValue",
                    label: "文件上传失败时的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "文件上传失败时的钩子 <br>(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void",
                    bind: "value"
                },
                {
                    attributeName: "on-progress-bindValue",
                    label: "文件上传时的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "文件上传时的钩子 <br>(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void",
                    bind: "value"
                },
                {
                    attributeName: "on-change-bindValue",
                    label: "文件状态改变时的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用" +
                        "<br> (uploadFile: UploadFile, uploadFiles: UploadFiles) => void",
                    bind: "value"
                },
                {
                    attributeName: "on-exceed-bindValue",
                    label: "当超出限制时执行的钩子函数",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "当超出限制时，执行的钩子函数 <br>(files: File[], uploadFiles: UploadUserFile[]) => void",
                    bind: "value"
                },
                {
                    attributeName: "before-upload-bindValue",
                    label: "上传文件之前的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。" +
                        "<br> (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>",
                    bind: "value"
                },
                {
                    attributeName: "before-remove-bindValue",
                    label: "删除文件之前的钩子",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。<br> " +
                        "(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>",
                    bind: "value"
                },
                {
                    attributeName: "action",
                    label: "action",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "请求 URL",
                },
                {
                    attributeName: "method",
                    label: "请求方法",
                    type: "input",
                    value: "post",
                    defaultValue: "post",
                    detail: "设置上传请求方法",
                },
                {
                    attributeName: "multiple",
                    label: "多选文件",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否支持多选文件",
                },
                {
                    attributeName: "name",
                    label: "上传的文件字段名",
                    type: "input",
                    value: "file",
                    defaultValue: "file",
                    detail: "上传的文件字段名",
                },
                {
                    attributeName: "with-credentials",
                    label: "cookie凭证信息",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "支持发送 cookie 凭证信息",
                },
                {
                    attributeName: "show-file-list",
                    label: "显示已上传文件列表",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否显示已上传文件列表",
                },
                {
                    attributeName: "drag",
                    label: "启用拖拽上传",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否启用拖拽上传",
                },
                {
                    attributeName: "accept",
                    label: "接受上传的文件类型",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
                },
                {
                    attributeName: "list-type",
                    label: "文件列表的类型",
                    type: "select",
                    value: "text",
                    defaultValue: "text",
                    detail: "文件列表的类型",
                    typeArray: [
                        {
                            value: 'text',
                            label: 'text'
                        },
                        {
                            value: 'picture',
                            label: 'picture'
                        },
                        {
                            value: 'picture-card',
                            label: 'picture-card'
                        }] //类型选择数组
                },
                {
                    attributeName: "auto-upload",
                    label: "自动上传文件",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否自动上传文件",
                },
                {
                    attributeName: "disabled",
                    label: "禁用",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "禁用上传",
                },
                {
                    attributeName: "limit",
                    label: "最大数量",
                    type: "inputNumber",
                    value: 5,
                    defaultValue: 5,
                    detail: "允许上传文件的最大数量",
                },
                {
                    attributeName: "tip-slot",
                    label: "tip slot",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "提示说明文字",
                },
            ],
            events: [],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-upload
            ${generalTemplate(param)}
        >
            ${ecTemplateFor(param.children[0].children, (item2) => {
            return includeTemplate(item2.component, item2)
        })}
             ${param.attributes['tip-slot'] ? `<template v-slot:tip>
                        ${ecTemplateFor(param.children[1].children, (item2) => {
            return includeTemplate(item2.component, item2)
        })}</template>` : ''}
        </el-upload>
        `
    }
}
