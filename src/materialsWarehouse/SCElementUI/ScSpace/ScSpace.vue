<template>
    <el-space v-bind = "propValue.attributes" :class="{scSpace:!isPreview}">
      <div v-for = "item in propValue.children"
           :key="item.id"
           v-container="item"
           :class="{scSpaceContent:!isPreview}">
        <Container
            :children="item.children"
            :isPreview = "isPreview"
            :EcVue = "EcVue"
            :lock = "propValue.status.lock"
        ></Container>
      </div>
    </el-space>
</template>

<script>
import Container from "@/views/coreComponents/Container.vue";
export default {
  name: "ScSpace",
  components:{Container},
  props:{
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.scSpaceContent{
  min-height: 50px;
  min-width: 50px;
  border-color: #f2f2f2;
  border-style: solid;
}
.scSpace{
  border-color: #f2f2f2;
  border-style: solid;
}

</style>
