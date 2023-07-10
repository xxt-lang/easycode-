<template>
  <div>
    <div v-if="isPage">
      <component
          v-for="(item,index) in page.children"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
          :EcVue = "page.EcVue"
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
        page.EcVue = createEcVue(page.ecVueInfo)
      } else {
        page = this.getRouterPage(param.path)
      }
      if (page) {
        debugger
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

</style>
