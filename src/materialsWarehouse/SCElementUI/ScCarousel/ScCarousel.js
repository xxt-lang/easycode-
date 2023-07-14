export const ScCarousel={
    component: {
        component: "ScCarousel",
        label: '走马灯',
        events: {},
        attributes: {},
        styles: {},
        children: [
            {
                component: "container",
                attribute: 'carousel-item',
                label: "项",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'carousel-item',
                label: "项",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'carousel-item',
                label: "项",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'carousel-item',
                label: "项",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
        ],
        type: "container"
    },
    setter:{
        component: "ScCarousel",
        setter: {
            attributes: [
                {
                    attributeName: "carouselRef",
                    label: "绑定ref",
                    bind:'ref',
                    type: "input",
                    value: "carouselRef",
                    defaultValue: "carouselRef",
                },
                {
                    attributeName: "height",
                    label: "高度",
                    type: "input",
                    detail:'走马灯的高度',
                    value: "",
                    defaultValue: "",
                },
                {
                    attributeName: "trigger",
                    label: "触发方式",
                    type: "select",
                    detail:"指示器的触发方式",
                    value: "hover",
                    defaultValue: "hover",
                    typeArray: [
                        {
                            value: 'hover',
                            label: 'hover'
                        },
                        {
                            value: 'click',
                            label: 'click'
                        },]
                },
                {
                    attributeName: "initial-index",
                    label: "初始索引",
                    type: "inputNumber",
                    detail:"初始状态激活的幻灯片的索引，从 0 开始",
                    value: 0,
                    defaultValue: 0,
                    max:999
                },
                {
                    attributeName: "autoplay",
                    label: "自动切换",
                    type: "switch",
                    detail:"是否自动切换",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "interval",
                    label: "时间间隔(毫秒)",
                    type: "inputNumber",
                    detail:"自动切换的时间间隔，单位为毫秒",
                    value: 4000,
                    defaultValue: 4000,
                    max: 99999
                },
                {
                    attributeName: "indicator-position",
                    label: "指示器的位置",
                    type: "select",
                    detail:"指示器的位置",
                    value: "",
                    defaultValue: "",
                    typeArray: [
                        {
                            value: 'outside',
                            label: 'outside'
                        },
                        {
                            value: 'none',
                            label: 'none'
                        },]
                },
                {
                    attributeName: "arrow",
                    label: "切换箭头的显示时机",
                    type: "select",
                    detail:"切换箭头的显示时机",
                    value: "hover",
                    defaultValue: "hover",
                    typeArray: [
                        {
                            value: 'always',
                            label: 'always'
                        },
                        {
                            value: 'hover',
                            label: 'hover'
                        },
                        {
                            value: 'never',
                            label: 'never'
                        },]
                },
                {
                    attributeName: "direction",
                    label: "展示方向",
                    type: "select",
                    detail:"展示的方向",
                    value: "horizontal",
                    defaultValue: "horizontal",
                    typeArray: [
                        {
                            value: 'horizontal',
                            label: 'horizontal'
                        },
                        {
                            value: 'horizontal',
                            label: 'horizontal'
                        },]
                },
                {
                    attributeName: "type",
                    label: "类型",
                    type: "select",
                    detail:"走马灯的类型的类型",
                    value: "",
                    defaultValue: "",
                    typeArray: [
                        {
                            value: 'card',
                            label: 'card'
                        }]
                },
                {
                    attributeName: "loop",
                    label: "循环显示",
                    type: "switch",
                    detail:"是否循环显示",
                    value: true,
                    defaultValue: true,
                },
                {
                    attributeName: "pause-on-hover",
                    label: "鼠标悬浮时暂停自动切换",
                    type: "switch",
                    detail:"鼠标悬浮时暂停自动切换",
                    value: false,
                    defaultValue: false,
                },
                {
                    attributeName: "carouselItem",
                    label: "配置项",
                    type: "table",
                    defaultValue: [],
                    isChildren: true,
                    column: [
                        {
                            attributeName: "name",
                            label: "名字",
                            type: "input",
                            detail:"幻灯片的名字，可用作 setActiveItem 的参数",
                            value: '',
                            defaultValue: '',
                        },
                        {
                            attributeName: "label",
                            label: "指示器文本",
                            type: "input",
                            detail:"该幻灯片所对应指示器的文本",
                            value: '',
                            defaultValue: '',
                        },
                    ],
                },


            ],
            styles: {},
            events: [
                {
                    event: "change", // 事件名称
                    detail:'幻灯片切换时触发',
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ]
        },
    },
}
