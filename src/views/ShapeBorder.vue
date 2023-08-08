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
      default:()=>{return {width:'32px',height:'50px',transform: 'translate3d(50px, 50px, 0px)'}}
    }
  }
}
</script>

<style scoped>
.borderShape{
  outline:2px solid #59c7f9;
  display: inline-flex;
  position: absolute;
  z-index: 1001;
}
</style>
