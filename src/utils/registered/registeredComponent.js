import {assembleComponent} from "../componentConfigurator";

export const registeredComponent = {
    install(app, options) {
        // 通过vite全局加载组件
        const componentsModules  = import.meta.glob('@/materialsWarehouse/**/*.vue',{eager:true})
        for (const path in componentsModules) {
            const compName = path.match(/\w+.(vue)$/)[0].replace(".vue","")
            app.component(compName,componentsModules[path].default)
        }
    }
}

export function loadComponent(){
    const componentsModules  = import.meta.glob('@/materialsWarehouse/**/*.js',{eager:true})
    for (const path in componentsModules) {
        const compName = path.match(/\w+.(js)$/)[0].replace(".js","")
       assembleComponent(componentsModules[path][compName],compName)
    }
}
