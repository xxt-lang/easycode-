import {generalTemplate} from "../../../utils/ecTemplate";

export const ScImage = {
    component: {
        component: "ScImage",
        label: 'ScImage',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {
            display: "inline-flex"
        }
    },
    setter: {
        component: "ScImage",
        setter: {
            attributes: [
                {
                    attributeName: "preview-src-list-bindValue",
                    label: "图片预览功能",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "开启图片预览功能",
                    bind: "value"
                },
                {
                    attributeName: "src",
                    label: "地址",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "图片源地址，同原生属性一致",
                },
                {
                    attributeName: "fit",
                    label: "图片适应",
                    type: "select",
                    value: "",
                    defaultValue: "",
                    detail: "确定图片如何适应容器框，同原生 object-fit",
                    typeArray: [{'label': '', 'value': ''}, {'label': 'fill', 'value': 'fill'}, {
                        'label': 'contain',
                        'value': 'contain'
                    }, {'label': 'cover', 'value': 'cover'}, {'label': 'none', 'value': 'none'}, {
                        'label': 'scale-down',
                        'value': 'scale-down'
                    },]
                },
                {
                    attributeName: "hide-on-click-modal",
                    label: "遮罩层关闭 preview",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview",
                },
                {
                    attributeName: "lazy",
                    label: "懒加载",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否使用懒加载",
                },
                {
                    attributeName: "scroll-container",
                    label: "scroll-container",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "开启懒加载功能后，监听 scroll 事件的容器 默认情况下，开启懒加载功能后，监听 scroll 事件的容器",
                },
                {
                    attributeName: "initial-index",
                    label: "初始预览图像索引",
                    type: "inputNumber",
                    value: 0,
                    defaultValue: 0,
                    detail: "初始预览图像索引，小于 url-list 的长度",
                    max: 9999,
                },
                {
                    attributeName: "close-on-press-escape",
                    label: "ESC 关闭Image Viewer",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否可以通过按下 ESC 关闭 Image Viewer",
                },
                {
                    attributeName: "preview-teleported",
                    label: "插入至body",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true",
                },
                {
                    attributeName: "infinite",
                    label: "无限循环预览",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否可以无限循环预览",
                },
                {
                    attributeName: "zoom-rate",
                    label: "缩放速率",
                    type: "inputNumber",
                    value: 1.2,
                    defaultValue: 1.2,
                    detail: "图像查看器缩放事件的缩放速率。",
                    precision: 2,
                    max: 9999,
                },

            ],
            events: [
                {
                    event: "load", // 事件名称
                    enable: false,// 是否启用
                    detail: "图片加载成功触发",
                    method: ''// 绑定方法名
                }, {
                    event: "error", // 事件名称
                    enable: false,// 是否启用
                    detail: "切换图像时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "switch", // 事件名称
                    enable: false,// 是否启用
                    detail: "切换图像时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "close", // 事件名称
                    enable: false,// 是否启用
                    detail: "当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发",
                    method: ''// 绑定方法名
                }, {
                    event: "show", // 事件名称
                    enable: false,// 是否启用
                    detail: "当 Viewer 显示时触发",
                    method: ''// 绑定方法名
                },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-image
            ${generalTemplate(param)}
        >
        </el-image>
        `
    }
}
