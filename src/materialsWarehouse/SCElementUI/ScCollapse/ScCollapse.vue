<template>
  <el-collapse
      v-bind="propValue.attributes"
      v-model="modelValue"
      @change="changeMethod"
  >
    <el-collapse-item
        v-for="(item,index) in propValue.children"
        :key="item.id"
        v-bind="propValue.attributes['collapse-item'][index]"
    >
      <div :class="{collapseItemContent:!isPreview}"
           v-container="{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
        <Container
            :children="item.children"
            :isPreview="isPreview"
            :EcVue="EcVue"
            :lock="propValue.status.lock"
        ></Container>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";
import Container from "@/views/coreComponents/Container.vue";

export default {
  name: "ScCollapse",
  components: {
    Container
  },
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    },
    isPreview: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    "modelValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['modelValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['modelValue'], value, this.EcVue)
      }
    }
  },

  methods: {
    changeMethod(val) {
      if (execMethod(this.propValue.events["change"], this.EcVue)) {
        this.EcVue[this.propValue.events["change"]](val)
      }
    },
  }
}
</script>
<style scoped>
.collapseItemContent{
  min-height: 32px;
  border-color: #c6e2ff;
  border-style: solid;
}
</style>
