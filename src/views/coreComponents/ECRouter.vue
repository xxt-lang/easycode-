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
import {mapActions} from "pinia";
import {PagesStore} from "../../stores/counter";
import eventBus from "../../utils/eventBus";
import {getLocalStorage} from "../../utils/core";

export default {
  name: "ECRouter",
  props:{
    isPreview:{
      type: Boolean,
      default:false
    }
  },
  data(){
    return {
      page:[],
      isPage:false,
      message:"暂无相关页面请检查地址是否正确"
    }
  },
  created() {
    if(this.isPreview){
      const pages = getLocalStorage()
      eventBus.on("router",(param)=>{
        let page = pages[pages.findIndex((data)=>data.pageName === param.path)]
        if(page){
          this.isPage = true
          this.page = page.children
        }else{
          this.isPage = false
        }
      })
    }else{
      eventBus.on("router",(param)=>{
        let page = this.getRouterPage(param.path)
        if(page){
          this.isPage = true
          this.page = page.children
        }else{
          this.isPage = false
        }
      })
    }


  },
  methods:{
    ...mapActions(PagesStore,['getRouterPage'])
  }
}
</script>

<style scoped>

</style>
