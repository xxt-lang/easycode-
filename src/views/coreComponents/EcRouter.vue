<template>
  <div>
    <div v-if="isPage" :scope = "page.pageName">
      <component
          v-for="(item,index) in page.children"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
          :EcVue = "page.EcVue"
          :class="item.bindClass"
      />
    </div>
    <div v-else class="info">
      {{message}}
    </div>
  </div>
</template>

<script>
import {mapActions} from "pinia";
import {PagesStore} from "../../stores/counter";
import eventBus from "../../utils/eventBus";
import {createEcVue, getLocalStorage} from "../../utils/core";

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
    eventBus.on("router", (param) => {
      let page = null
      if (this.isPreview) {
        const pages = getLocalStorage()
        page = pages[pages.findIndex((data) => data.pageName === param.path)]
        if(page === undefined){
          this.$message({type:"warning",message:param.path+"页面不存在"})
          return
        }
        page.EcVue = createEcVue(page.ecVueInfo)
      } else {
        page = this.getRouterPage(param.path)
      }
      if (page) {
        this.isPage = true
        this.page = page
      } else {
        this.isPage = false
      }
    })
  },
  methods:{
    ...mapActions(PagesStore,['getRouterPage'])
  }
}
</script>

<style scoped>
.info{
  width: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
}
</style>
