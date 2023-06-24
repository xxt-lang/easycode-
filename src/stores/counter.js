import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {deepClone, uuid} from "../utils/tool";
import Stack from "../utils/Stack";
import {UndoRedo} from "../utils/undoRedo";
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
    pages:[], // 页面page
    nowPage : -1, // 当前选中的页面
  }),
  actions:{
    getRouterPage(path){
      let index = this.pages.findIndex((data)=>data.pageName === path)
      return this.pages[index]
    },
    // 配置整个项目
    setPage( pages ){
      this.pages = pages
    },
    getPage(){
      return this.pages
    },
    // 增加页面
    addPage(from){
      from["id"] = uuid()
      const undoRedoStore = UndoRedoStore()
      undoRedoStore.addPageHistory(from["id"])
      this.pages.push(deepClone(from))
    },
    // 配置当前选中的页面
    setNowPage(index){
      this.nowPage = index
      const undoRedoStore = UndoRedoStore()
      undoRedoStore.setNowHistory(index,this.pages[index].id)
    },
    // 获取当前选中的页面
    getNowPage(){
      return this.pages[this.nowPage]
    },
    // 删除当前选中的页面
    deletePage(){
      const undoRedoStore = UndoRedoStore()
      undoRedoStore.deletePageHistory()
      this.pages.splice(this.nowPage,1)
    },
    // 获取当前nowPage的值
    getPageIndex(){
      return this.nowPage
    },
    setPageChildren(children){
      this.getNowPage().children = children
    },
    getPageData(attribute){
      try {
        if(this.getNowPage().data && this.getNowPage().data[attribute]){
          return this.getNowPage().data[attribute]
        }
      }catch (e){
        console.log(e)
      }
      return null
    }
  },
})

// 公共状态，
export const CommonStatusStore = defineStore('CommonStatusStoreMain',{
  state: () => ({
    containerLock:false, // false 不锁容器 true 锁住容器
    editMargin:false,
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
    deletePageHistory(){
      if(this.historyStore[this.nowHistory.index].pageId !== this.nowHistory.id){
        // 假如数据不对就重新更正
        this.nowHistory.index = this.historyStore.findIndex((data)=>this.nowHistory.id === data.pageId )
      }
     this.historyStore.splice(this.nowHistory.index,1)
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
      }
    },
    // 展示当前页面历史
    getHistory(){
      if(this.nowHistory.index === -1 || this.historyStore.length<=0){
        return null
      }
      if(this.historyStore[this.nowHistory.index].pageId !== this.nowHistory.id){
        // 假如数据不对就重新更正
        this.nowHistory.index = this.historyStore.findIndex((data)=>this.nowHistory.id === data.pageId )
      }
      return this.historyStore[this.nowHistory.index]
    },

    // 撤销 point--
    undo(){
      UndoRedo().undo(this.historyStore[this.nowHistory.index].history.undo())
    },
    // 回退 point++
    redo(){
      UndoRedo().redo(this.historyStore[this.nowHistory.index].history.redo())
    },
    // 向当前页面的操作历史中增加数据
    addOperation(el){
      this.getHistory().history.push(el)
    },
    // 撤销或回退到指定位置
    toHistoryByIndex(index){

    }
  },
})


