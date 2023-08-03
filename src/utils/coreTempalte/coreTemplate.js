import {ecTemplateFor,includeTemplate} from "../ecTemplate";
export function coreTemplate(param) {
    return`
    <template>
    <div>
         ${ecTemplateFor(param.children,(item)=>{
        return includeTemplate(item.component,item)})}
    </div>
    </template>
    <script>
    ${param.ecVueInfo}
    </script>
    <style scoped>
    ${param.css}
    </style>
    `
}
