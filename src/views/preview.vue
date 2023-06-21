<template>
  <div>
    <div v-if="isPage">
      <component
          v-for="(item,index) in page"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
      />
    </div>
    <div v-else>
      {{message}}
    </div>
  </div>
</template>

<script>
import {getLocalStorage} from "../utils/core";

export default {
  name: "preview",
  created() {
    if(this.$route.query.page === -1){
      this.message = "请先选择页面"
    }else{
      let localPage = getLocalStorage()
      if(localPage.length<=0){
        this.message = "请先创建页面"
      }else{
        this.page = localPage[this.$route.query.page].children
        this.isPage = true
      }
    }
  },
  data(){
    return {
      page:[],
      isPage:false,
      message:""
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
