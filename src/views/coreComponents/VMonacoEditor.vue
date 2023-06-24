<template>
  <div>
    <div ref="editContainer" class="code-editor">
    </div>
  </div>

</template>

<script>
import { getCurrentInstance, onMounted, watch} from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
self.MonacoEnvironment = {
  getWorker() {
    return new JsonWorker();
  },
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
  props: ['value'],
  emits:['update:value'],
  setup(props, { emit }) {
    let monacoEditor = null;
    const { proxy } = getCurrentInstance();

    watch(
        () => props.value,
        (val) => {
          // 防止改变编辑器内容时光标重定向
          if (val !== monacoEditor?.getValue()) {
            monacoEditor.setValue(val);
          }
        },
    );

    onMounted(() => {
      monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
        value: props.value,
        readOnly: false,
        language: 'json',
        theme: 'vs',
        selectOnLineNumbers: true,
        renderSideBySide: true,
        automaticLayout:true
      });
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
