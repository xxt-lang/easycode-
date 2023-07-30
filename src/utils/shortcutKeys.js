import {CommonStatusStore} from '@/stores/counter'
import {copy, deleteSelectComponent, lockComponent, savePage, shear, stickup,redo,undo,upSelectComponent,setterComponent} from "./core";
//ctrl alt shift [小写字母]
const keyDowns = {
  "alt e": {
    label: '设置组件',
    func: function () {
      setterComponent()
    }
  },
  "alt t": {
    label: '向上选择组件',
    func: function () {
      upSelectComponent()
    }
  },
  "ctrl c":{
    label:"复制",
    func:function(){
      copy()
    }
  },
  "ctrl x":{
    label:"剪切",
    func:function(){
      shear()
    }
  },
  "ctrl v":{
    label:"粘贴",
    func:function(){
      stickup()
    }
  },
  "ctrl m":{
    label: '调整margin',
    func: function () {
      CommonStatusStore().editMargin = !CommonStatusStore().editMargin
      CommonStatusStore().editPosition = false
    }
  },
  "ctrl p":{
    label: '调整position',
    func: function () {
      CommonStatusStore().editPosition = !CommonStatusStore().editPosition
      CommonStatusStore().editMargin = false
    }
  },
  "ctrl d":{
    label: '删除',
    func: function () {
      deleteSelectComponent()
    }
  },
  "Backspace":{
    label: '删除',
    func: function () {
      deleteSelectComponent()
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
    global:true,
    func: function(){
      savePage()
    }
  },
  "ctrl z":{
    label: '撤销',
    func: function (){
      undo()
    }
  },
  "ctrl y":{
    label: '回退',
    func: function (){
      redo()
    }
  },
}
const keyDetails = [
  {key:'ctrl t',detail:'向上选择组件'},
  {key:'ctrl m',detail:'调整margin'},
  {key:'ctrl p',detail:'调整position'},
  {key:'ctrl d',detail:'删除'},
  {key:'Backspace',detail:'删除'},
  {key:'ctrl l',detail:'锁定组件'},
  {key:'ctrl c',detail:'复制'},
  {key:'ctrl v',detail:'粘贴'},
  {key:'ctrl x',detail:'剪切'},
  {key:'ctrl s',detail:'保存'},
  {key:'ctrl z',detail:'撤销'},
  {key:'ctrl y',detail:'回退'},
]
export function getKeyDetails(){
  return keyDetails
}

export function initShortKeyDown() {
  if (keyDowns) {
    window.onkeydown = (e)=>{
      console.log(e)
        const nowKey = analysisKey(e)
        if(keyDowns.hasOwnProperty(nowKey)){
          if(!keyDowns[nowKey].global){
            if(e.target.localName !== "body") return
          }
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



