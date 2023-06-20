<template>
<div class="pageTree">
  <div class="pageTreeTop">
    <el-button @click="dialogVisible = true" type="primary" circle icon="Plus" size="small" ></el-button>
  </div>
  <el-tree :data="getPage()" :props="props"  @node-click="nodeClick" :highlight-current="true">
    <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
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
      }
    }
  },
  computed:{
    ...mapState(PagesStore,['getPage']),
  },
  emits: ['update:leftToolBarActive'],
  methods:{
    ...mapActions(PagesStore,['addPage','setNowPage']),
    ...mapActions(SimpleStore,['setSelectPlate']),
    remove(node,data){
      // 判断是否锁定，锁定不能删除
      // console.log(node)
    },
    nodeClick(node){
      if(node.type==="page"){
        this.setNowPage(this.getPage().findIndex((d) => d.id === node.id))
      }else{
        node.status.active = !node.status.active
        // 选中状态时将当前组件放入选择板中
        if(node.status.active){
          this.setSelectPlate(node)
        }
      }
      this.$emit("update:leftToolBarActive",false)
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
