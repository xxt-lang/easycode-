<template>
    <el-button
        v-bind="propValue.attributes"
        @click = "click"
        >
      {{ propValue.attributes.label }}
    </el-button>
</template>
<script>
import {execMethod} from "@/utils/core";


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
      execMethod(this.propValue.events['click'],this.EcVue)()
    }
  }
}
</script>
<style scoped>

</style>
