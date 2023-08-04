import eventBus from "./eventBus";

export const ecRouter={
    "push": (param) => {
        if (param && param.hasOwnProperty("name")) {
            eventBus.emit("router", {path: param["name"]})
        }
    }
}
