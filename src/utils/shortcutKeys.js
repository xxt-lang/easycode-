import {CommonStatusStore} from '@/stores/counter'
import {deleteComponent} from "./core";
//ctrl alt shift [小写字母]
const keyDowns = {
  "ctrl h": {
    label: '查看历史',
    global:false,
    func: function () {
      console.log("查看历史")
    }
  },
  "alt c": {
    label: '容器状态',
    global:true,
    func: function () {
      CommonStatusStore().containerLock = !CommonStatusStore().containerLock
    }
  },
  "ctrl e": {
    label: '编辑元素',
    global:true,
    func: function () {
      CommonStatusStore().editElement = !CommonStatusStore().editElement
    }
  },
  "ctrl m":{
    label: '外边距',
    global:true,
    func: function () {
      CommonStatusStore().editMargin = !CommonStatusStore().editMargin
    }
  },
  "ctrl d":{
    label: '删除',
    global:true,
    func: function () {
      deleteComponent()
    }
  },
}

export function initShortKeyDown() {
  if (keyDowns) {
    window.onkeydown = (e)=>{
        const nowKey = analysisKey(e)
        if(keyDowns.hasOwnProperty(nowKey)){
          e.preventDefault()
          keyDowns[nowKey].func()
        }
    }
  } else {
    throw new Error('无快捷键')
  }
}
// 解析快捷键
function analysisKey(e) {
  return `${e.ctrlKey?'ctrl ':''}${e.altKey?'alt ':''}${e.shiftKey?'shift ':''}${e.key.toLowerCase()?e.key:''}`;
}



