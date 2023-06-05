<template>
  <el-input
            :style="propValue.styles"
            v-model="input"
            :placeholder="propValue.attributes.placeholder"
            :type="propValue.attributes.type"/>
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
