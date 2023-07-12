<template>
  <el-row
      v-bind="propValue.attributes">
    <el-col
        class="elCol"
        v-for="(item,index) in propValue.children" :key="item.id"
        v-bind="propValue.attributes['col'][index]"
        v-container="{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}"
    >
      <Container
          key="editorContainer"
          :children="item.children"
          :isPreview="isPreview"
          :EcVue="EcVue"
      ></Container>
    </el-col>
  </el-row>
</template>

<script>
import Container from "../../coreComponents/Container.vue";

export default {
  name: "ScRow",
  components: {
    Container
  },
  props: {
    propValue: {
      type: Object,
      default: function () {
        return {}
      }
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      containerStyles: {}
    }
  },
  methods: {}
}
</script>

<style scoped>
.elCol {
  border-style: solid;
  min-height: 50px;
}
</style>
