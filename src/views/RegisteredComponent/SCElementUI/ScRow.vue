<template>
  <el-row
      style="min-height: 100px;background-color: #59c7f9"
  :justify="propValue.attributes['justify']"
  :gutter="propValue.attributes['gutter']" >
    <el-col v-for = "(item,index) in propValue.children" :key="item.id"
            :span="propValue.attributes['col'][index]['span'] "
            :offset="propValue.attributes['col'][index]['offset']"
            v-container = "{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status}"
    >
      <Container
        key="editorContainer"
        :container="{
              id:item.id,
              featherId:propValue.featherId,
              children:item.children,
              componentId:propValue.id,
              status:propValue.status}"
        :isPreview = "isPreview"
        :EcVue = "EcVue"
    ></Container></el-col>
  </el-row>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
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
  }
}
</script>

<style scoped>

</style>
