<template>
  <div>
    <div v-for="(item,index) in setterAttributes" :key="item.attributeName" style="margin-top: 5px">
      <div class="setterAttribute">
        <el-tooltip
            effect="dark"
            :content="item.detail"
            placement="bottom"
        ><span class="itemLabel" :style="{color:item.bind === 'value'?'green':item.bind === 'ref'?'orange':''}">{{item.label}} </span></el-tooltip>

        <div class="itemContent">
          <el-select v-if="item.type === 'select'" v-model="setterData.attributes[item.attributeName]" class="m-2"
                     :placeholder="'选择'+item.label" size="large">
            <el-option
                v-for="tItem in item.typeArray"
                :key="tItem.value"
                :label="tItem.label"
                :value="tItem.value"
            />
          </el-select>
          <el-input v-if="item.type === 'input' || item.type === 'inputArea'"
                    :disabled="item.bind === 'ref'"
                    v-model="setterData.attributes[item.attributeName]"
                    :placeholder="'请输入'+item.label"
                    :type="item.type === 'inputArea'?'textarea':'text'"
          />
          <el-switch v-if="item.type === 'switch'" v-model="setterData.attributes[item.attributeName]"/>
          <el-input-number
              v-if="item.type === 'inputNumber'"
              v-model="setterData.attributes[item.attributeName]"
              :max="item.max?item.max:Infinity"
              :min="item.min?item.min:-Infinity"
              :precision="item.precision?item.precision:1"/>
          <el-color-picker v-if="item.type === 'color'"
                           v-model="setterData.attributes[item.attributeName]"></el-color-picker>
        </div>
      </div>
      <el-table v-if="item.type === 'table'" :data="setterData.children" height="300" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="项"/>
        <el-table-column align="right">
          <template #header>
            <el-button circle icon="Plus" type="primary" @click="addItem"></el-button>
          </template>
          <template #default="scope">
            <el-button size="small" icon="Edit" circle @click="editItem(item,scope.$index)"></el-button>
            <el-button size="small" type="danger" icon="Delete" circle
                       @click="deleteItem(item,scope.$index)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <span  class="itemDetail" v-show="detail === index">{{ item.detail }}</span>
    </div>
    <!--    加载自定义属性设置组件-->
    <component v-for="(item,index) in configuration.setterAttributes"
               :is="item.component"
               :params="{setterData:setterData,param:item.param}"
               :key="index"
    ></component>
    <el-dialog v-model="tableEditStatus">
      <setter-attribute :setterAttributes="tableEditAttributes" :setterData="tableEditData"></setter-attribute>
    </el-dialog>
  </div>

</template>

<script>
import {deepClone, uuid} from "../../../utils/tool";
import {Delete, Edit, Plus} from "@element-plus/icons-vue";

const indexMethod = (index) => {
  return index++
}
export default {
  name: "SetterAttribute",
  components: {
    Delete,
    Edit,
    Plus
  },
  props: {
    setterAttributes: {
      type: Array,
      default: () => {
        return null
      }
    },
    setterData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    configuration: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      tableEditName: '',
      tableEditAttributes: {},
      tableEditData: {},
      tableEditStatus: false,
      detail:-1
    }
  },
  methods: {
    openDetail(index){
      if(this.detail === index){
        index = -1
      }
      this.detail = index
    },
    addItem() {
      // 如果配置了则按照配置的children来 否则就采用默认的
      if (this.configuration.childrenTemplate) {
        let childrenTemplate = deepClone(this.configuration.childrenTemplate)
        childrenTemplate.id = uuid()
        childrenTemplate.featherId = this.setterData.id,
            this.setterData.children.push(childrenTemplate)
      } else {
        this.setterData.children.push({
          component: "container",
          status: {
            active: false,
            activeContainer: false,
            isHidden: false,
            lock: false,// false 不锁 true 锁
          },
          label: '容器',
          id: uuid(),
          event: {},
          attributes: {},
          styles: {},
          children: [],
          featherId: this.setterData.id,
          type: "container"
        })
      }
    },
    deleteItem(param, index) {
      if (this.setterData.children.length > 1) {
        this.setterData.children.splice(index, 1)
      }
    },
    editItem(param, index) {
      this.tableEditAttributes = []
      this.tableEditData = []
      this.tableEditStatus = true
      this.tableEditAttributes = param.column
      this.tableEditData = {attributes: this.setterData.children[index].attributes}
    },
  }
}
</script>

<style scoped>
.setterAttribute {
  display: flex;
}

.itemLabel {
  display: inline-flex;
  width: 70px;
  font-size: 13px;
  font-weight: 500;
  transition: color .5s;
  text-align: center;
  transition: color .5s;
}

.itemDetail{
  width: 70px;
  font-size: 10px;
  color: #dcdfe6;
  font-weight: 500;
  transition: color .5s;
  text-align: center;
  transition: color .5s;
}

.itemContent {
  display: inline-flex;
  width: 170px
}
</style>
