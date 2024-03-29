# EasyCode vue3低代码开发工具

项目预览地址：[简单代码 (gitee.io)](https://xxt2286621910.gitee.io/easy-code/)

主体功能讲解：[基于Vue3的低代码开发工具 - 掘金 (juejin.cn)](https://juejin.cn/post/7257873231381708857)

事件绑定实现：[基于vue3的低代码开发工具-事件与value的绑定 - 掘金 (juejin.cn)](https://juejin.cn/post/7258165891279339575)

样式绑定实现：[基于vue3的低代码开发工具-样式绑定 - 掘金 (juejin.cn)](https://juejin.cn/post/7257894053902647353)

后端生成源码demo：[另一种生命里/Spring-Boot-Template (gitee.com)](https://gitee.com/xxt2286621910/Spring-Boot-Template)

后续将增加出码功能，数据源功能在近期会完成并提交上

# 1.功能

## 1.1头部工具栏

**清空画布**：消除当前选中页面中编辑的组件

**预览**：选中页面后点击预览，将新打开一个页面，展示选中页面的预览效果

**导出**：目标导出当前项目的json数据（当前为了开发便利只是在控制台展示数据）

**保存**：快捷键*ctrl s*保存当前项目（所有页面数据）将数据缓存到localStorage，当页面刷新时重新打开时将展示缓存的项目数据

**撤销|撤销回退**：快捷键*ctrl z，ctrl y*为了储存效率考虑此部分为注册方法传入参数实现本功能，所以当前支持撤销/撤销回退操作的有清空画布、删除、新增、组件移位操作

**页面配置**：用于配置页面数据（此数据用于组件的数据绑定）、方法编辑、历史操作记录的动态跳转

**快捷键提示**：点击后右侧会出现当前支持的快捷键及其对应的说明

## 1.2左侧工具栏介绍

**页面**：

1.点击页面之后会弹出页面配置弹窗，弹窗左上角为新增按钮进行页面的（label，页面名的配置（页面名后期用于.vue文件生成时的文件名）、页面css样式配置）

2.新增完成后，在页面弹窗则会出现对应的页面信息，可以对页面进行修改与删除操作，在此处点击页面就可以切换页面，

3.页面树的第二级开始为页面中的组件，当点击组件时就会触发组件选中，（目前点击非当前页面的组件不会进行跳转、后期目标实现这一点）

**组件**：点击组件之后弹出的是已经注册在EasyCode中的组件,其中头部可以切换组件的大致分组，组件使用（在此处选中组件后拖拽到右侧空白画布即可），当前阶段计划支持elementui、echarts、datav大屏，后期目标封装iview 等

## 1.3画布功能介绍

**组件选中**：点击组件时组件出现蓝色边框即为选中，按住ctrl键在鼠标左键点击则可完成多选

**拖拽移位操作**：组件的渲染底层为json数组，所以在调整组件位置时并不是拖到哪里是哪里，

1.若想进行位置的变化需要拖拽选中组件后移位到目标位置上的组件上，鼠标放在目标组件的左和上位置，则会选中组件会插入到目标组件的前方，右和下相反。

2.当从左侧工具栏中选中组件后拖拽到画布中，当拖拽到空白处组件会默认放到最后的位置，当想要推拽到指定位置是可以选中目标元素进行放置。

3.当目标组件为容器类型时，拖拽组件时目标为容器类型组件时会默认向容器中插入当前拖拽的组件，若想调整位置则需要先将容器类型组件锁定，此时拖拽组件时就会同1，2的情况

**组件编辑**：双击选中组件时右侧设置器栏则会出现属性、样式、事件（暂未想好实现效果），进行组件的编辑，其中css样式编辑完成后需要点击保存按钮才会进行css样式的保存

**调整组件位置**：当点击快捷键*ctrl m*时再进行拖拽组件操作时，则不会调整组件与其他组件的位置关系，默认会为当前组件增加*margin-top、margin-left*，当组件css样式设置position时，拖拽组件则调整的时*left、top*当前默认调整单位为px

**组件锁定**：选中组件后点击*ctrl l*则会将选中组件锁定当前组件则会增加黄色边框，组件将只可以调整与其他组件的位置，锁定组件不能进行属性样式修改操作，不可以删除，若锁定的为容器组件时则不可以向其中增加新的组件也不可以将其中的组件进行内部的移位和拖拽出去，

**粘贴|复制|剪切**：选中组件后可以通过对应的快捷键进行相关操作，然后点击容器或者画布，则会将组件复制到对应位置

**容器组件**：容器组件为在封装样式组件时使用了*container*的组件，其支持容器组件的无限嵌套，当父组件拖向子组件时会无事发生

**组件删除**：选中组件后点击*ctrl d*或者点击Backspace则会删除所选中的组件

## **1.4组件的相关功能**

**封装组件规则**：封装组件时需要在props中添加（propValue、isPreview、EcVue），

1.propValue获取到的是注册组件时编辑的所有配置信息，当想要进行封装组件的行为控制时就可以在propValue.attributes中获取对应的字段进行控制，

2.isPreview用于控制页面组件与预览时不同的行为

3.EcVue用于获取页面配置中属性与方法相关的内容

**组件中属性绑定示例：**

    input:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['value'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['value'],value,this.EcVue)
      }
    }

**事件绑定：**click为组件的事件名，enable为是否启用事件

```
click(val){
      if(execMethod(this.propValue.events['click'])){
        this.EcVue[this.propValue.events['click'].method](val)
      }
}
```



# 2.后续目标功能

1.接口的配置api接口跳转地址等

3.进行组件的放大缩小操作

