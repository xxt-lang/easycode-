<template>
    <el-rate
        v-model="value"
        :max = "propValue.attributes['max']"
        :size = "propValue.attributes['size']"
        :disabled = "propValue.attributes['disabled']"
        :allow-half = "propValue.attributes['allow-half']"
        :low-threshold = "propValue.attributes['lowThreshold']"
        :high-threshold = "propValue.attributes['highThreshold']"
        :colors = "JSON.parse(propValue.attributes['colors'])"
        :void-color = "propValue.attributes['voidColor']"
        :disabled-void-color = "propValue.attributes['disabledVoidColor']"
        :icons="JSON.parse(propValue.attributes['icons'])"
        :void-icon = "propValue.attributes['void-icon']"
        :disabled-void-icon = "propValue.attributes['disabledVoidIcon']"
        :show-text="propValue.attributes['showText']"
        :show-score = "propValue.attributes['showScore']"
        :text-color = "propValue.attributes['textColor']"
        :texts = "JSON.parse(propValue.attributes['texts'])"
        :score-template = "propValue.attributes['scoreTemplate']"
        :clearable = "propValue.attributes['clearable']"
        @change = "change"
    />
</template>

<script>
import {execMethod, getPageData, setPageData} from "../../../utils/core";

export default {
  name: "ScRate",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  computed:{
    input:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['value'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['value'],value,this.EcVue)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    change(){
      execMethod('change',this.propValue.events,this.EcVue)
    }
  }
}
</script>

<style scoped>

</style>
