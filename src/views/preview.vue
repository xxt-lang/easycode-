<template>
    <div >
      <component
          v-for="(item,index) in getStore('PageComponentsStore').pageComponents"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
      />
    </div>
</template>

<script>
import {getStore} from "../utils/core";

export default {
  name: "preview",
  methods:{
    getStore
  }
}
</script>

<style scoped>
</style>
