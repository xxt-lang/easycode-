<template>
  <el-container>
    <el-header v-if="propValue.attributes['showTopHeader']" >
      <Container
          key="editorContainer"
          :container="{
              id:propValue.children[4].id,
              featherId:propValue.featherId,
              children:propValue.children[4].children,
              componentId:propValue.id,
              status:propValue.status}"
          :container-styles="propValue.children[4].styles"
          :isPreview="isPreview"
          :EcVue = "EcVue"
      >
      </Container>
    </el-header>
    <el-container>
      <el-aside v-if="propValue.attributes['showAside']" :width="propValue.attributes['AsideWidth']+'px'">
        <Container
            key="editorContainer"
            :container="{
                id:propValue.children[1].id,
                featherId:propValue.featherId,
                children:propValue.children[1].children,
                componentId:propValue.id,
                status:propValue.status}"
            :container-styles="propValue.children[1].styles"
            :isPreview="isPreview"
            :EcVue = "EcVue"
        ></Container>
      </el-aside>
      <el-container>
        <el-header v-if="propValue.attributes['showHeader']" >
          <Container
              key="editorContainer"
              :container="{
              id:propValue.children[0].id,
              featherId:propValue.featherId,
              children:propValue.children[0].children,
              componentId:propValue.id,
              status:propValue.status}"
              :container-styles="propValue.children[0].styles"
              :isPreview="isPreview"
              :EcVue = "EcVue"
          >
          </Container>
        </el-header>
        <el-main v-if="propValue.attributes['showMain']" >
          <Container
              key="editorContainer"
              :container="{
              id:propValue.children[2].id,
              featherId:propValue.featherId,
              children:propValue.children[2].children,
              componentId:propValue.id,
              status:propValue.status}"
              :container-styles="propValue.children[2].styles"
              :isPreview="isPreview"
              :EcVue = "EcVue"
          >
          </Container>

        </el-main>
        <el-footer v-if="propValue.attributes['showFooter']" >
          <Container
              key="editorContainer"
              :container="{
              id:propValue.children[3].id,
              featherId:propValue.featherId,
              children:propValue.children[3].children,
              componentId:propValue.id,
              status:propValue.status}"
              :container-styles="propValue.children[3].styles"
              :isPreview="isPreview"
              :EcVue = "EcVue"
          >
          </Container>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Container from "../../coreComponents/Container.vue";
import ECRouter from "../../coreComponents/EcRouter.vue";
export default {
  name: "ScContainer",
  components: {Container,ECRouter},
  props: {
    propValue: {
      type: Object,
      default: function () {
        return {}
      }
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    }
  },
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  padding: 5px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  padding: 5px;
}
</style>
