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
              status:propValue.status}"
        :container-styles = "propValue.styles"
        :isPreview = "isPreview"
        :EcVue = "EcVue"
    ></Container></el-col>
  </el-row>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
import {getComponentStyle} from "../../../utils/core";
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
    isPreview:{
      type: Boolean,
      default:false
    },
    EcVue:{
      type :Function,
      default :()=>{}
    }
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
