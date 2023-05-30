<template>
  <el-input v-model="input" placeholder="Please input"/>
</template>
<script>
import {ElInput} from 'element-plus'

export default {
  name: 'ScInput',
  components: {ElInput},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {}
}
</script>
<style scoped>

</style>
