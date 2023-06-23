import {PagesStore} from "../stores/counter";
import {clearNowPageChildren, deleteComponent, addComponent, upMouseMoveInfo} from "./core";
import {deepClone} from "./tool";

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
    "stickComponent":function(param){
      param.forEach(item=>{
        addComponent({
              elementType : item.featherId === "editor" ? "editor":"container",
              elementId : item.featherId},
            item)
      })
    },
    "moveComponent":function(param){
      deleteComponent([param.dragObject])
      addComponent({
            elementType : param.target.targetType === "common"?(param.target.targetFeatherId === "editor" ? "editor":"container"):param.target.targetType,
            elementId : param.target.targetType === "common"?param.target.targetFeatherId:param.target.targetId},
          param.dragObject,
          isNaN(param.target.targetIndex)?undefined:param.target.targetIndex)
    }

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
    "stickComponent":function(param){
      deleteComponent(deepClone(param))
    },
    "moveComponent":function(param){
      deleteComponent([param.dragObject])
      addComponent({
            elementType : param.drag.dragFeatherId === "editor" ? "editor":"container",
            elementId : param.drag.dragFeatherId},
          param.dragObject,
          param.drag.dragIndex)
    }
  }
return{
  redo(param){
    try {
      redoMethods[param.method](param.params)
    }catch (e){
      console.log('退无可退了')
    }
  },
  undo(param){
    undoMethods[param.method](param.params)
    // try {
    //   undoMethods[param.method](param.params)
    // }catch (e){
    //   console.log('撤销以到底')
    // }
  }
}
})
