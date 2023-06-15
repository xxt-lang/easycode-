<template>
<div>
  <p v-for="(item,index) in keyList" :key="item.key"
  :style="{'background-color':index%2===0? '#f0f0f0':'',padding:'5px'}">
    <span>{{item.key}}</span>
    &nbsp;&nbsp;
    <span>{{item.detail}}</span>
  </p>
</div>
</template>

<script>
import {getKeyDetails} from "../../utils/shortcutKeys";

export default {
  name: "ShowKeyDetails",
  data(){
    return {
      keyList:[]
    }
  },
  mounted() {
   this.keyList = getKeyDetails()
  }
}
</script>

<style scoped>

</style>
