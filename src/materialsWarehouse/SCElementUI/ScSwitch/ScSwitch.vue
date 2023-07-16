<template>
<el-switch
    v-model="value"
    v-bind="propValue.attributes"

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
