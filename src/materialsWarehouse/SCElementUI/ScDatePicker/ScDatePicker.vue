<template>
  <span>    <el-date-picker
      v-bind="propValue.attributes"
      v-model="datepickerValue"
      @change="changeMethod"
      @blur="blurMethod"
      @focus="focusMethod"
      @calendarchange="calendarChangeMethod"
      @panelchange="panelChangeMethod"
      @visiblechange="visibleChangeMethod"
  >
    </el-date-picker></span>


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
        return getPageData(this.propValue.attributes["modelValue"], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes["modelValue"], value, this.EcVue)
      }
    }
  },


  methods: {

    changeMethod(val) {
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method](val)
      }
    },

    blurMethod(e) {
      if(execMethod(this.propValue.events['blur'],this.EcVue)){
        this.EcVue[this.propValue.events['blur'].method](e)
      }
    },

    focusMethod(e) {
      if(execMethod(this.propValue.events['focus'],this.EcVue)){
        this.EcVue[this.propValue.events['focus'].method](e)
      }
    },

    calendarChangeMethod(val) {
      if(execMethod(this.propValue.events['calendarChange'],this.EcVue)){
        this.EcVue[this.propValue.events['calendarChange'].method](val)
      }
    },

    panelChangeMethod(date, mode, view) {
      if(execMethod(this.propValue.events['panelChange'],this.EcVue)){
        this.EcVue[this.propValue.events['panelChange'].method](date, mode, view)
      }
    },

    visibleChangeMethod(visibility) {
      if(execMethod(this.propValue.events['visibleChange'],this.EcVue)){
        this.EcVue[this.propValue.events['visibleChange'].method](visibility)
      }
    },

  }
}
</script>
<style scoped>

</style>
