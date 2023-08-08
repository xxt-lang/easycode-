<template>
<div class="borderShape" :style="shapeStyles">

</div>
</template>

<script>
export default {
  name: "ShapeBorder",
  props:{
    shapeStyles:{
      type:Object,
      default:()=>{return {width:'0px',height:'0px',transform: 'translate3d(0px, 0px, 0px)'}}
    }
  }
}
</script>

<style scoped>
.borderShape{
  display: inline-flex;
  position: absolute;
  z-index: 1001;
}
</style>
