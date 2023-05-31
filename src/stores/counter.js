import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
// 粘贴板，选择板
export const SimpleStore = defineStore('SimpleStoreMain', {
  state: () => ({
    shearPlate:[],//剪切板数据
    selectPlate:[]// 选中数据
  })
})

// 鼠标事件
export const MouseEventStore = defineStore('mouseEventMain', {
  state: () => ({
    mouseEvent: {}
  })
})

// 注册的组件列表
export const ComponentListStore = defineStore('ComponentListMain', {
  state: () =>{
    const baseAttribute = {
      featherIndex:-1,
      status:{
        active:false,
        activeContainer:false,
        isHidden:false,
      },// 组件状态 r
    }
    const componentList = [
      {
        component: "scButton",
        label: '默认按钮', // 左侧组件列表中显示的名字
        icon: 'el-icon-edit', // 左侧组件列表中显示的名字
        animations: [], // 动画列表
        events: {}, // 事件列表
        attribute: {
          type: "primary",
          name: "button1"
        },
        style: {
          width: 80,
          height: 33
        },
      },
      {
        component: "ScButton",
        label: '成功按钮',
        event: {},
        attribute: {
          type: "success",
          name: "button1"
        },
        style: {
          width: 80,
          height: 33
        },
      },
      {
        component: "ScInput",
        label: '输入框',
        event: {},
        attribute: {},
        style: {
          width: 192,
          height: 33
        },
      },
      {
        component: "ScCard",
        label: '卡片',
        event: {},
        attribute: {
          value:5,
          colors:['#99A9BF', '#F7BA2A', '#FF9900']
        },
        style: {
          width: 192,
          height: 33
        },
        isContainer:true,
      },
      {
        component: "ScButton",
        label: '成功按钮',
        event: {},
        attribute: {
          type: "success",
          name: "button1"
        },
        style: {
          width: 80,
          height: 33
        },
      },]
    componentList.forEach(item=>{
      Object.keys(baseAttribute).forEach(aItem=>{
        if(item.isContainer){
          item["children"] = []
        }else{
          item["isContainer"] = false //是否为容器组件
        }
        item[aItem] = baseAttribute[aItem]
      })
    })
    return {componentList: componentList}
  }
})

// 编辑器内容
export const EditorStore = defineStore('EditorStoreMain', {
  state: () => ({
    editor:""
  })
})

// 用于获取点击事件是否在画布中
export const EditorStatusStore = defineStore('EditorStatusStoreMain', {
  state: () => ({
    contextmenuData:{
      contextmenuList: [],
      style: {},
      showContextmenu: false,
    }
  })
})


export const PageTagStore = defineStore('PageTagStoreMain', {
  state: () => ({
    pageTags:[],
    selectPage:0
  })
})


export const EditorContainerStore = defineStore('EditorContainerStoreMain', {
  state: () => ({
    isContainer:false
  })
})

// 页面组件列表
export const PageComponentsStore = defineStore('PageComponentsStoreMain', {
  state: () => ({
    pageComponents:[]
  })
})

// 公共状态，开启辅助线
export const CommonStatusStore = defineStore('CommonStatusStoreMain',{
  state: () => ({
  })
})
