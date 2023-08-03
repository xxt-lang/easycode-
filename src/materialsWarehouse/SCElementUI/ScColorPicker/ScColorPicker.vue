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
        return getPageData(this.propValue.attributes['modelValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['modelValue'], value, this.EcVue)
      }
    },
    predefineValue: {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['predefine-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['predefine-bindValue'], value, this.EcVue)
      }
    },
  },
  mounted() {
    bindRefs(this.propValue.attributes, this.$refs['colorRef'], 'colorRef', this.EcVue)
  },
  methods: {
    changeMethod(val) {
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method](val)
      }
    },
    activeChangeMethod(val) {
      if(execMethod(this.propValue.events['active-change'],this.EcVue)){
        this.EcVue[this.propValue.events['active-change'].method](val)
      }
    }
  }
}
</script>

<style scoped>

</style>
