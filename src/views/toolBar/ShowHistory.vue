<template>
<div>
  <div v-if = "getHistory() !== null">
    <div v-for="(item,index) in getHistory().history.stack">
      <p :style="{'background-color':getHistory().history.point === index?'yellow':''}" @click="clickHistory(index)">{{item.method}}</p>
    </div>
  </div>
</div>
</template>

<script>
import {redo,undo} from "../../utils/core";
import {mapActions} from "pinia";
import { UndoRedoStore} from "../../stores/counter";
export default {
  name: "ShowHistory",
  methods:{
    ...mapActions(UndoRedoStore,['getHistory']),
    clickHistory(index){
      let length = 0
      if(this.getHistory().history.point >= index){
        length = this.getHistory().history.point - index
        //批量执行撤销操作
        for (let i = 0; i < length; i++) {
          undo()
        }
      }else{
        // 批量执行后退操作
        length = index - this.getHistory().history.point
        //批量执行撤销操作
        for (let i = 0; i < length; i++) {
          redo()
        }
      }
      this.getHistory().history.point = index
    }
  }
}
</script>

<style scoped>

</style>
