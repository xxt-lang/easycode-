<template>
    <el-button
        :style="getComponentStyle(isPreview,propValue.styles)"
        :type="propValue.attributes.type"
        :size="propValue.attributes.size"
        :plain="propValue.attributes.plain"
        :round="propValue.attributes.round"
        :disabled="propValue.attributes.disabled"
        :circle="propValue.attributes.circle"
        :loading="propValue.attributes.loading"
        :loading-icon="propValue.attributes['loading-icon']"
        :icon = "propValue.attributes['icon']"
        :autofocus = "propValue.attributes['autofocus']"
        :native-type = "propValue.attributes['native-type']"
        :auto-insert-space = "propValue.attributes['autoInsertSpace']"
        :color="propValue.attributes['color']"
        :dark = "propValue.attributes['dark']"
        @click = "click"
        >
      {{ propValue.attributes.label }}
    </el-button>
</template>
<script>
import {getComponentStyle} from "../../../utils/core";
import {ECVue} from "../../../utils/ECVue";
export default {
  name: "ScButton",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  data() {
    return {}
  },
  methods: {
    getComponentStyle,
    click(){
      if(this.propValue.events['click'].enable){
        this.EcVue[this.propValue.events['click'].method]()
      }
    }
  }
}
</script>
<style scoped>

</style>
