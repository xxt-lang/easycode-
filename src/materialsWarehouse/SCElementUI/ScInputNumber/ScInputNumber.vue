<template>
  <el-input-number
      v-bind="propValue.attributes"
      v-model="modelValue"

      @change="changeMethod"

      @blur="blurMethod"

      @focus="focusMethod"

  >
  </el-input-number>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";


export default {
  name: "ScInputNumber",
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
    }
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
    blurMethod(e) {
      if (execMethod(this.propValue.events["blur"], this.EcVue)) {
        this.EcVue[this.propValue.events["blur"]](e)
      }
    },
    focusMethod(e) {
      if (execMethod(this.propValue.events["focus"], this.EcVue)) {
        this.EcVue[this.propValue.events["focus"]](e)
      }
    },

  }
}
</script>
<style scoped>

</style>
