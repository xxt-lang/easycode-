import {getComponentSetter, getStore} from "./core";
const eventBus = {}
export const ecEventBus = {
    emit: (event, targetOrigin) => {
        let target = "*"
        if (targetOrigin) {
            target = targetOrigin
        }
        eventBus[event.event] = event
        window.parent.postMessage(event, target);
    },
    on:(a)=>{
        if(eventBus[a.event]){
            window.onmessage = (e) => {
                a.func(eventBus[a.event])
            };
        }
        console.log(eventBus)
    }
}
