<template>
  <div :style="getComponentStyle(isPreview,propValue.styles)">
    <el-input
        v-model="input"
        :placeholder="propValue.attributes.placeholder"
        :type="propValue.attributes.type"
        :maxlength="propValue.attributes['maxlength']"
        :minlength="propValue.attributes['minlength']"
        :show-word-limit = "propValue.attributes['show-word-limit']"
        :clearable = "propValue.attributes['clearable']"
        :formatter = "propValue.attributes['formatter']"
        :paresr = "propValue.attributes['parser']"
        :show-password = "propValue.attributes['show-password']"
        :disabled = "propValue.attributes['disabled']"
        :size="propValue.attributes['size']"
        :prefix-icon = "propValue.attributes['prefix-icon']"
        :suffix-icon = "propValue.attributes['suffix-icon']"
        :rows="propValue.attributes['rows']"
        :autosize = "propValue.attributes['autosize']"
        :autocomplete = "propValue.attributes['autocomplete']"
        :name = "propValue.attributes['name']"
        :readonly = "propValue.attributes['readonly']"
        :max = "propValue.attributes['max']"
        :min = "propValue.attributes['min']"
        :step ="propValue.attributes['step']"
        :resize ="propValue.attributes['resize']"
        :autofocus = "propValue.attributes['autofocus']"
        :form = "propValue.attributes['form']"
        :label = "propValue.attributes['label']"
        :tabindex ="propValue.attributes['tabindex']"
        :validate-event = "propValue.attributes['validate-event']"
        :input-style = "propValue.attributes['input-style']"
    />
  </div>
</template>
<script>
import {ElInput} from 'element-plus'
import {getComponentStyle, getPageData, setPageData} from "../../../utils/core";
export default {
  name: 'ScInput',
  components: {ElInput},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    }
  },
  computed:{
    input:{
      get(){
        // 绑定事件监听
        return this.getPageData(this.propValue.attributes['value'],this.isPreview)
      },
      set(value){
        setPageData(this.propValue.attributes['value'],value,this.isPreview)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    getPageData,
    getComponentStyle
  }
}
</script>
<style scoped>

</style>
