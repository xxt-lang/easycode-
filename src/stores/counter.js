import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {deepClone, uuid} from "../utils/tool";
import Stack from "../utils/Stack";
// 粘贴板，选择板
export const SimpleStore = defineStore('SimpleStoreMain', {
  state: () => ({
    copyPlate:[],//剪切板/复制 数据
    selectPlate:[]// 选中数据
  }),
  actions:{
    setCopyPlate( copyPlate ){
      this.copyPlate = copyPlate
    },
    setSelectPlate(component){
      this.selectPlate.push(component)
    },
    getSelectPlate(){
      return this.selectPlate;
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
      this.mouseEvent = null
      this.mouseEvent = mouseEvent
    }
  },
})

// 注册的组件列表
export const ComponentListStore = defineStore('ComponentListMain', {
  state: () =>({
    materials:[],// 拖拽时的导航栏
    componentList:[], // 携带数据结构的组件
    componentSetters:[], // 组件设置器的配置
    componentTemplates:{}
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
    pages:[], // 页面page
    nowPage : -1, // 当前选中的页面
    previewPage:{}
  }),
  actions:{
    // 获取路由跳转页面
    getRouterPage(path){
      let index = this.pages.findIndex((data)=>data.pageName === path)
      return this.pages[index]
    },
    // 获取预览页面
    getPreviewPage(){
      return this.previewPage
    },
    // 设置预览页面
    setPreviewPage(previewPage){
      this.previewPage = previewPage
    },

    // 配置整个项目
    setPage( pages ){
      // 默认打开第一个页面
      this.pages = pages
      const undoRedoStore = UndoRedoStore()
      if(pages.length>0){
        this.nowPage = 0
        undoRedoStore.setNowHistory(0,pages[0].id)
        undoRedoStore.addPageHistory(pages[0].id)
      }

    },
    getPage(){
      return this.pages
    },
    // 增加页面
    addPage(from){
      if(from["id"]||from["id"]!=''){
        let index = this.pages.findIndex((data)=>data.id === from["id"])
        this.pages[index].label = from.label
        this.pages[index].pageName = from.pageName
        this.pages[index].css = from.css
      }else{
        from["id"] = uuid()
        this.pages.push(from)
      }

    },
    // 配置当前选中的页面
    clickNowPage(index){
      this.nowPage = index
      const undoRedoStore = UndoRedoStore()
      undoRedoStore.setNowHistory(index,this.pages[index].id)
    },
    // 获取当前选中的页面
    getNowPage(){
      return this.pages[this.nowPage]
    },
    setNowPage(data){
      this.pages[this.nowPage].children = data
    },
    // 删除当前选中的页面
    deletePage(index,pageId){
      const undoRedoStore = UndoRedoStore()
      undoRedoStore.deletePageHistory(index,pageId)
      this.pages.splice(index,1)
    },
    // 获取当前nowPage的值
    getPageIndex(){
      return this.nowPage
    },
    setPageChildren(children){
      this.getNowPage().children = children
    },
  },
})

// 公共状态，
export const CommonStatusStore = defineStore('CommonStatusStoreMain',{
  state: () => ({
    containerLock:false, // false 不锁容器 true 锁住容器
    editMargin:false,
    editPosition:false
  })
})

// 撤销回退数据
export const UndoRedoStore = defineStore('UndoRedoStoreMain',{
  state: () => ({
    historyStore:[],
    nowHistory:{index:-1,id:''},
    max:50
  }),
  actions:{
    // 在删除页面时删除回退记录
    deletePageHistory(index,pageId){
     this.historyStore.splice(this.historyStore.findIndex((data)=>pageId === data.pageId ),1)
    },
    // 增加页面时增加撤销回退记录
    addPageHistory(pageId){
      this.historyStore.push({pageId:pageId,history:new Stack(this.max)})
    },
    // 设置当前的的page
    setNowHistory(index,id){
      this.nowHistory.index = index
      this.nowHistory.id = id
      if(this.historyStore.findIndex((data=>data.pageId === id)) === -1){
        this.addPageHistory(id)
        this.addOperation("init")
      }
    },
    // 展示当前页面历史
    getHistory(){
      if(this.nowHistory.index === -1 || this.historyStore.length<=0){
        return null
      }
      if(this.historyStore[this.nowHistory.index]){
        if(this.historyStore[this.nowHistory.index].pageId !== this.nowHistory.id){
          // 假如数据不对就重新更正
          this.nowHistory.index = this.historyStore.findIndex((data)=>this.nowHistory.id === data.pageId )
        }
      }else{
        this.addPageHistory(this.nowHistory.id)
      }
      return this.historyStore[this.nowHistory.index]
    },

    // 撤销 point--
    undo(){
      const pagesStore = PagesStore()
      pagesStore.setNowPage(this.historyStore[this.nowHistory.index].history.undo())

    },
    // 回退 point++
    redo(){
      const pagesStore = PagesStore()
      pagesStore.setNowPage(this.historyStore[this.nowHistory.index].history.redo())
    },
    // 向当前页面的操作历史中增加数据
    addOperation(el){
      const pagesStore = PagesStore()
      this.getHistory().history.push({method:el,params:deepClone(pagesStore.getNowPage().children)})
    },
    // 撤销或回退到指定位置
    toHistoryByIndex(index){
      const pagesStore = PagesStore()
      pagesStore.setNowPage((this.historyStore[this.nowHistory.index].history.peekByIndex(index)) )
    }
  },
})


