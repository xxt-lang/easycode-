<template>
    <el-button
        :class="propValue.attributes['class']"
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
      if(this.propValue.events['click'].enable){
        this.EcVue[this.propValue.events['click'].method]()
      }
    }
  }
}
</script>
<style scoped>

</style>
