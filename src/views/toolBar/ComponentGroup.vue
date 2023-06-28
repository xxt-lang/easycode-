<template>
  <div  @dragstart="draggableStart" @dragover="draggableOver($event)">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="item.label" :name="item.UI" v-for="(item,index) in componentListStore.materials" :key="index">
        <div v-for="sitem in item.components" >
          <el-divider>
            <span class = "group">{{sitem.group}}</span>
          </el-divider>
          <div class = "componentList">
            <div
                class="item"
                v-for="(titem, index) in sitem.components "
                draggable="true"
                :data-index="titem.componentIndex"
                :key="index">
                <span style="padding: 5px;">
                  {{titem.label}}
                </span>
            </div>
          </div>

        </div>
      </el-tab-pane>
    </el-tabs>
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
  data(){
    return {
      activeName:'element'
    }
  },
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
  max-height: 95%;
  min-height: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(90px, auto);
}
.componentList .item {
  background-color: white;
  border-radius: 5px;
  border-style: solid;
  text-align: center;
  border-width: 1px;
  border-color: #c6e2ff;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  transition: color .5s;
}
 .group{
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 24px;
}
</style>
