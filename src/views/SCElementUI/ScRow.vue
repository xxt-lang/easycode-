<template>
  <el-row :style="getComponentStyle(isPreview,propValue.styles)"
  :justify="propValue.attributes['justify']"
  :gutter="propValue.attributes['gutter']" >
    <el-col v-for = "(item,index) in propValue.children" :key="item.id"
            :span="propValue.attributes['col'][index]['span'] "
            :offset="propValue.attributes['col'][index]['offset']" >
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
    ></Container></el-col>
  </el-row>
</template>

<script>
import Container from "../coreComponents/Container.vue";
import {getComponentStyle} from "../../utils/core";
export default {
  name: "ScRow",
  components:{
    Container
  },
  props: {
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
  },
  data(){
    return {
      containerStyles:{}
    }
  },
  methods:{
    getComponentStyle
  }
}
</script>

<style scoped>

</style>
