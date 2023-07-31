import {ecTemplateFor,includeTemplate} from "../ecTemplate";
export function coreTemplate(param) {
    return`
    <template>
     ${ecTemplateFor(param.children,(item)=>{
         return includeTemplate(item.component,item)})}
    </template>
    <script>
        ${param.ecVueInfo}
    </script>
    <style>
        ${param.css}
    </style>
    `
}
