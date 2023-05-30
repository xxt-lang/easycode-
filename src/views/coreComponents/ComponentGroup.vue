<template>
  <div class = "componentList" @dragstart="draggableStart" @dragover="draggableOver($event)">
    <div
         class="item"
         v-for="(item, index) in componentListStore.componentList "
         draggable="true"
         :is="item.component"
         :data-index="index"
         :key="index"
         :propValue="item.attribute">
      <span style="align-content:center ">
        {{item.label}}
      </span>

    </div>
  </div>
</template>

<script>
import {ComponentListStore, EditorStore} from '@/stores/counter'
import {draggableStart} from '@/utils/core'

export default {
  name: "ComponentGroup",
  setup() {
    const componentListStore = ComponentListStore()
    const editorStore = EditorStore()
    return {
      componentListStore,
      editorStore
    }
  },
  methods: {
    draggableStart,
    draggableOver(e){
      e.dataTransfer.clearData();
      this.$emit("changeLeftToolBarActive", false)
    }
  }
}
</script>

<style scoped>
.componentList {
  background-color: rgb(136, 136, 128);
  max-height: 100%;
  min-height: 80%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: 40px;
}
.componentList .item {
  margin: 5px;
  background-color: white;
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
}
</style>
