import {coreTemplate} from "./coreTempalte/coreTemplate";
import {ComponentListStore} from "../stores/counter";

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
export function includeTemplate(template,param){
    const componentListStore = ComponentListStore()
    if(componentListStore.componentTemplates.hasOwnProperty(template)){
        return componentListStore.componentTemplates[template](param)
    }
    return ""
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
            return `:${k}="${item}"`
        }
        if ((typeof item === "number" && item !== 0) && defaultAttributes[k] !== item) {
            return `:${k}="${item}"`
        }
        if ((typeof item === "string") && item !== '' && defaultAttributes[k] !== item && k.includes("-slot")) {
            if(k.includes("Ref")){
                return `ref="${item}"`
            }else if(k === "modelValue"){
                return `v-model="${item}"`
            }else if(k !== "modelValue" && k.includes("-bindValue")){
                return `:${k.replace("-bindValue","")}="${item}"`
            }else{
                return `${k}="${item}"`
            }
        }
        return ''
    })}`
}
