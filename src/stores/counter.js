import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
// 粘贴板，选择板
export const SimpleStore = defineStore('SimpleStoreMain', {
  state: () => ({
    copyPlate:[],//剪切板/复制 数据
    selectPlate:[]// 选中数据
  }),
  actions:{
    setCopyPlate( copyPlate ){
      this.copyPlate = copyPlate
    }
  },
})

// 鼠标事件
export const MouseEventStore = defineStore('mouseEventMain', {
  state: () => ({
    mouseEvent: {}
  }),
  actions:{
    setMouseEvent( mouseEvent ){
      this.mouseEvent = mouseEvent
    }
  },
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
export const PagesStore = defineStore('PagesStoreMain', {
  state: () => ({
    pages:[{pageName:`page1`,content:[],status:{active:true}}], // 页面page
    nowPage : 0 // 当前选中的页面
  }),
  actions:{
    // 配置整个项目
    setPage( pages ){
      if(pages.length>0){
        this.pages = pages
      }else{
        this.pages = [{pageName:`page1`,content:[]}]
      }


    },
    getPage(){
      return this.pages
    },
    // 增加页面
    addPage(){
      this.pages.push({pageName:`page${this.pages.length}`,content:[]})
    },
    // 配置当前选中的页面
    setNowPage(index){
      this.nowPage = index
    },
    // 获取当前选中的页面
    getNowPage(){
      return this.pages[this.nowPage]
    },
    // 删除当前选中的页面
    deletePage(){
      this.pages.splice(this.nowPage,1)
    },
  },
})

// 公共状态，
export const CommonStatusStore = defineStore('CommonStatusStoreMain',{
  state: () => ({
    containerLock:false, // false 不锁容器 true 锁住容器
    editMargin:false,
  })
})

export const InformationStore = defineStore('InformationStoreMain',{
  state: () => ({
    Id:""
  })
})


