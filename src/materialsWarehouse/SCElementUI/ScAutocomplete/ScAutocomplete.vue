<template>
  <el-autocomplete
      ref="autocompleteRef"
      v-bind="propValue.attributes"


      @select="selectMethod"
      @change="changeMethod"
  >
  </el-autocomplete>
<!--   v-model="autocompleteValue"-->
  <!--      :fetch-suggestions="fetchSuggestionsValue"-->
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
        return getPageData(this.propValue.attributes["autocompleteValue"], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes["autocompleteValue"], value, this.EcVue)
      }
    },
    // fetchSuggestionsValue:{
    //   get() {
    //     // 绑定事件监听
    //     return getPageData(this.propValue.attributes["fetchSuggestionsValue"], this.EcVue)
    //   },
    //   set(value) {
    //     setPageData(this.propValue.attributes["fetchSuggestionsValue"], value, this.EcVue)
    //   }
    // }
  },
  mounted() {
    bindRefs(this.propValue.attributes,this.$refs['autocompleteRef'],'autocompleteRef',this.EcVue)
  },
  methods: {
    selectMethod() {
      execMethod(this.propValue.events["select"], this.EcVue)()
    },
    changeMethod() {
      execMethod(this.propValue.events["change"], this.EcVue)()
    },
  }
}
</script>
<style scoped>

</style>
