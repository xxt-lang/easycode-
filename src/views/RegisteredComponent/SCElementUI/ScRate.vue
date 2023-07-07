<template>
    <el-rate v-model="value" />
</template>

<script>
export default {
  name: "ScRate",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
  },
  data() {
    return {
      value:null
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
