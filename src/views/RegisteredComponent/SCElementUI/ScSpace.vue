<template>
    <el-space
        :alignment = "propValue.attributes['alignment']"
        :direction = "propValue.attributes['direction']"
        :prefix-cls = "propValue.attributes['prefix-cls']"
        :spacer = "propValue.attributes['spacer']"
        :size = "propValue.attributes['size']"
        :wrap = "propValue.attributes['wrap']"
        :fill = "propValue.attributes['fill']"
        :fill-ratio = "propValue.attributes['fillRatio']"
    >
      <Container
          v-for = "(item,index) in propValue.children" :key="item.id"
          key="editorContainer"
          :container="{
              id:item.id,
              featherId:propValue.featherId,
              children:item.children,
              componentId:propValue.id,
              status:propValue.status}"
          :container-styles = "item.styles"
          :isPreview = "isPreview"
          :EcVue = "EcVue"
      ></Container>
    </el-space>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
export default {
  name: "ScSpace",
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
  methods:{
  }
}
</script>

<style scoped>

</style>
