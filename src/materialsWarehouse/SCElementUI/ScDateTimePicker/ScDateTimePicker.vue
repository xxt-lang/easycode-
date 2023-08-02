<template>
  <el-date-picker
      v-bind="propValue.attributes"
      v-model="modelValue"
      :disabled-date-value="disabledDateValue"
      :cell-class-name-value = "cellClassNameValue"
      :default-time = "defaultTimeValue"
      :default-value = "defaultValue"
      @change="changeMethod"
      @blur="blurMethod"
      @focus="focusMethod"
      @calendarchange="calendarchangeMethod"
      @visiblechange="visiblechangeMethod"
  >
  </el-date-picker>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";


export default {
  name: "ScDateTimePicker",
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
    "disabledDateValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['disabled-date-value'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['disabled-date-value'], value, this.EcVue)
      }
    },
    "cellClassNameValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['cell-class-name-value'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['cell-class-name-value'], value, this.EcVue)
      }
    },
    "defaultValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['default-value'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['default-value'], value, this.EcVue)
      }
    },
    "defaultTimeValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['default-time-value'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['default-time-value'], value, this.EcVue)
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

    calendarchangeMethod() {
      if (execMethod(this.propValue.events["calendarchange"], this.EcVue)) {
        this.EcVue[this.propValue.events["calendarchange"]]()
      }
    },

    visiblechangeMethod() {
      if (execMethod(this.propValue.events["visiblechange"], this.EcVue)) {
        this.EcVue[this.propValue.events["visiblechange"]]()
      }
    },

  }
}
</script>
<style scoped>

</style>
