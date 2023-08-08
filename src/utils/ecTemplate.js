import {coreTemplate} from "./coreTempalte/coreTemplate";
import {ComponentListStore} from "../stores/counter";
import c from "prettier/plugins/graphql.mjs";

export function ecTemplate(data){
    return coreTemplate(data)
}
export function ecTemplateFor(list,method){
    let result = ''
    try{
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
    }catch (e){
        result = e
    }
    return result
}

export function includeTemplate(template,param){
    try{
        const componentListStore = ComponentListStore()
        if(componentListStore.componentTemplates.hasOwnProperty(template)){
            return componentListStore.componentTemplates[template](param)
        }
        return ""
    }catch (e){
        return e
    }
}

export function generalTemplate(param,filtrate){
    let filtrates = {attr:[]}
    if(filtrate){
        filtrates = filtrate
    }
    return `\n
        ${param.styles && JSON.stringify(param.styles) !== "{}"?`:style='${JSON.stringify(param.styles)}'`:''}\n
        ${param.bindClass && param.bindClass !==""?`class="${param.bindClass}"`:''}\n
        ${generateAttribute(param.attributes,param.defaultAttributes,filtrates.attr)}\n
        ${ecTemplateFor(param.events, (item,k) => {
        if (item.enable) {
            return `@${k}="${item.method}"`
        }
        return ''
    })}\n
    `
}

export function generateAttribute(attributes,defaultAttributes,filtrate){
    return `\n
        ${ecTemplateFor(attributes, (item,k) => {
        if(filtrate && filtrate.indexOf(k)!==-1){
            return ''
        }
        if ((typeof item === "boolean" && defaultAttributes[k] !== item)) {
            if(k.includes("-slot")){
                return ""
            }
            return `:${k}="${item}"`
        }
        if ((typeof item === "number" && item !== 0) && defaultAttributes[k] !== item) {
            return `:${k}="${item}"`
        }
        if ((typeof item === "string") && item !== '' && defaultAttributes[k] !== item) {
            if(k.includes("Ref")){
                return `ref="${item}"`
            }else if(k === "modelValue"){
                return `v-model="${item}"`
            }else if(k.includes("-bindValue")){
                return `:${k.replace("-bindValue","")}="${item}"`
            }else{
                return `${k}="${item}"`
            }
        }
        return ''
    })}`
}
