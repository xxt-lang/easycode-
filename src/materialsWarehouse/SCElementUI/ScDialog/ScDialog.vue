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
  methods: {
    // openMethod(val, array) {
    //   if (execMethod(this.propValue.events["open"], this.EcVue)) {
    //     this.EcVue[this.propValue.events["open"]](val, array)
    //   }
    // },
    // openedMethod(val, array) {
    //   if (execMethod(this.propValue.events["opened"], this.EcVue)) {
    //     this.EcVue[this.propValue.events["opened"]](val, array)
    //   }
    // },
    // closeMethod(val, array) {
    //   if (execMethod(this.propValue.events["close"], this.EcVue)) {
    //     this.EcVue[this.propValue.events["close"]](val, array)
    //   }
    // },
    // closedMethod(val, array) {
    //   if (execMethod(this.propValue.events["closed"], this.EcVue)) {
    //     this.EcVue[this.propValue.events["closed"]](val, array)
    //   }
    // },
    // openAutoFocusMethod(val, array) {
    //   if (execMethod(this.propValue.events["open-auto-focus"], this.EcVue)) {
    //     this.EcVue[this.propValue.events["open-auto-focus"]](val, array)
    //   }
    // },
    // closeAutoFocusMethod(val, array) {
    //   if (execMethod(this.propValue.events["close-auto-focus"], this.EcVue)) {
    //     this.EcVue[this.propValue.events["close-auto-focus"]](val, array)
    //   }
    },
}
</script>
<style scoped>
:deep(.el-overlay-dialog){
  position: absolute !important;
}
:deep(.el-overlay){
  position: absolute !important;
}
</style>
