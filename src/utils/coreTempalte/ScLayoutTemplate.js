import {ecTemplateFor, includeTemplate} from "../ecTemplate";

export function ScLayoutTemplate(param) {
    return `
        <el-row
        ${param.bindClass !==""?`class="${param.bindClass}"`:''}
        ${ecTemplateFor(param.attributes, (item) => {
            if ((typeof param.attributes[item] === "boolean") && param.attributes[item]) {
                return `:${item}="${param.attributes[item]}"`
            }
            if ((typeof param.attributes[item] === "number")) {
                return `:${item}="${param.attributes[item]}"`
            }
            if ((typeof param.attributes[item] === "string") && param.attributes[item] !== '') {
                return `${item}="${param.attributes[item]}"`
            }
            return ''
        })}>
        ${ecTemplateFor(param.children, (citem,k) => {
            return `<el-col ${
                ecTemplateFor(param.attributes['col'][k], (item1,k1) => {
                    if ((item1 === "boolean") && item1) {
                        return `:${k1}="${item1}"`
                    }
                    if ((typeof item1 === "number" && item1 !== 0)) {
                        return `:${k1}="${item1}"`
                    }
                    if ((typeof item1 === "string") && item1 !== '') {
                        return `${k1}="${item1}"`
                    }
                    return ''
                })}>
                ${ecTemplateFor(param.children[k].children,(item2)=>{
                    return includeTemplate(item2.component,item2)})}
            </el-col>`
        })}
         </el-row>
        `
}
