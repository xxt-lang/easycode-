<template>
  <el-link
      :ref="propValue.attributes['ref'] "
      :icon="propValue.attributes['icon']"
      :type="propValue.attributes['type']"
      :underline = "propValue.attributes['underline']"
      :disabled = "propValue.attributes['disabled']"
      :href = "propValue.attributes['href']"
      :target = "propValue.attributes['target']"
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
    isPreview:{
      type: Boolean,
      default:false
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
