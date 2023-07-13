<template>
  <el-link
      v-bind = "propValue.attributes"
      @click="click"
  >{{propValue.attributes['label']}}</el-link>
</template>

<script>
export default {
  name: "ScLink",
  props:{
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  mounted() {
    this.EcVue.$refs[this.propValue.attributes['ref'] ] = this.$refs[this.propValue.attributes['ref'] ]
  },
  methods:{
    click(){
      if(this.propValue.events['click'].enable){
        this.EcVue[this.propValue.events['click'].method]()
      }
    }
  }

}
</script>

<style scoped>

</style>
