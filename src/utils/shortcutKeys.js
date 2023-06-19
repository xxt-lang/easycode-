import {CommonStatusStore} from '@/stores/counter'
import {deleteComponent, lockComponent, savePage} from "./core";
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
  "Backspace":{
    label: '删除',
    global:true,
    func: function () {
      deleteComponent()
    }
  },
  "ctrl l":{
    label: '锁定组件',
    func: function (){
      lockComponent()
    }
  },
  "ctrl s":{
    label: '保存',
    func: function(){
      savePage()
    }
  }
}
const keyDetails = [
  {key:'ctrl h',detail:'查看历史'},
  {key:'ctrl m',detail:'调整外边距'},
  {key:'ctrl d',detail:'删除'},
  {key:'Backspace',detail:'删除'},
  {key:'ctrl l',detail:'锁定组件'},
  {key:'ctrl s',detail:'保存组件'},
]
export function getKeyDetails(){
  return keyDetails
}

export function initShortKeyDown() {
  if (keyDowns) {
    window.onkeydown = (e)=>{
      if(e.target.id !== "") return
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



