<template>
  <div :class="leftToolBarActive?'showToolContent':'hiddenToolContent'">
    <slot></slot>
  </div>
</template>
<script>
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
  z-index: 10000;
  height: calc(100vh - 45px);
  background-color: white;
  left:80px;
  position: absolute;
  border-style: solid;
  border-color: #c6e2ff;
  overflow: auto;
}
.showToolContent{
  z-index: 10000;
  height: calc(100vh - 45px);
  background-color: white;
  left:86px;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-color: #D4D7DE;
  overflow: auto;
}
</style>
