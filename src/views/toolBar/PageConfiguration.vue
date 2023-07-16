<template>
  <div>
    <el-drawer v-model="value" :modal="false" size="30%" direction="ltr" @close="close">
      <el-button @click="save">保存</el-button>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="EcVue" name="EcVue">
          <AceEditor v-model="EcVueInfo" language="javascript"  key="data"></AceEditor>
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

export default {
  name: "PageConfiguration",
  components:{
    ShowHistory,
    AceEditor
  },
  props:{
    modelValue:{
      type:Boolean,
      default:false
    },
  } ,
  emits:['update:modeValue'],
  computed: {
    value: {
      get() {
        if(this.getNowPage()){
          this.EcVueInfo = this.getNowPage().ecVueInfo
          this.css = this.getNowPage().css
        }
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  data() {
    return {
      activeName: 'EcVue',
      EcVueInfo:'暂无数据',
      Css:''
    }
  },
  created() {
    this.EcVueInfo = '暂无数据'
  },
  methods:{
    ...mapActions(PagesStore,['getNowPage']),
    save(){
      this.getNowPage()['ecVueInfo'] = this.EcVueInfo
      this.getNowPage()['EcVue'] = null
      this.getNowPage()['EcVue'] = createEcVue(this.EcVueInfo)
      this.getNowPage()['css'] = this.css
    },
    close(){
      this.value = false
      this.EcVueInfo = '暂无数据'
    },
  }
}
</script>

<style scoped>
</style>
