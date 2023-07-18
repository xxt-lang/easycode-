<template>
<ECRouter :isPreview="isPreview"></ECRouter>
</template>

<script>
import ECRouter from "@/views/coreComponents/EcRouter.vue";
export default {
  name: "ScRouter",
  components: {ECRouter},
  props:{
    isPreview: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped>

</style>
