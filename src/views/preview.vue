<template>
  <div style="height: 100vh">
    <EcCss :CSS = "page.css" v-show="false"></EcCss>
    <div v-if="page.isPage">
      <component
          :class="item.bindClass"
          v-for="(item,index) in page.page"
          :style="item.styles"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
          :EcVue = page.EcVue
      />
    </div>
    <div v-else>
      {{page.message}}
    </div>
  </div>
</template>

<script>
import { previewPage,getComponentStyle} from "../utils/core";
import EcCss from "./coreComponents/EcCss.vue";


export default {
  name: "preview",
  components: {EcCss},
  created() {
    this.page = previewPage(this.$route.query.page)
  },
  data(){
    return {
      page:{
        page:[],
        isPage:false,
        message:""
      },
      css:""
    }
  },
  mounted() {
    this.page.EcVue['mounted']()
  },
  methods:{
    getComponentStyle
  }
}
</script>

<style scoped>
</style>
