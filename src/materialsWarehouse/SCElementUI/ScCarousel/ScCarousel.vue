<template>
  <el-carousel
      v-bind = "propValue.attributes"
      @change="changeMethod"
      ref="carouselRef"
  >
    <el-carousel-item
        v-for = "item in propValue.children"
        :key="item.id"
        v-bind="item.attributes"
        v-container="{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}"
    >
      <Container
          key="editorContainer"
          :children="item.children"
          :isPreview = "isPreview"
          :EcVue = "EcVue"
      ></Container>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Container from "@/views/coreComponents/Container.vue";
import {execMethod,bindRefs} from "@/utils/core";
export default {
  name: "ScCarousel",
  components:{
    Container
  },
  props:{
    propValue: {
      type: Object,
      default: function () {
        return {}
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
    bindRefs(this.propValue.attributes,this.$refs['carouselRef'],'carouselRef',this.EcVue)
  },
  methods:{
    changeMethod(v){
      if(execMethod(this.propValue.events['change'])){
        this.EcVue[this.propValue.events['change'].method](v)
      }
    }
  }
}
</script>

<style scoped>
.el-carousel__item{
  background-color: #d3dce6;
}
</style>
