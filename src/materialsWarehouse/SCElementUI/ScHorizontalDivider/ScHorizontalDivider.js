import {generalTemplate} from "../../../utils/ecTemplate";
export const ScHorizontalDivider = {
    component:{
        component: "ScHorizontalDivider",
        label: '分割线',
        events: {},
        attributes: {},
        styles: {
        },
        shapeStyles:{
        }
    },
    setter:{
        component: "ScDivider",
        setter: {
            attributes: [
                    {
                    attributeName: "border-style",
                    label: "分隔符样式",
                    type: "select",
                    value: "solid",
                    defaultValue: "solid",
                    detail:"设置分隔符样式",
                    typeArray: [{'label': 'none', 'value': 'none'},{'label': 'solid', 'value': 'solid'},{'label': 'hidden', 'value': 'hidden'},{'label': 'dashed', 'value': 'dashed'}]
                    },
                    {
                    attributeName: "content-position",
                    label: "隔线内容的位置",
                    type: "select",
                    value: "center",
                    defaultValue: "center",
                    detail:"自定义分隔线内容的位置",
                    typeArray: [{'label': 'left', 'value': 'left'},{'label': 'right', 'value': 'right'},{'label': 'center', 'value': 'center'},]
                    },
            ],
            events:[
            ],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-divider
            ${generalTemplate(param)}
        >
        </el-divider>
        `
    }
}
