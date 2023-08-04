<template>
  <div>
    <el-drawer v-model="value" size="30%" direction="ltr" @close="close">
      <el-button @click="save">保存</el-button>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="js" name="js">
          <AceEditor v-model="EcVueInfo" language="javascript" key="data"></AceEditor>
        </el-tab-pane>
        <el-tab-pane label="css" name="css">
          <AceEditor v-model="css" language="css" key="css"></AceEditor>
        </el-tab-pane>
        <el-tab-pane label="history" name="history">
          <show-history></show-history>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
import {mapActions} from "pinia";
import {PagesStore} from "../../stores/counter";
import AceEditor from "../coreComponents/AceEditor.vue";
import ShowHistory from "./ShowHistory.vue";
import {createEcVue} from "../../utils/core";
import {deepClone} from "../../utils/tool";

export default {
  name: "PageConfiguration",
  components: {
    ShowHistory,
    AceEditor
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:modeValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  watch: {
    modelValue(nVal, oVal) {
      if (nVal) {
        if (this.getNowPage()) {
          this.EcVueInfo = this.getNowPage().ecVueInfo
          this.css = this.getNowPage().css
          if (!this.oldEcVueInfo && !this.oldCss) {
            this.oldEcVueInfo = deepClone(this.getNowPage().ecVueInfo)
            this.oldCss = deepClone(this.getNowPage().css)
          }
        }
      }
    }
  },
  data() {
    return {
      activeName: 'js',
      EcVueInfo: '暂无数据',
      oldEcVueInfo: null,
      oldCss: null,
      saveStatus: false // 判断是否保存成功
    }
  },
  created() {
    this.EcVueInfo = '暂无数据'
  },
  methods: {
    ...mapActions(PagesStore, ['getNowPage']),
    save() {
      try {
        this.getNowPage()['EcVue'] = null
        this.getNowPage()['EcVue'] = createEcVue(this.EcVueInfo)
        if (this.getNowPage()['EcVue'] !== null) {
          this.saveStatus = true
          this.getNowPage()['css'] = this.css
          this.getNowPage()['ecVueInfo'] = this.EcVueInfo
          this.$message({type: "success", message: "保存成功"})
        } else {
          this.$message({type: "error", message: "保存失败"})
          this.saveStatus = false
        }
      } catch (e) {
        this.$message({type: "success", message: "保存失败"})
        return
      }

    },
    close() {
      if (!this.saveStatus) {
        this.EcVueInfo = deepClone(this.oldEcVueInfo)
        this.css = deepClone(this.oldCss)
      }
      this.oldEcVueInfo = null
      this.oldCss = null
      this.value = false
    },
  }
}
</script>

<style scoped>
:deep(.el-overlay ) {
  background-color: transparent;
}
</style>
