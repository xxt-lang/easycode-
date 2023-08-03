<template>
  <el-calendar
      v-model="modelValue"
      :range="rangeBindValue"
  >
  </el-Calendar>
</template>
<script>
import {getPageData, setPageData} from "@/utils/core";
export default {
  name: "ScCalendar",
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
        return getPageData(this.propValue.attributes['modelValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['modelValue'], value, this.EcVue)
      }
    },
    "rangeBindValue": {
      get() {
        return getPageData(this.propValue.attributes['range-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['range-bindValue'], value, this.EcVue)
      }
    }
  },
}
</script>
<style scoped>

</style>
