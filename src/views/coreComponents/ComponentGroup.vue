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
      <span style="padding: 5px;">
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
  emits: ['update:leftToolBarActive'],
  methods: {
    draggableStart,
    draggableOver(e){
      e.dataTransfer.clearData();
      this.$emit("update:leftToolBarActive",false)
    }
  }
}
</script>

<style scoped>
.componentList {
  max-height: 100%;
  min-height: 80%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: 40px;
}
.componentList .item {
  margin: 5px;
  background-color: white;
  border-radius: 5px;
  border-style: solid;
  text-align: center;
  border-width: 1px;
  border-color: #c6e2ff;
}
</style>
