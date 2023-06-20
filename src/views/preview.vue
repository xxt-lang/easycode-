<template>
    <div >
      <component
          v-for="(item,index) in page"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
      />
    </div>
</template>

<script>
import {getLocalStorage} from "../utils/core";

export default {
  name: "preview",
  created() {
    this.page = getLocalStorage()[this.$route.query.page].children
  },
  data(){
    return {
      page:[]
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
