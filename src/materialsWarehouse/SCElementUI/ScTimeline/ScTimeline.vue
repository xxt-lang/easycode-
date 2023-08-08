<template>
    <el-timeline>
      <el-timeline-item
          v-for="item in propValue.children"
          :key="item.id"
          v-bind="item.attributes"
      >
        <div :class="{elCol:!isPreview}" v-container="{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
          <Container
              key="editorContainer"
              :children="item.children"
              :isPreview="isPreview"
              :EcVue="EcVue"
              :lock = "propValue.status.lock"
          ></Container>
        </div>
      </el-timeline-item>
    </el-timeline>
</template>
<script>
import Container from "@/views/coreComponents/Container.vue";
export default {
  name: "ScTimeline",
  components: {
    Container
  },
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue:{
      type:Function,
      default:()=>{}
    },
    isPreview: {
      type: Boolean,
      default: false
    },
  },

  methods: {
  }
}
</script>
<style scoped>
.elCol {
  border-color: #f2f2f2;
  border-style: solid;
  min-height: 50px;
}
</style>
