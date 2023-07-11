import { createApp,defineComponent} from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPersist from 'pinia-plugin-persist'
import {registeredComponent} from "./utils/registered/registeredComponent";

import App from './App.vue'
import router from './router'

import './assets/main.css'

import {setMouseEvent} from "./utils/core";

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(registeredComponent)


const container =   {mounted(el, binding, vnode, prevVnode) {
        el.dataset['elementtype'] = "container"
        el.dataset['elementid'] = binding.value.id
        el.dataset['featherid'] = binding.value.featherId
        el.dataset['componentid'] = binding.value.id
        el.dataset['lock'] = binding.value.status.lock
        el.addEventListener("mousedown",(e)=>{
            setMouseEvent(e)
        })
}}
app.directive('container',container)
