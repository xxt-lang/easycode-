<template>
<el-select v-model="value"></el-select>
</template>

<script>
export default {
  name: "ScSelect",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data(){
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
