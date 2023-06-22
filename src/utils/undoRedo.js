import {PagesStore} from "../stores/counter";
import {clearNowPageChildren, deleteComponent,addComponent} from "./core";

export const UndoRedo = (function (){
  // 回退方法列表
  const redoMethods = {
    "addComponent":function (param){
      addComponent(param.target,param.component)
    },
    "deleteComponent":function (param){
      // console.log(param)
      deleteComponent(param.deleteComponents)
    },
    "clearMap":function (param){
      clearNowPageChildren()
    },

  }
  // 撤销方法列表
  const undoMethods = {
    "addComponent":function (param){
      deleteComponent([param.component])
    },
    "deleteComponent":function (param){
      param.deleteComponents.forEach(item=>{
        addComponent({
          elementType : item.component.featherId === "editor" ? "editor":"container",
          elementId : item.component.featherId},
            item.component,
            item.index)
      })
    },
    "clearMap":function (param){
      PagesStore().setPageChildren(param)
    },
  }
return{
  redo(param){
    redoMethods[param.method](param.params)
    // try {
    //   redoMethods[param.method](param.params)
    // }catch (e){
    //   console.log(`${param.method}不存在`)
    // }

  },
  undo(param){
    try {
      undoMethods[param.method](param.params)
    }catch (e){
      console.log(`${param.method}不存在`)
    }
  }
}
})
