<template>
  <span>
      <el-time-picker
          v-bind="propValue.attributes"
          v-model="modelValue"
          :disabled-seconds="disabledSecondsBindValue"
          :disabled-minutes="disabledMinutesBindValue"
          :disabled-hours="disabledHoursBindValue"
          @change="changeMethod"
          @blur="blurMethod"
          @focus="focusMethod"
          @visiblechange="visiblechangeMethod"
      >
  </el-time-picker>
  </span>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";

export default {
  name: "ScTimePicker",
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
    "disabledHoursBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['disabled-hours-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['disabled-hours-bindValue'], value, this.EcVue)
      }
    },
    "disabledMinutesBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['disabled-minutes-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['disabled-minutes-bindValue'], value, this.EcVue)
      }
    },
    "disabledSecondsBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['disabled-seconds-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['disabled-seconds-bindValue'], value, this.EcVue)
      }
    }
  },
  methods: {
    changeMethod(val) {
      if (execMethod(this.propValue.events["change"], this.EcVue)) {
        this.EcVue[this.propValue.events["change"].method](val)
      }
    },

    blurMethod(e) {
      if (execMethod(this.propValue.events["blur"], this.EcVue)) {
        this.EcVue[this.propValue.events["blur"].method](e)
      }
    },

    focusMethod(e) {
      if (execMethod(this.propValue.events["focus"], this.EcVue)) {
        this.EcVue[this.propValue.events["focus"].method](e)
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
