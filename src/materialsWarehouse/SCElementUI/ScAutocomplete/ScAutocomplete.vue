<template>
  <el-autocomplete
      ref="autocompleteRef"
      v-bind="propValue.attributes"
      v-model="autocompleteValue"
      @select="selectMethod"
      @change="changeMethod"
  >
  </el-autocomplete>
</template>
<script>
import {getPageData, setPageData, execMethod,bindRefs} from "@/utils/core";
export default {
  name: "ScAutocomplete",
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
    "autocompleteValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes["modelValue"], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes["modelValue"], value, this.EcVue)
      }
    },
  },
  mounted() {
    bindRefs(this.propValue.attributes,this.$refs['autocompleteRef'],'autocompleteRef',this.EcVue)
  },
  methods: {
    selectMethod(v) {
      if(execMethod(this.propValue.events['select'],this.EcVue)){
        this.EcVue[this.propValue.events['select'].method](v)
      }
    },
    changeMethod(v) {
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method](v)
      }
    },
  }
}
</script>
<style scoped>

</style>
