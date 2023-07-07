<template>
  <div id="preview">
    <EcCss :CSS = "page.css"></EcCss>
    <div v-if="page.isPage">
      <component
          v-for="(item,index) in page.page"
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
import { previewPage} from "../utils/core";
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
  }
}
</script>

<style scoped>
</style>
