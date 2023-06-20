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
import {mapState} from "pinia";
import {PagesStore} from "../stores/counter";

export default {
  name: "preview",
  computed:{
    ...mapState(PagesStore, ['nowPage']),
  },
  created() {
    this.page = getLocalStorage()[this.nowPage].content
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
