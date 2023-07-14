export const materials = [
    {
        UI: 'baseComponent',
        label: '其他组件',
        components: [
            {
                components: [
                    {
                        label: '路由',
                        component: 'ScRouter'
                    },
                ]
            }]
    },
    {
        UI: 'element',
        label: 'element',
        components: [
            {
                group: 'Basic 基础组件',
                components: [
                    {
                        label: '按钮',
                        component: 'ScButton',
                    },
                    {
                        label: 'Container 布局容器',
                        component: 'ScContainer'
                    },
                    {
                        label: 'Layout 布局',
                        component: 'ScRow'
                    },
                    {
                        label: 'Link 链接',
                        component: 'ScLink'
                    },
                    {
                        label: 'Scrollbar 滚动条',
                        component:'ScScrollbar'
                    },
                    {
                        label: 'Space 间距',
                        component: 'ScSpace'
                    }
                ]
            },
            {
                group: 'Form 表单组件',
                components: [
                    {
                        label: '自动补全输入框',
                        component: -1
                    },
                    {
                        label: 'Cascader 级联选择器',
                        component: 'ScCascader'
                    },
                    {
                        label: 'Checkbox 多选框',
                        component: 'ScCheckbox'
                    },
                    {
                        label: 'ColorPicker 颜色选择器',
                        component: 'ScColorPicker'
                    },
                    {
                        label: 'DatePicker 日期选择器',
                        component: 'ScDatePicker'
                    },
                    {
                        label: 'DateTimePicker 日期时间选择器',
                        component: 'ScDateTimePicker'
                    },
                    {
                        label: 'Form 表单',
                        component: 'ScForm'
                    },
                    {
                        label: 'Input 输入框',
                        component: 'ScInput'
                    },
                    {
                        label: 'Input Number 数字输入框',
                        component: 'ScInputNumber'
                    },
                    {
                        label: 'Radio 单选框',
                        component: 'ScRadio'
                    },
                    {
                        label: 'Rate 评分',
                        component: 'ScRate'
                    },
                    {
                        label: 'Select 选择器',
                        component: 'ScSelect'
                    },
                    {
                        label: 'Select V2 虚拟列表选择器',
                        component: 'ScSelectV2'
                    },
                    {
                        label: 'Slider 滑块',
                        component: 'ScSlider'
                    },
                    {
                        label: 'Switch 开关',
                        component: 'ScSwitch'
                    },
                    {
                        label: 'TimePicker 时间选择器',
                        component: 'ScTimePicker'
                    },
                    {
                        label: 'TimeSelect 时间选择',
                        component: 'ScTimeSelect'
                    },
                    {
                        label: 'Transfer 穿梭框',
                        component: 'ScTransfer'
                    },
                    {
                        label: 'Upload 上传',
                        component: 'ScUpload'
                    },
                ]
            },
            {
                group: 'Data 数据展示',
                components: [
                    {
                        label: 'Avatar 头像',
                        component: 'ScAvatar'
                    },
                    {
                        label: 'Badge 徽章',
                        component: 'ScBadge'
                    },
                    {
                        label: 'Calendar 日历',
                        component: 'ScCalender'
                    },
                    {
                        label: 'Card 卡片',
                        component: 'ScCard'
                    }, {
                        label: 'Carousel 走马灯',
                        component: 'ScCarousel'
                    },
                    {
                        label: 'Collapse 折叠面板',
                        component: 'ScCollapse'
                    },
                    {
                        label: 'Descriptions 描述列表',
                        component: 'ScDescriptions'
                    },
                    {
                        label: 'Empty 空状态',
                        component: 'ScEmpty'
                    }, {
                        label: 'Image 图片',
                        component: 'ScImage'
                    },
                    {
                        label: 'Infinite Scroll 无限滚动',
                        component: 'ScInfiniteScroll'
                    },
                    {
                        label: 'Pagination 分页',
                        component: 'ScPagination'
                    },
                    {
                        label: 'Progress 进度条',
                        component: 'ScProgress'
                    }, {
                        label: 'Result 结果',
                        component: 'ScResult'
                    },
                    {
                        label: 'Skeleton 骨架屏',
                        component: 'ScSkeleton'
                    },
                    {
                        label: 'Table 表格',
                        component: 'ScTable'
                    },
                    {
                        label: 'Virtualized Table 虚拟化表格',
                        component: 'ScVirtualizedTable'
                    },
                    {
                        label: 'Tag 标签',
                        component: 'ScTag'
                    },
                    {
                        label: 'Timeline 时间线',
                        component: 'ScTimeline'
                    },
                    {
                        label: 'Tree 树形控件',
                        component: 'ScTree'
                    },
                    {
                        label: 'TreeSelect 树形选择',
                        component: 'ScTreeSelect'
                    },
                    {
                        label: 'Tree V2 虚拟化树形控件',
                        component: 'ScTreeV2'
                    },
                    {
                        label: 'Statistic 统计组件',
                        component: 'ScStatistic'
                    },
                ]
            },
            {
                group: 'Navigation 导航',
                components: [
                    {
                        label: 'Affix 固钉',
                        component: 'ScAffix'
                    },
                    {
                        label: 'Backtop 回到顶部',
                        component: 'ScBacktop'
                    },
                    {
                        label: 'Breadcrumb 面包屑',
                        component: 'ScBreadcrumb'
                    },
                    {
                        label: 'Dropdown 下拉菜单',
                        component: 'ScDropdown'
                    },
                    {
                        label: 'Menu 菜单',
                        component: 'ScMenu'
                    },
                    {
                        label: 'Page Header 页头',
                        component: 'ScPageHeader'
                    },
                    {
                        label: 'Steps 步骤条',
                        component: 'ScSteps'
                    },
                    {
                        label: 'Tabs 标签页',
                        component: 'ScTabs'
                    },
                ]
            },
            {
                group: 'Feedback 反馈组件',
                components: [
                    {
                        label: 'Alert 提示',
                        component: 'ScAlert'
                    },
                    {
                        label: 'Dialog 对话框',
                        component: 'ScDialog'
                    },
                    {
                        label: 'Drawer 抽屉',
                        component: 'ScDrawer'
                    },
                    {
                        label: 'Loading 加载',
                        component: 'ScLoading'
                    },
                    {
                        label: 'Message 消息提示',
                        component: 'ScMessage'
                    },
                    {
                        label: 'MessageBox 消息弹框',
                        component: 'ScMessageBox'
                    },
                    {
                        label: 'Notification 通知',
                        component: 'ScNotification'
                    },
                    {
                        label: 'Popconfirm 气泡确认框',
                        component: 'ScPopconfirm'
                    },
                    {
                        label: 'Popover 气泡卡片',
                        component: 'ScPopover'
                    },
                    {
                        label: 'Tooltip 文字提示',
                        component: 'ScTooltip'
                    },
                ]
            },
            {
                group: 'Others 其他',
                components: [{
                    label: 'Divider 分割线',
                    component: 'ScDivider'
                },]
            }
        ]
    },
    {
        UI: 'echarts',
        label: 'echarts图表',
    },
    {
        UI: 'dataV',
        label: 'dataV大屏',
    }
]


export const componentList = [
    {
        component: "ScButton",
        label: '按钮', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
    },
    {
        component: "ScLink",
        label: '链接', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
    },
    {
        component: "ScScrollbar",
        label: '滚动条', // 左侧组件列表中显示的名字
        type: "container",
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
    },
    {
        component: "ScSpace",
        label: 'Space间距', // 左侧组件列表中显示的名字
        type: "container",
        children: [
            {
                component: "container",
                attribute: 'space',
                label: "space",
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
                attribute: 'space',
                label: "space",
                id: "",
                event: {},
                attributes: {},
                styles: {},
                children: [],
                featherId: "",
                type: "container"
            },
        ],
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {
        },
    },
    {
        component: "ScInput",
        label: '输入框',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScRate",
        label: '评分',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScSelect",
        label: 'select选择器',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScColorPicker",
        label: '颜色选择器',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScRadio",
        label: '单选框',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScSlider",
        label: '滑块',
        events: {},
        attributes: {},
        styles: {
            width: '200px'
        },
    },
    {
        component: "ScSwitch",
        label: '开关',
        events: {},
        attributes: {},
        styles: {},
    },

    {
        component: "ScCard",
        label: '卡片',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScRow",
        label: '行',
        event: {},
        attributes: {},
        styles: {},
        children: [
            {
                component: "container",
                attribute: 'col',
                label: "列",
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
                attribute: 'col',
                label: "列",
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
    {
        component: "ScMenu",
        label: '导航',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScDrawer",
        label: '抽屉',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScDialog",
        label: '弹窗',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScTable",
        label: '表格',
        events: {},
        attributes: {},
        styles: {},
        type: "container"
    },
    {
        component: "ScContainer",
        label: 'container 容器布局',
        type: "container",
        events: {},
        attributes: {},
        styles: {},
        children: [

            {
                component: "container",
                attribute: 'header',
                label: "header",
                id: "",
                event: {},
                attributes: {},
                styles: {
                    "background-color":'#c6e2ff'
                },
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'Aside',
                label: "Aside",
                id: "",
                event: {},
                attributes: {},
                styles: {
                   " line-height": '100vh',
                    "background-color":"#d9ecff"
                },
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'main',
                label: "main",
                id: "",
                event: {},
                attributes: {},
                styles: {
                    "background-color":'#ecf5ff',
                },
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'footer',
                label: "footer",
                id: "",
                event: {},
                attributes: {},
                styles: {
                    "background-color":'#c6e2ff'
                },
                children: [],
                featherId: "",
                type: "container"
            },
            {
                component: "container",
                attribute: 'topContainer',
                label: "topContainer",
                id: "",
                event: {},
                attributes: {},
                styles: {
                },
                children: [],
                featherId: "",
                type: "container"
            },
        ],
    },
    {
        component: "ScRouter",
        label: '路由',
        events: {},
        attributes: {},
        styles: {},
        type: "base"
    }
]
export const componentSetters = [

    {
        component: "ScRow",
        setter: {
            attributes: [
                {
                    attributeName: "justify",//组件配置中属性字段名
                    label: "flex水平布局",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "start",//属性值
                    defaultValue: "start",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [
                        {
                            value: 'start',
                            label: 'start'
                        },
                        {
                            value: 'end',
                            label: 'end'
                        },
                        {
                            value: 'center',
                            label: 'center'
                        },
                        {
                            value: 'space-around',
                            label: 'space-around'
                        },
                        {
                            value: 'space-between',
                            label: 'space-between'
                        },
                        {
                            value: 'space-evenly',
                            label: 'space-evenly'
                        },] //类型选择数组
                },
                {
                    attributeName: "gutter",//组件配置中属性字段名
                    label: "栅格间隔",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 0,//属性值
                    defaultValue: 0,//默认属性值
                    valueType: Number,// 属性值类型,
                },
                {
                    attributeName: "col",//组件配置中属性字段名
                    label: "配置列",
                    type: "table",//编辑自段的类型input select number switch buttonList
                    defaultValue: [],
                    isChildren: true,// 是否与children绑定
                    column: [
                        {
                            attributeName: "span",//组件配置中属性字段名
                            label: "栅格列数",
                            type: "inputNumber",//编辑自段的类型input select number switch buttonList
                            value: 12,//属性值
                            defaultValue: 12,//默认属性值
                            max: 24,
                            valueType: Number,// 属性值类型,
                        },
                        {
                            attributeName: "offset",//组件配置中属性字段名
                            label: "栅格左侧间隔",
                            type: "inputNumber",//编辑自段的类型input select number switch buttonList
                            value: 0,//属性值
                            defaultValue: 0,//默认属性值
                            valueType: Number,// 属性值类型,
                        },
                    ],
                },
            ],
            styles: {},
            events: [],
            configuration: {
                childrenTemplate: {
                    component: "container",
                    attribute: 'col',
                    label: "列",
                    id: "",
                    event: {},
                    attributes: {},
                    styles: {},
                    children: [],
                    featherId: "",
                    type: "container"
                },
            }

        },
    },
    {
        component: "ScSlider",
        setter: {
            attributes: [],
            styles: {},
            events: []
        }
    },
    {
        component: "ScTable",
        setter: {
            attributes: [
                {
                    attributeName: "value",//组件配置中属性字段名 必写
                    label: "value绑定",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "dataValue",//属性值 必写
                    defaultValue: "dataValue",//默认属性值 必写
                },
                {
                    attributeName: "column",//组件配置中属性字段名
                    label: "列",
                    type: "table",//编辑自段的类型input select number switch buttonList
                    defaultValue: [
                        {prop: 'date', label: 'data', width: '180'},
                        {prop: 'name', label: 'name', width: '180'},
                        {prop: 'address', label: 'address', width: '180'}],
                    isChildren: true,// 是否与children绑定
                    column: [
                        {
                            attributeName: "prop",//组件配置中属性字段名
                            label: "prop",
                            type: "input",//编辑自段的类型input select number switch buttonList
                            value: '',//属性值
                            defaultValue: '',//默认属性值
                        },
                        {
                            attributeName: "label",//组件配置中属性字段名
                            label: "label",
                            type: "input",//编辑自段的类型input select number switch buttonList
                            value: '',//属性值
                            defaultValue: '',//默认属性值
                        },
                        {
                            attributeName: "width",//组件配置中属性字段名
                            label: "width",
                            type: "input",//编辑自段的类型input select number switch buttonList
                            value: '',//属性值
                            defaultValue: '',//默认属性值
                        },

                    ],
                },
            ],
            styles: {},
            configuration: {
                childrenTemplate: {prop: 'address', label: 'address', with: '180'},
            }
        }
    },
    {
        component: "ScContainer",
        setter: {
            attributes: [
                {
                    attributeName: "AsideWidth",//组件配置中属性字段名
                    label: "Aside宽度",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "200",//属性值
                    defaultValue: "200",//默认属性值
                },
                {
                    attributeName: "showTopHeader",//组件配置中属性字段名
                    label: "启用TopHeader",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: true,//属性值
                    defaultValue: true,//默认属性值
                },
                {
                    attributeName: "showAside",//组件配置中属性字段名
                    label: "启用Aside",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: true,//属性值
                    defaultValue: true,//默认属性值
                },{
                    attributeName: "showHeader",//组件配置中属性字段名
                    label: "启用Header",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: true,//属性值
                    defaultValue: true,//默认属性值
                },{
                    attributeName: "showMain",//组件配置中属性字段名
                    label: "启用Main",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: true,//属性值
                    defaultValue: true,//默认属性值
                },{
                    attributeName: "showFooter",//组件配置中属性字段名
                    label: "启用Footer",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: true,//属性值
                    defaultValue: true,//默认属性值
                },


            ],
            styles: {},
            events: []
        },
    }
]
