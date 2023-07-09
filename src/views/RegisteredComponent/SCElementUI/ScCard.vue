<template>
  <el-card :header="propValue.attributes['header']" :shadow="propValue.attributes['shadow']">
    <Container
        key="editorContainer"
        :container="{
          id:propValue.id,
          featherId:propValue.featherId,
          children:propValue.children,
          componentId:propValue.id,
          status:propValue.status,}"

        :isPreview = "isPreview"
        :EcVue = "EcVue"
    ></Container>
  </el-card>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
// 样式分为容器上的样式与当前组件的样式
export default {
  name: "ScCard",
  components: {Container},
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
  mounted() {
  },
  methods:{
  }
}
</script>

<style scoped>
::v-deep(.el-card__body) {
  padding: 5px;
}
::v-deep(.el-card__header) {
  padding: 5px;
}
</style>
