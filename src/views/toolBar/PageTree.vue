<template>
<div class="pageTree">
  <div class="pageTreeTop">
    <el-button @click="dialogVisible = true" type="primary" circle icon="Plus" size="small" ></el-button>
  </div>
  <el-tree :data="getPage()" :props="props"  @node-click="nodeClick" :highlight-current="true">
    <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span v-if="data.type === 'page'">
            <el-button @click="update(node, data)" type="primary" size="small">修改</el-button>
            <el-button @click="remove(node, data)" type="warning" size="small">删除</el-button>
          </span>
        </span>
    </template>
  </el-tree>
  <el-dialog
      v-model="dialogVisible"
      title="添加页面"
      width="30%"
      @closed = "cancel"
  >
    <el-form ref="pageFromRef" :model="pageFrom" label-width="85px" :rules="rules">
      <el-form-item label="页面名" prop="pageName">
        <el-input v-model="pageFrom.pageName" />
      </el-form-item>
      <el-form-item label="页面label" prop="label">
        <el-input v-model="pageFrom.label" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="commit">确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
import {PagesStore, SimpleStore} from "../../stores/counter";
import {mapActions, mapState} from "pinia";
import {Plus} from "@element-plus/icons-vue";
import {deleteSelectComponent} from "../../utils/core";

export default {
  name: "PageTree",
  components:{
    Plus
  },
  props:{
    leftToolBarActive:{
      type:Boolean,
      default:()=>{return false}
    }
  },
  data(){
    return {
      props:{
        label: 'label',
        children: 'children',
      },
      toolName:'',
      dialogVisible:false,
      pageFrom:{
        type:"page",
        pageName:'',
        label:'',
        children:[],
        status:{active:false},
        data:{
          input:'input'
        },
        id:""
      },
      rules:{
        pageName: [
          {
            required: true,
            message: '页面名不能为空',
            trigger: 'change',
          },
        ],
        label: [
          {
            required: true,
            message: '页面label',
            trigger: 'change',
          },
        ],
      },
      nodeClickStatus:false,
      pages:[]
    }
  },
  mounted() {
    const pages = this.getPage()
    this.pages = pages
  },
  emits: ['update:leftToolBarActive'],
  methods:{
    deleteSelectComponent,
    ...mapActions(PagesStore,['addPage','setNowPage','deletePage','getPage']),
    ...mapActions(SimpleStore,['setSelectPlate']),
    remove(node,data){
      if(data.type === "page"){
        this.deletePage()
      }else{
        this.deleteSelectComponent()
      }
      this.nodeClickStatus = false
    },
    nodeClick(node){
      if(this.nodeClickStatus){
        if(node.type==="page"){
          this.setNowPage(this.getPage().findIndex((d) => d.id === node.id))
        }else{
          if(node.component !== 'container'){
            node.status.active = !node.status.active
            // 选中状态时将当前组件放入选择板中
            if(node.status.active){
              this.setSelectPlate(node)
            }
          }
        }
        this.$emit("update:leftToolBarActive",false)
      }else{
        this.nodeClickStatus = true
      }
    },
    commit(){
      this.$refs.pageFromRef.validate((valid) => {
        if(valid){
          this.addPage(this.pageFrom)
          this.dialogVisible = false
        }
      })

    },
    cancel(){
      this.dialogVisible = false
      this.$refs.pageFromRef.resetFields()
    },
    update(node,data){
      this.dialogVisible = true
      this.nodeClickStatus = false
      this.pageFrom.label = data.label
      this.pageFrom.pageName = data.pageName
      this.pageFrom.id = data.id
    }
  }
}
</script>

<style scoped>
.pageTree{
  padding: 5px;
}
.pageTreeTop{
  display: flex;
  justify-content: flex-end;
  margin: 5px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
