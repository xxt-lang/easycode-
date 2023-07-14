<template>
  <el-card
      style="min-height:100px"
      :header="propValue.attributes['header']"
      :shadow="propValue.attributes['shadow']"
      v-container = "propValue"
  >
    <Container
        :children="propValue.children"
        :isPreview = "isPreview"
        :EcVue = "EcVue"
    ></Container>
  </el-card>
</template>

<script>
import Container from "@/views/coreComponents/Container.vue";
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
