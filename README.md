# vue3 EasyCode 

## 实现与目标

在于提高开发效率，减少前端开发中代码量的编写。更容易直观的看到编写的页面样式，可以进行二次开发，基于核心组件如容器等组件，可以在一定规则下进行设置器的自定义配置。可以根据自身需求编写对应的组件、设置器等相配置文件中进行组件的扩展。

后期将核心编辑的组件与js包抽出来，用于开源Vue3低代码开发

### 实现：

​	拖拽

​	容器组件

​	组件的属性配置

​    快捷键

​	双击打开对应组件设置器

### 目标：

​	组件事件配置

​	组件样式配置

​	撤销回退

​    右键菜单

​    引入dataV封装成可配置组件

​	引入echarts封装成可配置组件



​	

## 目录介绍

1.**api**与后端交互接口存放位置

2.**assets**项目静态资源

3.**router**路由配置

4.**stores**  pinia（组件之间参数传递配置）

5.**utils**项目核心js文件

6.**views**

​	**coreComponents**  低代码核心组件包括设置器组件、编辑器组件、元素形状组件......

​	**ElementUI** 适应平台后的element组件

​	**toolBar** 工具栏组件

## 配置文件

### utils-shortcutKey.js(用于快捷键的配置)

**keyDowns中增加快捷键**

```javascript
  "ctrl h": {
    label: '查看历史',
    global:false,
    func: function () {
     // 在其中编辑快捷键处理的内容
      console.log("查看历史")
    }
  },
```

### **utils-componentConfigurator.js**(组件配置)

**componentSetters 组件设置器的配置**

```javascript
   component:"ScButton", //组件名 与组件列表中的组件一致
    setter:{
        //组件属性配置 对应 vue props
     attributes:[
            {
                attributeName:"",//组件配置中属性字段名 必写
                label:"",// 字段标签
                type:"",//编辑自段的类型input select number switch 必写
                value:"",//属性值 必写
                defaultValue:"",//默认属性值 必写
                valueType:String,// 属性值类型 必写
                verifyRule:"",// 属性值校验规则 可填入正则表达式 非必写
                typeArray:[] //类型选择数组  非必写
            }
		],
         // 组件样式配置
      styles:{}
    }
```

**componentList** 可拖拽组件配置

```javascript
{
    component: "ScCard", // 组件名 此处须与componentSetters中的component保持一致
    label: '卡片',// 组件的标签名称
    event: {},// 组件的事件
    attributes: {},// 组件相关属性，默认不填写时则根据componentSetters 中 attributes编写的属性进行自动配置
    styles: {
        width: 192,
        height: 33
    },
    type:"container" // 默认不写为common类型 container类型会自动增加children属性
},
```
