<template>
  <el-cascader
      v-bind="propValue.attributes"
      :options="cascaderOptions"
      v-model="cascaderValue"
      @change="changeMethod"
      @expandchange="expandChangeMethod"
      @blur="blurMethod"
      @focus="focusMethod"
      @visiblechange="visibleChangeMethod"
      @removetag="removeTagMethod"
  >
  </el-cascader>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";


export default {
  name: "ScCascader",
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
    cascaderValue: {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes["modelValue"], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes["modelValue"], value, this.EcVue)
      }
    },
    cascaderOptions: {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes["cascaderOptions-value"], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes["cascaderOptions-value"], value, this.EcVue)
      }
    }
  },
  methods: {
    changeMethod() {
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method]()
      }
    },
    expandChangeMethod() {
      if(execMethod(this.propValue.events['expandChange'],this.EcVue)){
        this.EcVue[this.propValue.events['expandChange'].method]()
      }
    },
    blurMethod() {
      if(execMethod(this.propValue.events['blur'],this.EcVue)){
        this.EcVue[this.propValue.events['blur'].method]()
      }
    },
    focusMethod() {
       if(execMethod(this.propValue.events['focus'],this.EcVue)){
         this.EcVue[this.propValue.events['focus'].method]()
       }
    },
    visibleChangeMethod() {
      if(execMethod(this.propValue.events['visibleChange'],this.EcVue)){
        this.EcVue[this.propValue.events['visibleChange'].method]()
      }
    },
    removeTagMethod() {
      if(execMethod(this.propValue.events['removeTag'],this.EcVue)){
        this.EcVue[this.propValue.events['removeTag'].method]()
      }
    },
  }
}
</script>
<style scoped>

</style>
