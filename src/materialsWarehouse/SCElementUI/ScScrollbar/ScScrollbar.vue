<template>
  <el-scrollbar
      v-bind="propValue.attributes"
      @scroll = "scroll"
  >
    <div :ref="propValue.attributes['innerRef']" v-container="propValue">
      <Container
          key="editorContainer"
          :children="propValue.children"
          :isPreview = "isPreview"
          :EcVue = "EcVue"
      ></Container>
    </div>
  </el-scrollbar>
</template>

<script>
import Container from "@/views/coreComponents/Container.vue";
import {getComponentStyle} from "@/utils/core";
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
    this.EcVue.$refs[this.propValue.attributes['ref'] ] = this.$refs[this.propValue.attributes['ref'] ]
    this.EcVue.$refs[this.propValue.attributes['innerRef'] ] = this.$refs[this.propValue.attributes['innerRef'] ]
  },
  methods:{
    getComponentStyle,
    scroll(scrollLeft,scrollTop){
      if(this.propValue.events['click'].enable){
        this.EcVue[this.propValue.events['click'].method](scrollLeft,scrollTop)
      }
    }
  }
}
</script>

<style scoped>
.el-slider {
  margin-top: 20px;
}
</style>
