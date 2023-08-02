<template>
  <el-transfer
      v-bind="propValue.attributes"
      v-model="modelValue"
      :data="dataBindValue"
      :filter-method="filterMethodBindValue"
      :titles="titlesBindValue"
      :button-texts="buttonTextsBindValue"
      :left-default-checked="leftDefaultCheckedBindValue"
      :right-default-checked="rightDefaultCheckedBindValue"
      :render-content="renderContentBindValue"
      :format="formatBindValue"
      :props="propsBindValue"
      @change="changeMethod"
      @left-check-change="leftCheckChangeMethod"
      @right-check-change="rightCheckChangeMethod"
  >
  </el-Transfer>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";


export default {
  name: "ScTransfer",
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
    "dataBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['data-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['data-bindValue'], value, this.EcVue)
      }
    },
    "filterMethodBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['filter-method-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['filter-method-bindValue'], value, this.EcVue)
      }
    },
    "titlesBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['titles-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['titles-bindValue'], value, this.EcVue)
      }
    },
    "buttonTextsBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['button-texts-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['button-texts-bindValue'], value, this.EcVue)
      }
    },
    "leftDefaultCheckedBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['left-default-checked-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['left-default-checked-bindValue'], value, this.EcVue)
      }
    },
    "rightDefaultCheckedBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['right-default-checked-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['right-default-checked-bindValue'], value, this.EcVue)
      }
    },
    "renderContentBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['render-content-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['render-content-bindValue'], value, this.EcVue)
      }
    },
    "formatBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['format-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['format-bindValue'], value, this.EcVue)
      }
    },
    "propsBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['props-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['props-bindValue'], value, this.EcVue)
      }
    },
  },
  methods: {
    changeMethod(val, array) {
      if (execMethod(this.propValue.events["change"], this.EcVue)) {
        this.EcVue[this.propValue.events["change"]](val, array)
      }
    },
    leftCheckChangeMethod(array1, array2) {
      if (execMethod(this.propValue.events["left-check-change"], this.EcVue)) {
        this.EcVue[this.propValue.events["left-check-change"]](array1, array2)
      }
    },
    rightCheckChangeMethod(array1, array2) {
      if (execMethod(this.propValue.events["right-check-change"], this.EcVue)) {
        this.EcVue[this.propValue.events["right-check-change"]](array1, array2)
      }
    },

  }
}
</script>
<style scoped>

</style>
