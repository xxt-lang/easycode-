<template>
  <div>
    <div ref="aceContainer" class="code-editor" :style="{height:height}">
    </div>
  </div>

</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted,watch} from 'vue';

import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/mode/css'
import 'brace/ext/language_tools'
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
            editor.setValue(val);
            editor.selection.selectTo(0,1)
          }
        },
    );
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
        editor.setValue(props.modelValue)
      }
      editor.selection.selectTo(0,1)
      editor.getSession().on('change', function() {
        editor.selection.selectTo(0,1)
        emit('update:modelValue', editor.getValue())
      })
    });
    onUnmounted(()=>{
    })
  },
}
</script>

<style scoped>
</style>
