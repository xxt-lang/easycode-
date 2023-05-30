<template>
  <div :class="leftToolBarActive?'showToolContent':'hiddenToolContent'">
    <slot></slot>
  </div>
</template>
<script>
import eventBus from "../../utils/eventBus";
export default {
  name: "LeftToolContent",
  props:{
    leftToolBarActive:{
      type: Boolean,
      default: function () {return false}
    }
  },
  mounted() {
  },
  data(){
    return {
      toolContent:"toolContent"
    }
  }
}
</script>

<style scoped>
.hiddenToolContent{
  display: none;
  z-index: 1000;
  height: calc(100vh - 45px);
  background-color: white;
  left:80px;
  position: absolute;
  border-style: solid;
  overflow: auto;
}
.showToolContent{
  z-index: 1000;
  height: calc(100vh - 45px);
  background-color: white;
  left:80px;
  position: absolute;
  border-style: solid;
  overflow: auto;
}
</style>
