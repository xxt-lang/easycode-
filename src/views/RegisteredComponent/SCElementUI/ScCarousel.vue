<template>
  <el-carousel
      v-bind = "propValue.attributes"
  >
    <el-carousel-item
        v-for = "(item,index) in propValue.children"
        :key="item.id"
        v-container="{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}"
    >
      <Container
          key="editorContainer"
          :children="item.children"
          :isPreview = "isPreview"
      ></Container>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
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
  }
}
</script>

<style scoped>
.el-carousel__item{
  background-color: #d3dce6;
}
</style>
