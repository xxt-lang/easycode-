<template>
  <el-carousel
      :type="propValue.attributes['type']"
      :height="propValue.attributes['height']"
      :initial-index="propValue.attributes['initial-index']"
      :trigger = "propValue.attributes['trigger']"
      :autoplay = "propValue.attributes['autoplay']"
      :interval = "propValue.attributes['interval']"
      :indicator-position = "propValue.attributes['indicator-position']"
      :arrow = "propValue.attributes['arrow']"
      :loop = "propValue.attributes['loop']"
      :direction = "propValue.attributes['direction']"
      :pause-on-hover = "propValue.attributes['pause-on-hover']"
  >
    <el-carousel-item v-for = "(item,index) in propValue.children" :key="item.id">
      <Container
          key="editorContainer"
          :container="{
              id:item.id,
              featherId:propValue.featherId,
              children:item.children,
              componentId:propValue.id,
              index:index,
              status:propValue.status}"
          :container-styles = "propValue.styles"
          :isPreview = "isPreview"
      ></Container>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Container from "../coreComponents/Container.vue";
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
    index:{
      type: Number,
    },
    isPreview:{
      type: Boolean,
      default:false
    },
  }
}
</script>

<style scoped>

</style>
