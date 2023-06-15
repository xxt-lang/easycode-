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
import {exportComponent,clearMap} from "@/utils/core"
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
              label:"导出",
              attribute:{
              },
              icon:'',
              func:()=>{
                exportComponent()
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
          ],
        }
    },
    setup(){
      return {
      }
    },
    methods: {
      toolClick(param){
        this.$emit('toolClick',param)
      },
      click(){
        this.$router.push('/preview')
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
