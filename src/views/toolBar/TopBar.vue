<template>
    <div>
      <el-row>
        <div v-for = "(item,index) in tools" :key="index" style="padding:5px">
          <el-button @click = "item.func()">{{item.label}}</el-button>
        </div>
      </el-row>
    </div>
</template>
<script>
import {exportComponent,clearMap} from "@/utils/core"

export default {
    name: 'TopBar',
    props: {},
    data() {
        return {
          tools:[
            {
              type:"button",
              label:"清空画布",
              icon:'',
              func:()=>{
                clearMap()
              }
            },
            {
              type:"button",
              label:"返回",
              icon:'',
              func:()=>{
              }
            },
            {
              type:"button",
              label:"预览",
              icon:'',
              func:()=>{
              }
            },
            {
              type:"button",
              label:"导出",
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
    methods: {}
}
</script>
<style scoped>

</style>
