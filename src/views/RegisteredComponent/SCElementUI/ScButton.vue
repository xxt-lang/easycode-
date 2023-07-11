<template>
    <el-button
        v-bind="propValue.attributes"
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
