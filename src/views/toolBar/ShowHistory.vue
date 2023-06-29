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
import {mapActions} from "pinia";
import {UndoRedoStore} from "../../stores/counter";
export default {
  name: "ShowHistory",
  methods:{
    ...mapActions(UndoRedoStore,['getHistory','toHistoryByIndex']),
    clickHistory(index){
      this.toHistoryByIndex(index)
    }
  }
}
</script>

<style scoped>

</style>
