<template>
  <div>
    <div ref="aceContainer" class="code-editor" :style="{height:height}"></div>
  </div>

</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted,watch} from 'vue';
import {formatText} from "@/utils/core";

import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/mode/css'

import {setAceCompleteData} from "@/utils/core";
import {registryConstantOptions} from "@/utils/registered/registryConstant";
import {registryMethodsOptions} from "@/utils/registered/registeredMethods";
export default {
  name: "AceEditor",
  props:{
    modelValue:{
      type:String,
      default:''
    },
    language:{
      type:String,
      default:'javascript'
    },
    height:{
      type:String,
      default:'85vh'
    },
  } ,
  emits:['update:modelValue'],
  setup(props, { emit }) {
    let editor = null
    const { proxy } = getCurrentInstance();
    watch(
        () => props.modelValue,
        (val,oldVal) => {
          // 防止改变编辑器内容时光标重定向
          if (editor!=null && val !== editor?.getValue()) {
            formatText(val).then(data=>{
              editor.setValue(data);
              editor.selection.selectTo(0,1)
            })
          }
        },
    );
    setAceCompleteData(registryConstantOptions)
    setAceCompleteData(registryMethodsOptions)
    onMounted(() => {
      editor = ace.edit(proxy.$refs.aceContainer)
      editor.getSession().setMode(props.language === 'javascript'?'ace/mode/javascript':'ace/mode/css')
      editor.setOptions({
        // 默认:false
        wrap: true, // 换行
        autoScrollEditorIntoView: false, // 自动滚动编辑器视图
        enableLiveAutocompletion: true, // 智能补全
        enableMultiselect:false
      })
      if(props.modelValue){
        formatText(props.modelValue,props.language).then(data=>{
          editor.setValue(data)
          editor.selection.selectTo(0,1)
        })
      }
      editor.getSession().on('change', function() {
        emit('update:modelValue', editor.getValue())
      })
    });
    // onUnmounted(()=>{
    // })
  },
}
</script>

<style scoped>
</style>
