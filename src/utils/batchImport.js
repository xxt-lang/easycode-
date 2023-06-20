const imports = import.meta.glob('@/views/ScElementUI/*.vue')
export default {
    install (app){
        for (const path in imports) {
            imports[path]().then((mod) => {
                let name = path.replace("/src/views/ScElementUI/","").replace(".vue","")
                console.log(mod)d
                app.component(name,mod)
            })
        }
    }
}
