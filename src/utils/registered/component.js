export const materials = [
    {
        UI: 'baseComponent',
        label: '其他组件',
        components: [
            {
                components: [
                    {
                        label: '路由',
                        component: 'EcRouter'
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
        icon: 'el-icon-edit', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attributes: {},
        styles: {},
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
        component: "ScAvatar",
        label: '头像',
        events: {},
        attributes: {},
        styles: {},
    },
    {
        component: "ScBadge",
        label: '徽章',
        type: "container",
        events: {},
        attributes: {},
        styles: {
            display: 'inline-flex'
        },
    },
    {
        component: "ScCarousel",
        label: '走马灯',
        event: {},
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
        component: "EcRouter",
        label: '路由',
        events: {},
        attributes: {},
        styles: {},
        type: "base"
    }
]
export const componentSetters = [
    {
        component: "ScButton", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "type",//组件配置中属性字段名
                    label: "类型",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "primary",//属性值
                    defaultValue: "primary",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [
                        {
                            value: 'primary',
                            label: 'primary'
                        },
                        {
                            value: 'success',
                            label: 'success'
                        },
                        {
                            value: 'warning',
                            label: 'warning'
                        },
                        {
                            value: 'danger',
                            label: 'danger'
                        },
                        {
                            value: 'info',
                            label: 'info'
                        },
                        {
                            value: 'text',
                            label: 'text'
                        }] //类型选择数组
                },
                {
                    attributeName: "size",//组件配置中属性字段名
                    label: "尺寸",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "default",//属性值
                    defaultValue: "default",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [
                        {
                            value: 'large',
                            label: 'large'
                        },
                        {
                            value: 'default',
                            label: 'default'
                        },
                        {
                            value: 'small',
                            label: 'small'
                        }] //类型选择数组
                },
                {
                    attributeName: "label",//组件配置中属性字段名
                    label: "文本",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "按钮",//属性值
                    defaultValue: "按钮",//默认属性值
                    valueType: Boolean,// 属性值类型,
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [] //类型选择数组
                },
                {
                    attributeName: "plain",//组件配置中属性字段名
                    label: "朴素按钮",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                    valueType: Boolean,// 属性值类型,
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [] //类型选择数组
                },
                {
                    attributeName: "round",//组件配置中属性字段名
                    label: "原型按钮",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "disabled",//组件配置中属性字段名
                    label: "禁用状态",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "circle",//组件配置中属性字段名
                    label: "圆形",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "loading",//组件配置中属性字段名
                    label: "loading",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "loading-icon",//组件配置中属性字段名
                    label: "加载中状态图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: 'Loading',//属性值
                    defaultValue: 'Loading',//默认属性值
                },
                {
                    attributeName: "icon",//组件配置中属性字段名
                    label: "图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "autofocus",//组件配置中属性字段名
                    label: "原生autofocus",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "native-type",//组件配置中属性字段名
                    label: "原生type属性",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: 'button',//属性值
                    defaultValue: 'button',//默认属性值
                    typeArray: [
                        {value: 'button', label: 'button'}, {value: 'submit', label: 'submit'}, {
                            value: 'reset',
                            label: 'reset'
                        }
                    ] //类型选择数组
                },
                {
                    attributeName: "color",//组件配置中属性字段名
                    label: "颜色",
                    type: "color",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "dark",//组件配置中属性字段名
                    label: "dark模式",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
            ],
            styles: {},
            events: [
                {
                    event: "click", // 事件名称
                    enable: false,// 是否启用
                    method: ''// 绑定方法名
                }
            ],
            configuration: {
                setterAttributes: [
                    {
                        component: "SetButton",
                        param: {name: "自定义设置器"}
                    }
                ]
            }
        },
    },
    {
        component: "ScInput",
        setter: {
            attributes: [
                {
                    attributeName: "value",//组件配置中属性字段名 必写
                    label: "value绑定",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "inputValue",//属性值 必写
                    defaultValue: "inputValue",//默认属性值 必写
                },
                {
                    attributeName: "type",//组件配置中属性字段名 必写
                    label: "类型",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "text",//属性值 必写
                    defaultValue: "text",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    verifyRule: "",// 属性值校验规则 可填入正则表达式 非必写
                    typeArray: [{
                        value: 'text',
                        label: 'text'
                    }, {
                        value: 'textarea',
                        label: 'textarea'
                    },] //类型选择数组  非必写
                },
                {
                    attributeName: "placeholder",//组件配置中属性字段名 必写
                    label: "输入提示",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "请输入",//属性值 必写
                    defaultValue: "请输入",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'text', label: 'text'},
                        {value: 'textarea', label: 'textarea'},
                    ] //类型选择数组  非必写
                },
                {
                    attributeName: "maxlength",//组件配置中属性字段名 必写
                    label: "最大输入长度",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 100,//属性值 必写
                    defaultValue: 100,//默认属性值 必写
                    max: 1000,
                    min: 0
                },
                {
                    attributeName: "minlength",//组件配置中属性字段名 必写
                    label: "最小输入长度",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 0,//属性值 必写
                    defaultValue: 0,//默认属性值 必写
                    max: 100,
                    min: 0
                },
                {
                    attributeName: "show-word-limit",//组件配置中属性字段名
                    label: "统计字数",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "clearable",//组件配置中属性字段名
                    label: "显示清除按钮",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "show-password",//组件配置中属性字段名
                    label: "切换密码图标",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "disabled",//组件配置中属性字段名
                    label: "是否禁用",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "size",//组件配置中属性字段名 必写
                    label: "尺寸",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    verifyRule: "",// 属性值校验规则 可填入正则表达式 非必写
                    typeArray: [{
                        value: 'large',
                        label: 'large'
                    }, {
                        value: 'default',
                        label: 'default'
                    }, {
                        value: 'small',
                        label: 'small'
                    },] //类型选择数组  非必写
                },
                {
                    attributeName: "prefix-icon",//组件配置中属性字段名
                    label: "前缀图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "suffix-icon",//组件配置中属性字段名
                    label: "后缀图标",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "rows",//组件配置中属性字段名
                    label: "行数",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 1,//属性值
                    defaultValue: 1,//默认属性值
                },
                {
                    attributeName: "autosize",//组件配置中属性字段名
                    label: "高度是否自适应",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "autocomplete",//组件配置中属性字段名
                    label: "autocomplete 属性",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: 'off',//属性值
                    defaultValue: 'off',//默认属性值
                },
                {
                    attributeName: "name",//组件配置中属性字段名
                    label: "name 属性",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "readonly",//组件配置中属性字段名
                    label: "是否只读",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "max",//组件配置中属性字段名
                    label: "max 属性",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "min",//组件配置中属性字段名
                    label: "min 属性",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "step",//组件配置中属性字段名
                    label: "合法数字间隔",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "resize",//组件配置中属性字段名 必写
                    label: "缩放",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    verifyRule: "",// 属性值校验规则 可填入正则表达式 非必写
                    typeArray: [{
                        value: 'none',
                        label: 'none'
                    }, {
                        value: 'both',
                        label: 'both'
                    }, {
                        value: 'horizontal',
                        label: 'horizontal'
                    }, {
                        value: 'vertical',
                        label: 'vertical'
                    }] //类型选择数组  非必写
                },
                {
                    attributeName: "autofocus",//组件配置中属性字段名
                    label: "自动获取焦点",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "form",//组件配置中属性字段名
                    label: "form属性",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
                {
                    attributeName: "validate-event",//组件配置中属性字段名
                    label: "是否触发校验",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "tabindex",//组件配置中属性字段名
                    label: "输入框的 tabindex",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 0,//属性值
                    defaultValue: 0,//默认属性值
                },
                {
                    attributeName: " input-style",//组件配置中属性字段名
                    label: "元素的 style",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: '',//属性值
                    defaultValue: '',//默认属性值
                },
            ],
            styles: {}
        }
    },
    {
        component: "ScCard",
        setter: {
            attributes: [
                {
                    attributeName: "header",//组件配置中属性字段名 必写
                    label: "类型",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: "",//属性值 必写
                    defaultValue: "",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                },
                {
                    attributeName: "shadow",//组件配置中属性字段名 必写
                    label: "输入提示",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "always",//属性值 必写
                    defaultValue: "always",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'always', label: 'always'},
                        {value: 'never', label: 'never'},
                        {value: 'hover', label: 'hover'},] //类型选择数组  非必写
                }
            ],
            styles: {}
        }
    },
    {
        component: "ScRate",
        setter: {
            attributes: [
                {
                    attributeName: "max",//组件配置中属性字段名 必写
                    label: "最大分数值",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 5,//属性值 必写
                    defaultValue: 5,//默认属性值 必写
                    valueType: Number,// 属性值类型 必写
                },
                {
                    attributeName: "shadow",//组件配置中属性字段名 必写
                    label: "输入提示",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "always",//属性值 必写
                    defaultValue: "always",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'always', label: 'always'},
                        {value: 'never', label: 'never'},
                        {value: 'hover', label: 'hover'},] //类型选择数组  非必写
                }
            ],
            styles: {}
        }
    },
    {
        component: "ScAvatar",
        setter: {
            attributes: [
                {
                    attributeName: "icon",//组件配置中属性字段名 必写
                    label: "图标",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: '',//属性值 必写
                    defaultValue: '',//默认属性值 必写
                },
                {
                    attributeName: "size",//组件配置中属性字段名 必写
                    label: "大小",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "default",//属性值 必写
                    defaultValue: "default",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'small', label: 'small'},
                        {value: 'large', label: 'large'},
                        {value: 'default', label: 'default'},] //类型选择数组  非必写
                },
                {
                    attributeName: "shape",//组件配置中属性字段名 必写
                    label: "形状",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "default",//属性值 必写
                    defaultValue: "default",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'circle', label: 'circle'},
                        {value: 'square', label: 'square'}]
                },
                {
                    attributeName: "src",//组件配置中属性字段名 必写
                    label: "图片源地址",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: '',//属性值 必写
                    defaultValue: '',//默认属性值 必写
                },
                {
                    attributeName: "src-set",//组件配置中属性字段名 必写
                    label: "原生srcset",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: '',//属性值 必写
                    defaultValue: '',//默认属性值 必写
                },
                {
                    attributeName: "alt",//组件配置中属性字段名 必写
                    label: "原生alt",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: '',//属性值 必写
                    defaultValue: '',//默认属性值 必写
                },
                {
                    attributeName: "fit",//组件配置中属性字段名 必写
                    label: "如何适应容器",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "default",//属性值 必写
                    defaultValue: "default",//默认属性值 必写
                    valueType: String,// 属性值类型 必写
                    typeArray: [
                        {value: 'fill', label: 'fill'},
                        {value: 'contain', label: 'contain'},
                        {value: 'cover', label: 'cover'},
                        {value: 'none', label: 'none'},
                        {value: 'scale-down', label: 'scale-down'}]
                },
            ],
            styles: {}
        }
    },
    {
        component: "ScBadge",
        setter: {
            attributes: [
                {
                    attributeName: "value",//组件配置中属性字段名 必写
                    label: "显示值",// 字段标签
                    type: "input",//编辑自段的类型input select number switch 必写
                    value: '',//属性值 必写
                    defaultValue: '',//默认属性值 必写
                },
                {
                    attributeName: "value",//组件配置中属性字段名 必写
                    label: "显示值number",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 0,//属性值 必写
                    defaultValue: 0,//默认属性值 必写
                },
                {
                    attributeName: "max",//组件配置中属性字段名 必写
                    label: "最大值",// 字段标签
                    type: "inputNumber",//编辑自段的类型input select number switch 必写
                    value: 99,//属性值 必写
                    defaultValue: 99,//默认属性值 必写
                    max: 1000,
                },
                {
                    attributeName: "is-dot",//组件配置中属性字段名
                    label: "小圆点",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "hidden",//组件配置中属性字段名
                    label: "隐藏",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "type",//组件配置中属性字段名 必写
                    label: "类型",// 字段标签
                    type: "select",//编辑自段的类型input select number switch 必写
                    value: "danger",//属性值 必写
                    defaultValue: "danger",//默认属性值 必写
                    typeArray: [
                        {value: 'primary', label: 'primary'},
                        {value: 'success', label: 'success'},
                        {value: 'warning', label: 'warning'},
                        {value: 'danger', label: 'danger'},
                        {value: 'info', label: 'info'}]
                },

            ],
            styles: {}
        }
    },
    {
        component: "ScCarousel", //组件名 与组件列表中的组件一致
        setter: {
            attributes: [
                {
                    attributeName: "height",//组件配置中属性字段名
                    label: "高度",
                    type: "input",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                    valueType: Boolean,// 属性值类型,
                },
                {
                    attributeName: "trigger",//组件配置中属性字段名
                    label: "trigger",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "hover",//属性值
                    defaultValue: "hover",//默认属性值
                    valueType: String,// 属性值类型
                    verifyRule: "",// 属性值校验规则 可填入正则表达式
                    typeArray: [
                        {
                            value: 'hover',
                            label: 'hover'
                        },
                        {
                            value: 'click',
                            label: 'click'
                        },] //类型选择数组
                },
                {
                    attributeName: "initial-index",//组件配置中属性字段名
                    label: "初始索引",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 0,//属性值
                    defaultValue: 0,//默认属性值
                },
                {
                    attributeName: "autoplay",//组件配置中属性字段名
                    label: "自动切换",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },
                {
                    attributeName: "interval",//组件配置中属性字段名
                    label: "时间间隔(毫秒)",
                    type: "inputNumber",//编辑自段的类型input select number switch buttonList
                    value: 4000,//属性值
                    defaultValue: 4000,//默认属性值
                    max: 99999
                },
                {
                    attributeName: "indicator-position",//组件配置中属性字段名
                    label: "指示器的位置",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                    typeArray: [
                        {
                            value: 'outside',
                            label: 'outside'
                        },
                        {
                            value: 'none',
                            label: 'none'
                        },] //类型选择数组
                },
                {
                    attributeName: "arrow",//组件配置中属性字段名
                    label: "切换箭头的显示时机",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "hover",//属性值
                    defaultValue: "hover",//默认属性值
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
                        },] //类型选择数组
                },
                {
                    attributeName: "direction",//组件配置中属性字段名
                    label: "展示方向",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "horizontal",//属性值
                    defaultValue: "horizontal",//默认属性值
                    typeArray: [
                        {
                            value: 'horizontal',
                            label: 'horizontal'
                        },
                        {
                            value: 'horizontal',
                            label: 'horizontal'
                        },] //类型选择数组
                },
                {
                    attributeName: "type",//组件配置中属性字段名
                    label: "carousel 的类型",
                    type: "select",//编辑自段的类型input select number switch buttonList
                    value: "",//属性值
                    defaultValue: "",//默认属性值
                    typeArray: [
                        {
                            value: 'card',
                            label: 'card'
                        }] //类型选择数组
                },
                {
                    attributeName: "loop",//组件配置中属性字段名
                    label: "循环显示",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: true,//属性值
                    defaultValue: true,//默认属性值
                },
                {
                    attributeName: "pause-on-hover",//组件配置中属性字段名
                    label: "鼠标悬浮时暂停自动切换",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
                },


            ],
            styles: {},
            events: []
        },
    },
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
                    attributeName: "showMainRouter",//组件配置中属性字段名
                    label: "启用MainRouter",
                    type: "switch",//编辑自段的类型input select number switch buttonList
                    value: false,//属性值
                    defaultValue: false,//默认属性值
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
