import {coreTemplate} from "./coreTempalte/coreTemplate";
import {ScButtonTemplate} from "./coreTempalte/ScButtonTemplate";
import {ScLayoutTemplate} from "./coreTempalte/ScLayoutTemplate";

export function ecTemplate(data){
    return coreTemplate(data)
}
export function ecTemplateFor(list,method){
    let result = ''
    if(Array.isArray(list)){
        let length = list.length
        for (let i = 0; i < length; i++) {
            if(method(list[i],i)!==''){
                result = result+method(list[i],i)+'\n'
            }
        }
    }else{
        for(let key in list){
            if(method(list[key],key)!==''){
                result = result+method(list[key],key)+'\n'
            }
        }
    }
    return result
}
const templateList = {
    ScButton:ScButtonTemplate,
    ScLayout:ScLayoutTemplate
}
export function includeTemplate(template,param){
    if(templateList.hasOwnProperty(template)){
        return templateList[template](param)
    }
    return ""
}
