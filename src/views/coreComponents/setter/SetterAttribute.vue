<template>
  <div>
    <div v-for = "(item,index) in setterAttributes" :key="item.attributeName" style="margin-top: 5px">
      <span class="itemLabel">{{item.label}}</span>
      <div class="itemContent">
        <el-select  v-if="item.type === 'select'"  v-model="setterData.attributes[item.attributeName]" class="m-2" :placeholder="'选择'+item.label" size="large">
          <el-option
              v-for="tItem in item.typeArray"
              :key="tItem.value"
              :label="tItem.label"
              :value="tItem.value"
          />
        </el-select>
        <el-input v-if="item.type === 'input'" v-model="setterData.attributes[item.attributeName]" placeholder="Please input" />
        <el-switch v-if="item.type === 'switch'" v-model="setterData.attributes[item.attributeName]" />
        <el-input-number v-if="item.type === 'inputNumber'" v-model="setterData.attributes[item.attributeName]" @change="add"/>
      </div>

      <el-table v-if="item.type === 'table'" :data="setterData.attributes[item.attributeName]" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="项"/>
        <el-table-column align="right">
          <template #header>
            <el-button circle icon="Plus" type="primary" @click="addItem(item)"></el-button>
          </template>
          <template #default="scope">
            <el-button size="small" icon="Edit" circle  @click="editItem(item,scope.$index)"></el-button>
            <el-button size="small" type="danger" icon="Delete" circle @click="deleteItem(item,scope.$index)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="tableEditStatus" >
      <setter-attribute :setterAttributes="tableEditAttributes" :setterData="tableEditData"></setter-attribute>
    </el-dialog>
  </div>

</template>

<script>
import {uuid} from "../../../utils/tool";
import {Delete,Edit,Plus} from "@element-plus/icons-vue";

const indexMethod = (index) => {
  return index++
}
export default {
  name: "SetterAttribute",
  components:{
    Delete,
    Edit,
    Plus
  },
  props:{
    setterAttributes:{
      type:Array,
      default:()=>{
        return null
      }
    },
    setterData:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  data(){
    return {
      tableEditName:'',
      tableEditAttributes:{},
      tableEditData:{},
      tableEditStatus:false
    }
  },
  methods:{
    addItem(param){
      this.setterData.attributes[param.attributeName].push(param.defaultValue[0])
      if(param.isChildren){
        this.setterData.children.push( {
          component:"container",
          id:uuid(),
          event: {},
          attributes: {},
          styles: {},
          children:[],
          featherId:this.setterData.id,
          type:"container"})
      }
    },
    deleteItem(param,index){
      this.setterData.attributes[param.attributeName].splice(index,1)
      if(param.isChildren){
        this.setterData.children.splice(index,1)
      }
    },
    editItem(param,index){
      this.tableEditStatus = true
      this.tableEditAttributes = param.column
      this.tableEditData = {attributes:this.setterData.attributes[param.attributeName][index]}
    }
  }

}
</script>

<style scoped>
.itemLabel{
  display: inline-block;
  width: 70px;
  font-size: 15px;
  text-align: center
}
.itemContent{
  display: inline-block;
  width: 170px
}
</style>
