<template>
  <el-switch
      v-bind="propValue.attributes"
      v-model="modelValue"
      :active-value="activeValue"
      :inactive-value="inactiveValue"
      :before-change = "beforeChange"
      @change="changeMethod"

  >
  </el-Switch>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";


export default {
  name: "ScSwitch",
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
    },
    "activeValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['active-value-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['active-value-bindValue'], value, this.EcVue)
      }
    },
    "inactiveValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['inactive-value-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['inactive-value-bindValue'], value, this.EcVue)
      }
    },
    "beforeChange": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['before-change-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['before-change-bindValue'], value, this.EcVue)
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

</style>
