<template>
    <div>
          <div v-for = "(item,index) in tools" :key="index" class="toolItem">
            <el-button
                @click = "item.func()"
                v-if="item.component === 'button'&&item.label"
                :type="item.attribute.type?item.attribute.type:''"
                :circle="item.attribute['circle']"
                :round="item.attribute['round']"
                :plain="item.attribute['plain']"
                :icon="item.icon"
            >{{item.label}}</el-button>
            <el-button
                @click = "item.func()"
                v-if="item.component === 'button'&& !item.label"
                :type="item.attribute.type?item.attribute.type:''"
                :circle="item.attribute['circle']"
                :round="item.attribute['round']"
                :plain="item.attribute['plain']"
                :icon="item.icon"
            />
          </div>
    </div>
</template>
<script>
import {exportComponent,clearMap,savePage,redo,undo} from "@/utils/core"
import {mapActions} from "pinia";
import {PagesStore} from "../../stores/counter";

export default {
    name: 'TopBar',
    props: {},
    data() {
      let that = this
        return {
          tools:[
            {
              component:"button",
              label:"清空画布",
              attribute:{
                type:'warning',
                shape:''
              },
              icon:'',
              func:()=>{
                clearMap()
              }
            },
            {
              component:"button",
              label:"返回",
              attribute:{
                type:'primary'
              },
              icon:'',
              func:()=>{
              }
            },
            {
              component:"button",
              label:"预览",
              attribute:{
              },
              icon:'',
              func:()=>{
                that.click()
              }
            },
            {
              component:"button",
              label:"保存",
              attribute:{
              },
              icon:'',
              func:()=>{
                savePage()
              }
            },
            {
              component:"button",
              label:"撤销",
              attribute:{
              },
              icon:'',
              func:()=>{
                undo()
              }
            },
            {
              component:"button",
              label:"撤销回退",
              attribute:{
              },
              icon:'',
              func:()=>{
                redo()
              }
            },
            {
              component:"button",
              label:"导入",
              attribute:{
              },
              func:()=>{
                that.toolClick('importPage')
              }
            },
            {
              component:"button",
              label:"导出",
              attribute:{
              },
              func:()=>{
                that.toolClick('exportPage')
              }
            },
            {
              component:"button",
              label:"页面配置",
              attribute:{
              },
              func:()=>{
                that.toolClick('pageConfiguration')
              }
            },
            {
              component:"button",
              attribute:{
                circle:true
              },
              icon:'QuestionFilled',
              func:()=>{
                that.toolClick('showKeyDetail')
              }
            },
            {
              component:"button",
              label:"test",
              attribute:{
              },
              icon:'',
              func:()=>{
                exportComponent()
              }
            },
          ],
        }
    },
    setup(){
      return {
      }
    },
    methods: {
      ...mapActions(PagesStore, ['getPageIndex']),
      toolClick(param){
        this.$emit('toolClick',param)
      },
      click(){
        savePage()
        this.$router.push({name:'preview',query:{page:this.getPageIndex()}})
        // let toPage = this.$router.resolve({name:'preview',query:{page:this.getPageIndex()}})
        // window.open(toPage.href,'_blank')
      }
    }
}
</script>
<style scoped>
.toolItem{
  padding:5px;
  display:inline-block
}

</style>
