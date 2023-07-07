<template>
    <el-button
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
import {execMethod} from "../../../utils/core";

export default {
  name: "ScButton",
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
  data() {
    return {}
  },
  methods: {
    click(){
      execMethod('click',this.propValue.events,this.EcVue)
    }
  }
}
</script>
<style scoped>

</style>
