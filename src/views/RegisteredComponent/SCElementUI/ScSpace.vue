<template>
    <el-space
        v-bind = "propValue.attributes"
    >
      <div v-for = "(item,index) in propValue.children" :key="item.id" v-container="item">
        <Container

            :children="item.children"
            :isPreview = "isPreview"
            :EcVue = "EcVue"
        ></Container>
      </div>
    </el-space>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
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

</style>
