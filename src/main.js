import { createApp,defineComponent} from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// 通过vite全局加载组件
const componentsModules  = import.meta.glob('@/views/SCElementUI/*.vue',{eager:true})
for (const path in componentsModules) {
    const compName = path.match(/\w+.(vue)$/)[0].replace(".vue","")
    app.component(compName,componentsModules[path].default)
}
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
