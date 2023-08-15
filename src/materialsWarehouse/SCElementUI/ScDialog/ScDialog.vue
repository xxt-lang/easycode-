<template>
  <div>
    <el-dialog
        v-bind="propValue.attributes"
        v-model="modelValue"
    >
      <div v-container="propValue" style="min-height: 200px">
        <Container
            :children="propValue.children"
            :isPreview = "isPreview"
            :EcVue="EcVue"
            :lock="propValue.status.lock"
        ></Container>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";
import Container from "@/views/coreComponents/Container.vue";
export default {
  name: "ScDialog",
  components: {Container},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    },
  },
  data(){
    return {
      dialogVisible:true
    }
  },
  computed: {
    "modelValue": {
      get() {
        if(this.propValue.status.active){
          this.propValue.status.activeDialog = true
        }
        return (this.propValue.status.activeDialog && !this.isPreview) || getPageData(this.propValue.attributes['modelValue'], this.EcVue)
      },
      set(value) {
        this.propValue.status.activeDialog = value
        this.propValue.status.active = value
        setPageData(this.propValue.attributes['modelValue'], value, this.EcVue)
      }
    }
  },
}
</script>
<style scoped>
:deep(.el-overlay-dialog){
  position: absolute;
}
:deep(.el-overlay){
  position: absolute;
}
</style>
