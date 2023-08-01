import {generalTemplate} from "../../../utils/ecTemplate";

export const ScAvatar= {
    component:    {
        component: "ScAvatar",
        label: '头像',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {
            display: 'inline-flex'
        },
    },
    setter:    {
        component: "ScAvatar",
        setter: {
            attributes: [
                {
                    attributeName: "icon",
                    label: "图标",
                    type: "input",
                    detail:"设置 Avatar 的图标类型",
                    value: '',
                    defaultValue: '',
                },
                {
                    attributeName: "size",
                    label: "大小",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail:"Avatar 大小",
                    typeArray: [
                        {value: 'small', label: 'small'},
                        {value: 'large', label: 'large'},
                        {value: 'default', label: 'default'},]
                },
                {
                    attributeName: "shape",
                    label: "形状",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail:"Avatar 形状",
                    typeArray: [
                        {value: 'circle', label: 'circle'},
                        {value: 'square', label: 'square'}]
                },
                {
                    attributeName: "src",
                    label: "图片源地址",
                    type: "input",
                    value: '',
                    defaultValue: '',
                    detail:"Avatar 图片的源地址"
                },
                {
                    attributeName: "fit",
                    label: "如何适应容器",
                    type: "select",
                    value: "default",
                    defaultValue: "default",
                    detail:"当展示类型为图片的时候，设置图片如何适应容器",
                    typeArray: [
                        {value: 'fill', label: 'fill'},
                        {value: 'contain', label: 'contain'},
                        {value: 'cover', label: 'cover'},
                        {value: 'none', label: 'none'},
                        {value: 'scale-down', label: 'scale-down'}]
                },
            ],
            styles: {},
            events: [
                {
                    event: "error", // 事件名称
                    detail:'图片加载失败时触发',
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ],
        }
    },
    template: (param)=>{
        return `
        <el-avatar 
        ${generalTemplate(param)}
        >
        </el-avatar >
        `
    }
}
