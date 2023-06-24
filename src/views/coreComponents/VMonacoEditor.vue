<template>
  <div>
    <div ref="editContainer" class="code-editor">
    </div>
  </div>

</template>

<script>
import { getCurrentInstance, onMounted, watch} from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
self.MonacoEnvironment = {
  getWorker(_,label) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (['css', 'scss', 'less'].includes(label)) {
      return new CssWorker()
    }
    if (['html', 'handlebars', 'razor'].includes(label)) {
      return new HtmlWorker()
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new TsWorker()
    }
  }
}
// // 初始化编辑器的值
// monacoEditor.setValue(`{"key":"value"}`)
//
// // 获取件编辑器的值
// monacoEditor.getValue();
//
// // 注销编辑器实例
// monacoEditor.dispose();

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
    }
  } ,
  emits:['update:modelValue'],
  setup(props, { emit }) {
    let monacoEditor = null;
    const { proxy } = getCurrentInstance();

    watch(
        () => props.modelValue,
        (val) => {
          // 防止改变编辑器内容时光标重定向
          if (val !== monacoEditor?.getValue()) {
            monacoEditor.setValue(val);
          }
        },
    );

    onMounted(() => {
      // monaco.languages.register({ id: 'javascript' });
      // monaco.languages.setMonarchTokensProvider('javascript', javascript);
      monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
        value: props.modelValue,
        readOnly: false,
        language: props.language,
        theme: 'vs',
        selectOnLineNumbers: true,
        renderSideBySide: true,
        automaticLayout:true
      });
      // console.log(monaco.languages.getLanguages().map(function(lang) { return lang.id; }))

      // 监听值变化
      monacoEditor.onDidChangeModelContent(() => {
        const currenValue = monacoEditor.getValue();
        emit('update:value', currenValue);
      });
    });

    return {};
  },
}
</script>

<style scoped>
.code-editor{
  height: 85vh;
}
</style>
