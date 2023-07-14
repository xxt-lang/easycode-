<template>
  <el-color-picker v-model="colorValue"
                   :predefine="predefineValue"
                   v-bind="propValue.attributes"
                   @change="changeMethod"
                   @active-change="activeChangeMethod"
                   ref="colorRef"
  ></el-color-picker>
</template>

<script>
import {getPageData, setPageData, execMethod, bindRefs} from "@/utils/core";

export default {
  name: "ScColorPicker",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      },
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    }
  },
  computed: {
    colorValue: {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['colorValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['colorValue'], value, this.EcVue)
      }
    },
    predefineValue: {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['predefineValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['predefineValue'], value, this.EcVue)
      }
    },
  },
  mounted() {
    bindRefs(this.propValue.attributes, this.$refs['colorRef'], 'colorRef', this.EcVue)
  },
  methods: {
    changeMethod(val) {
      execMethod(this.propValue.events['change'], this.EcVue)(val)
    },
    activeChangeMethod(val) {
      execMethod(this.propValue.events['active-change'], this.EcVue)(val)
    }
  }
}
</script>

<style scoped>

</style>
