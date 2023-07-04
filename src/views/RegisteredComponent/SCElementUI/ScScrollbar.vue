<template>
  <el-scrollbar :height="propValue.attributes['height']"
                :ref="propValue.attributes['ref']"
                :max-height = "propValue.attributes['max-height']"
                :native = "propValue.attributes['native']"
                :wrap-style = "propValue.attributes['wrap-style']"
                :wrap-class = "propValue.attributes['wrap-class']"
                :view-style = "propValue.attributes['view-style']"
                :view-class = "propValue.attributes['view-class']"
                :noresize = "propValue.attributes['noresize']"
                :tag = "propValue.attributes['tag']"
                :always = "propValue.attributes['always']"
                :min-size = "propValue.attributes['min-size']"
                @scroll = "scroll"
  >
    <div :ref="propValue.attributes['innerRef']">
      <Container
          key="editorContainer"
          :container="{
          id:propValue.id,
          featherId:propValue.featherId,
          children:propValue.children,
          componentId:propValue.id,
          status:propValue.status,}"
          :container-styles = "propValue.styles"
          :isPreview = "isPreview"
          :EcVue = "EcVue"
      ></Container>
    </div>
  </el-scrollbar>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
export default {
  name: "ScScrollbar",
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
  mounted() {
    this.EcVue.$refs[this.propValue.attributes['ref'] ] = this.$refs[this.propValue.attributes['ref'] ]
    this.EcVue.$refs[this.propValue.attributes['innerRef'] ] = this.$refs[this.propValue.attributes['innerRef'] ]
  },
  methods:{
    scroll(scrollLeft,scrollTop){
      if(this.propValue.events['click'].enable){
        this.EcVue[this.propValue.events['click'].method](scrollLeft,scrollTop)
      }
    }
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-slider {
  margin-top: 20px;
}
</style>
