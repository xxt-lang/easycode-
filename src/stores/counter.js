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
  state: () =>({
    componentList:[],
    componentSetters:[]
  })
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


// 页面组件列表
export const PageComponentsStore = defineStore('PageComponentsStoreMain', {
  state: () => ({
    pageComponents:[]
  })
})

// 公共状态，
export const CommonStatusStore = defineStore('CommonStatusStoreMain',{
  state: () => ({
    containerLock:false // false 不锁容器 true 锁住容器
  })
})

export const InformationStore = defineStore('InformationStoreMain',{
  state: () => ({
    Id:""
  })
})


