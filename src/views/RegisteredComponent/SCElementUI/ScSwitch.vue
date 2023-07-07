<template>
<el-switch
    v-model="value"
    :loading = "propValue.attributes['loading']"
    :disabled = "propValue.attributes['disabled']"
    :size = "propValue.attributes['size']"
    :width = "propValue.attributes['width']"
    :active-text = "propValue.attributes['active-text']"
    :inactive-textt= "propValue.attributes['inactive-textt']"

></el-switch>
</template>

<script>

export default {
  name: "ScSwitch",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {
      value:''
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
