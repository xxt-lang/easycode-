<template>
  <el-scrollbar height="400px" :ref="propValue.attributes['ref']">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
</template>

<script>
export default {
  name: "ScScrollbar",
  props:{
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  mounted:{

  }
}
</script>

<style scoped>

</style>
