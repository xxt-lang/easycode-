<template>
  <div>
  <el-drawer
      v-model="drawer"
      title="I am the title"
      style="position:absolute"
      :visible.sync="false"
  >
    <span>{{propValue}}</span>
  </el-drawer>
  </div>
</template>

<script>
export default {
  name: "ScDrawer",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    }
  },
  data(){
    return {
      drawer:true
    }
  }
}
</script>

<style scoped>

</style>
