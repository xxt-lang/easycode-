export const registeredComponent = {
    install(app, options) {
        // 通过vite全局加载组件
        const componentsModules  = import.meta.glob('@/views/RegisteredComponent/*/*.vue',{eager:true})
        for (const path in componentsModules) {
            const compName = path.match(/\w+.(vue)$/)[0].replace(".vue","")
            app.component(compName,componentsModules[path].default)
        }
    }
}
