class ecMitt {
    constructor() {
        this.eventObject = {}
        this.iframeWindow = null
        this.nowEvent = ''
    }
    emit(event, targetOrigin) {
        let target = "*"
        if (targetOrigin) {
            target = targetOrigin
        }
        this.nowEvent = event.event
        if (this.iframeWindow) {
            this.iframeWindow.postMessage(event, target);
        } else {
            window.postMessage(event, target);
        }
    }

    on(event, callback) {
        if (!this.eventObject[event.event]) {
            this.eventObject[event.event] = []
        }
        // 存储订阅者的回调函数
        this.eventObject[event.event].push(callback);
        console.log(this.eventObject)
        window.addEventListener('message', event => {
            console.log(this.eventObject)
            if (event.data.event && this.eventObject[this.nowEvent] && this.nowEvent === event.data.event) {
                for (let callback of this.eventObject[event.data.event]) {
                    callback(event)
                }
            }
        })
    }
}

export default ecMitt
