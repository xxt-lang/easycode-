<template>
  <div>
    <div ref="editContainer" class="code-editor" :style="{height:height}">
    </div>
  </div>

</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted,watch,toRaw } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
self.MonacoEnvironment = {
  getWorker(_,label) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (['css', 'scss', 'less'].includes(label)) {
      return new CssWorker()
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new TsWorker()
    }
  }
}

export default {
  name: "VMonacoEditor",
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
    minimap:{
      type:Boolean,
      default:false
    },
    lineNumbers:{
      type:Boolean,
      default:false
    },
    folding:{
      type:Boolean,
      default:false
    }
  } ,
  emits:['update:modelValue'],
  setup(props, { emit }) {
    let monacoEditor = null;
    const { proxy } = getCurrentInstance();
    watch(
        () => props.modelValue,
        (val,oldVal) => {
          // 防止改变编辑器内容时光标重定向
          if (monacoEditor!=null && val !== monacoEditor?.getValue()) {
            monacoEditor.setValue(val);
            monacoEditor.trigger('anything', 'editor.action.formatDocument');
          }
        },
    );
    onMounted(() => {
      monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
        value:props.modelValue,
        readOnly: false,
        language: props.language,
        theme: 'vs',
        selectOnLineNumbers: true,
        renderSideBySide: true,
        automaticLayout:true,
        minimap: { // 关闭小地图
          enabled: props.minimap,
        },
        lineNumbers: props.lineNumbers?'on':'off', // 隐藏控制行号
        folding: props.folding,
      });
      // 监听值变化
      monacoEditor.onDidChangeModelContent(() => {
        const currenValue = monacoEditor.getValue();
        emit('update:modelValue', currenValue);
      });
    });
    onUnmounted(()=>{
      monacoEditor.dispose()
    })
  },
}
</script>

<style scoped>
</style>
