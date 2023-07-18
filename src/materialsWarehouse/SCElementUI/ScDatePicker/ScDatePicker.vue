<template>
  <el-DatePicker
      v-bind="propValue.attributes"
      v-model="datepickerValue"

      @change="changeMethod"

      @blur="blurMethod"

      @focus="focusMethod"

      @calendarchange="calendarChangeMethod"

      @panelchange="panelChangeMethod"

      @visiblechange="visibleChangeMethod"

  >
  </el-DatePicker>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";


export default {
  name: "ScDatePicker",
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
    "datepickerValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes["datepickerValue"], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes["datepickerValue"], value, this.EcVue)
      }
    }
  },


  methods: {

    changeMethod() {
      execMethod(this.propValue.events["change"], this.EcVue)()
    },

    blurMethod() {
      execMethod(this.propValue.events["blur"], this.EcVue)()
    },

    focusMethod() {
      execMethod(this.propValue.events["focus"], this.EcVue)()
    },

    calendarChangeMethod() {
      execMethod(this.propValue.events["calendarChange"], this.EcVue)()
    },

    panelChangeMethod() {
      execMethod(this.propValue.events["panelChange"], this.EcVue)()
    },

    visibleChangeMethod() {
      execMethod(this.propValue.events["visibleChange"], this.EcVue)()
    },

  }
}
</script>
<style scoped>

</style>
