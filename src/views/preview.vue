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
  computed:{
  },
  created() {
    this.page = getLocalStorage()
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
