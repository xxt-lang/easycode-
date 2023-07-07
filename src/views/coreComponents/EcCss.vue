<template>
  <div v-html="`<style>${CSS}</style>`"></div>
</template>

<script>
export default {
  name: "EcCss",
  props:{
    CSS:{
      type:String,
      default:""
    }
  }
}
</script>

<style scoped>

</style>
