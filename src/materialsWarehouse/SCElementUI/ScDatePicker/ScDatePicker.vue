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
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method]()
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

    calendarChangeMethod() {
      if(execMethod(this.propValue.events['calendarChange'],this.EcVue)){
        this.EcVue[this.propValue.events['calendarChange'].method]()
      }
    },

    panelChangeMethod() {
      if(execMethod(this.propValue.events['panelChange'],this.EcVue)){
        this.EcVue[this.propValue.events['panelChange'].method]()
      }
    },

    visibleChangeMethod() {
      if(execMethod(this.propValue.events['visibleChange'],this.EcVue)){
        this.EcVue[this.propValue.events['visibleChange'].method]()
      }
    },

  }
}
</script>
<style scoped>

</style>
