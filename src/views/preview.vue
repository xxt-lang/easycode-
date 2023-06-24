<template>
  <div>
    <div v-if="page.isPage">
      <component
          v-for="(item,index) in page.page"
          :is="item.component"
          :key="index"
          :propValue="item"
          isPreview
      />
    </div>
    <div v-else>
      {{page.message}}
    </div>
  </div>
</template>

<script>
import { previewPage} from "../utils/core";

export default {
  name: "preview",
  created() {
    this.page = previewPage(this.$route.query.page)
  },
  data(){
    return {
      page:{
        page:[],
        isPage:false,
        message:""
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
