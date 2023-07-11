<template>
  <el-container>
    <el-header v-if="propValue.attributes['showTopHeader']" v-container = "propValue.children[4]">
      <Container
          key="editorContainer"
          :children="propValue.children[4].children"
          :isPreview="isPreview"
          :EcVue = "EcVue"
      >
      </Container>
    </el-header>
    <el-container>
      <el-aside v-if="propValue.attributes['showAside']" :width="propValue.attributes['AsideWidth']+'px'" v-container = "propValue.children[1]">
        <Container
            key="editorContainer"
            :children="propValue.children[1].children"
            :isPreview="isPreview"
            :EcVue = "EcVue"
        ></Container>
      </el-aside>
      <el-container>
        <el-header v-if="propValue.attributes['showHeader']"  v-container = "propValue.children[0]">
          <Container
              key="editorContainer"
              :children="propValue.children[0].children"
              :isPreview="isPreview"
              :EcVue = "EcVue"
          >
          </Container>
        </el-header>
        <el-main v-if="propValue.attributes['showMain']"  v-container = "propValue.children[2]">
          <Container
              key="editorContainer"
              :children="propValue.children[2].children"
              :isPreview="isPreview"
              :EcVue = "EcVue"
          >
          </Container>

        </el-main>
        <el-footer v-if="propValue.attributes['showFooter']" v-container = "propValue.children[3]">
          <Container
              key="editorContainer"
              :children="propValue.children[3].children"
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
