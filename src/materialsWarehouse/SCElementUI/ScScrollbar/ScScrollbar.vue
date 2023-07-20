<template>
  <el-scrollbar
      v-bind="propValue.attributes"
      ref="scrollbarRef"
      @scroll = "scroll"
  >
    <div ref="innerRef"
         v-container="propValue"
          :style="{'background-color': '#c6e2ff',height: propValue.attributes['height'],padding: '5px'}">
      <Container
          :children="propValue.children"
          :isPreview = "isPreview"
          :EcVue = "EcVue"
          :lock = "propValue.status.lock"
      ></Container>
    </div>
  </el-scrollbar>
</template>

<script>
import Container from "@/views/coreComponents/Container.vue";
import {bindRefs,execMethod} from "@/utils/core";
export default {
  name: "ScScrollbar",
  components:{Container},
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
  mounted() {
    bindRefs(this.propValue.attributes,this.$refs['scrollbarRef'],'scrollbarRef',this.EcVue)
    bindRefs(this.propValue.attributes,this.$refs['innerRef'],'innerRef',this.EcVue)
  },
  methods:{
    scroll(scrollLeft,scrollTop){
      execMethod(this.propValue.events['scroll'],this.EcVue)(scrollLeft,scrollTop)
    }
  }
}
</script>

<style scoped>
.el-slider {
  margin-top: 20px;
}
</style>
