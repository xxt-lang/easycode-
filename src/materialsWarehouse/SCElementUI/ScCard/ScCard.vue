<template>
  <el-card
      :header="propValue.attributes['header']"
      :shadow="propValue.attributes['shadow']"
  >
    <template v-slot:header>
      <div  v-if="propValue.attributes['header-slot']"
            style="min-height: 32px;width: 100%"
            v-container="{id:propValue.children[1].id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
        <Container
            :children="propValue.children[1].children"
            :isPreview = "isPreview"
            :EcVue = "EcVue"
            :lock = "propValue.status.lock"
        ></Container>
      </div>
    </template>
    <div  style="min-height: 100px;width: 100%" v-container="{id:propValue.children[0].id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
      <Container
          :children="propValue.children[0].children"
          :isPreview = "isPreview"
          :EcVue = "EcVue"
          :lock = "propValue.status.lock"
      ></Container>
    </div>

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
