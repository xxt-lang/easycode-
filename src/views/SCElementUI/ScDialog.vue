<template>
  <div style="position: absolute">
    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
    >
      <span>This is a message</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ScDialog",
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
      dialogVisible:true
    }
  }

}
</script>

<style scoped>

</style>
