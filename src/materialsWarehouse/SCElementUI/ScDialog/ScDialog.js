import {ecTemplateFor, generalTemplate, includeTemplate} from "../../../utils/ecTemplate";

export const ScDialog = {
    component: {
        component: "ScDialog",
        label: '弹窗',
        events: {},
        attributes: {},
        styles: {},
        shapeStyles: {
            position: "absolute",height: "100%",width:"100%",top:"0px"
        },
        type:"container",
        status: {
            dialog:true,
            activeDialog:true,
            active: true,
            activeContainer: false,
            isHidden: false,
            lock: false,// false 不锁 true 锁
        },
    },
    setter: {
        component: "ScDialog",
        setter: {
            attributes: [

                {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "modelValue",
                    defaultValue: "modelValue",
                    detail: "绑定值",
                    bind: 'value',
                },
                {
                    attributeName: "before-close-bindValue",
                    label: "关闭前的回调",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind: "value",
                    detail: "关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.",
                },
                {
                    attributeName: "title",
                    label: "标题",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入",
                },
                {
                    attributeName: "width",
                    label: "对话框的宽度",
                    type: "input",
                    value: "50%",
                    defaultValue: "50%",
                    detail: "对话框的宽度，默认值为 50%",
                },
                {
                    attributeName: "fullscreen",
                    label: "全屏",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否为全屏 Dialog",
                },
                {
                    attributeName: "top",
                    label: "弹窗margin-top",
                    type: "input",
                    value: "15vh",
                    defaultValue: "15vh",
                    detail: "dialog CSS 中的 margin-top 值，默认为 15vh",
                },
                {
                    attributeName: "modal",
                    label: "遮罩层",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否需要遮罩层",
                },
                {
                    attributeName: "modal-class",
                    label: "遮罩的自定义类名",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "遮罩的自定义类名",
                },
                {
                    attributeName: "append-to-body",
                    label: "插入至 body 元素",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true",
                },
                {
                    attributeName: "lock-scroll",
                    label: " body 滚动锁定",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否在 Dialog 出现时将 body 滚动锁定",
                },
                {
                    attributeName: "open-delay",
                    label: "打开的延时时间",
                    type: "inputNumber",
                    value: 0,
                    defaultValue: 0,
                    detail: "dialog 打开的延时时间，单位毫秒",
                    max: 9999,
                },
                {
                    attributeName: "close-delay",
                    label: "关闭的延时时间",
                    type: "inputNumber",
                    value: 0,
                    defaultValue: 0,
                    detail: "drawer 关闭的延时时间，单位毫秒",
                    max: 9999,
                },
                {
                    attributeName: "close-on-click-modal",
                    label: "点击modal关闭Dialog",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否可以通过点击 modal 关闭 Dialog",
                },
                {
                    attributeName: "close-on-press-escape",
                    label: "ESC关闭Dialog",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否可以通过按下 ESC 关闭 Dialog",
                },
                {
                    attributeName: "show-close",
                    label: "显示关闭按钮",
                    type: "switch",
                    value: true,
                    defaultValue: true,
                    detail: "是否显示关闭按钮",
                },
                {
                    attributeName: "draggable",
                    label: "拖拽功能",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "为 Dialog 启用可拖拽功能",
                },
                {
                    attributeName: "center",
                    label: "header和footer部分居中排列",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否让 Dialog 的 header 和 footer 部分居中排列",
                },
                {
                    attributeName: "align-center",
                    label: "水平垂直对齐对话框",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "是否水平垂直对齐对话框",
                },
                {
                    attributeName: "destroy-on-close",
                    label: "关闭Dialog销毁其中的元素 ",
                    type: "switch",
                    value: false,
                    defaultValue: false,
                    detail: "当关闭 Dialog 时，销毁其中的元素",
                },
                {
                    attributeName: "close-icon",
                    label: "关闭图标",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail: "自定义关闭图标，默认 Close",
                },
                // {
                //     attributeName: " z-index",
                //     label: " z-index",
                //     type: "inputNumber",
                //     value: 1000,
                //     defaultValue: 1000,
                //     detail: "和原生的 CSS 的 z-index 相同，改变 z 轴的顺序",
                // },
            ],
            events: [
                // {
                //     event: "open", // 事件名称
                //     enable: false,// 是否启用
                //     detail: "Dialog 打开的回调",
                //     method: ''// 绑定方法名
                // },
                // {
                //     event: "opened", // 事件名称
                //     enable: false,// 是否启用
                //     detail: "Dialog 打开动画结束时的回调",
                //     method: ''// 绑定方法名
                // },
                // {
                //     event: "close", // 事件名称
                //     enable: false,// 是否启用
                //     detail: "Dialog 关闭的回调",
                //     method: ''// 绑定方法名
                // },
                // {
                //     event: "closed", // 事件名称
                //     enable: false,// 是否启用
                //     detail: "Dialog 关闭动画结束时的回调",
                //     method: ''// 绑定方法名
                // },
                // {
                //     event: "open-auto-focus", // 事件名称
                //     enable: false,// 是否启用
                //     detail: "输入焦点聚焦在 Dialog 内容时的回调",
                //     method: ''// 绑定方法名
                // },
                // {
                //     event: "close-auto-focus", // 事件名称
                //     enable: false,// 是否启用
                //     detail: "输入焦点从 Dialog 内容失焦时的回调",
                //     method: ''// 绑定方法名
                // },
            ],
            styles: {}
        }
    },
    template: (param) => {
        return `
        <el-dialog
            ${generalTemplate(param)}
        >
         ${ecTemplateFor(param.children,(item2)=>{
            return includeTemplate(item2.component,item2)})}
        </el-dialog>
        `
    }
}
