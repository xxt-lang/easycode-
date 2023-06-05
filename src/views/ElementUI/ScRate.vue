<template>
  <el-rate v-model="propValue.attributes.value" :colors="propValue.attributes.colors"/>
</template>

<script>
import {ElRate} from 'element-plus'

export default {
  name: "ScRate",
  components: {ElRate},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
