import {ecTemplateFor} from "../ecTemplate";

export function ScButtonTemplate(param) {
    return `
        <el-button
        ${param.bindClass !==""?`class="${param.bindClass}"`:''}
        ${ecTemplateFor(param.attributes, (item,k) => {
            if ((typeof item === "boolean") && item) {
                return `:${k}="${item}"`
            }
            if ((typeof item === "number")) {
                return `:${k}="${item}"`
            }
            if ((typeof item === "string") && item !== '' && k !== 'label') {
                return `${k}="${item}"`
            }
            return ''
        })}
        ${ecTemplateFor(param.events, (item,k) => {
        if (item.enable) {
            return `@${k}="${item.method}"`
        }
        return ''
    })}
        >
        ${param.attributes.label !==""?`${param.attributes.label }`:''} 
        </el-button>
        `
}
