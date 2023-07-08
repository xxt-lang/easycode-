<template>
  <div v-show="setterStyles">
    <div class="setterAttribute">
      <span class="itemLabel">绑定class </span>
      <div class="itemContent">
        <el-input v-model="setterData.bindClass" placeholder="输入对应的class选择器" @blur="blur"/>
      </div>
    </div>
    <el-button @click="printCss">保存</el-button>
    <VMonacoEditor v-model="css" language="css" key="css" height="30vh"></VMonacoEditor>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="布局" name="1">
        <div class="setterAttribute" v-for="d in displayList" :key="d.value" v-show="d.enable">
          <span class="itemLabel">{{d.label}}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button  v-for="c in d.children"
                          :key="c.value"
                          :type="d.choice === c.value? 'primary':''"
                          size="small"
                          @click="choiceDisplay(d,d.value,c.value)">
                {{ c.label }}</el-button>
            </el-button-group>
          </div>
        </div>
        <div class="setterAttribute">
          <span class="itemLabel">高度(px)</span>
          <div class="itemContent">
            <el-input-number v-model="height" @change="choiceStyle('height',height+'px')"></el-input-number>
          </div>
        </div>
        <div class="setterAttribute">
          <span class="itemLabel">宽度(px)</span>
          <div class="itemContent">
            <el-input-number v-model="width" @change="choiceStyle('width',width+'px')"></el-input-number>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="文字" name="2">
      </el-collapse-item>
      <el-collapse-item title="背景" name="3">
      </el-collapse-item>
      <el-collapse-item title="位置" name="4">
      </el-collapse-item>
      <el-collapse-item title="边框" name="5">
      </el-collapse-item>
    </el-collapse>
    <!--    加载自定义属性设置组件-->
    <component v-for="(item,index) in configuration.setterStyles"
               :is="item.component"
               :params="{setterData:setterData,param:item.param}"
               :key="index"
    ></component>
  </div>
</template>
<script>
import {analysisCssText, getStore, objectToCss} from "../../../utils/core";
import eventBus from "../../../utils/eventBus";
import VMonacoEditor from "../VMonacoEditor.vue";

export default {
  name: "SetterStyle",
  props: {
    setterStyles: {
      type: Object,
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
    },
  },
  components: {
    VMonacoEditor
  },
  data() {
    return {
      css: '',
      activeNames: 1,
      displayList: [
        {
          value: "display",
          label: "布局模式",
          enable:true,
          choice:'',
          children: [
            {value: "inline", label: "内联", detail: "内联布局inline"},
            {value: "flex", label: "弹性", detail: "弹性布局flex"},
            {value: "block", label: "块级", detail: "块级布局block"},
            {value: "inline-block", label: "内联块", detail: "内联块布局inline-block"},
            {value: "none", label: "隐藏", detail: "隐藏none"}
          ]
        },
        {
          value: "flex-direction",
          label: "主轴方向",
          enable:false,
          choice:'',
          children: [
            {value: "row", label: "左", detail: "水平方向,起点在左侧row"},
            {value: "row-reverse", label: "右", detail: "水平方向，起点在右侧row-reverse"},
            {value: "column", label: "下", detail: "垂直方向,起点在上沿column"},
            {value: "column-reverse", label: "上", detail: "垂直方向,起点在下沿column-reverse"}
          ]
        },
        {
          value: "justify-content",
          label: "主轴对齐",
          enable:false,
          choice:'',
          children: [
            {value: "flex-start", label: "左对齐", detail: "左对齐flex-start"},
            {value: "flex-end", label: "右对齐", detail: "右对齐flex-end"},
            {value: "center", label: "水平居中", detail: "水平居中center"},
            {value: "space-between", label: "两端对齐", detail: "两端对齐space-between"},
            {value: "space-around", label: "横向平分", detail: "横向平分space-around"}
          ]
        },
        {
          value: "align-items",
          label: "辅轴对齐",
          enable:false,
          choice:'',
          children: [
            {value: "flex-start", label: "起点对齐", detail: "起点对齐flex-start"},
            {value: "flex-end", label: "终点对齐", detail: "终点对齐flex-end"},
            {value: "center", label: "水平居中", detail: "水平居中"},
            {value: "baseline", label: "baseline", detail: "项目第一行文字的基线对齐"},
            {value: "stretch", label: "stretch", detail: "沾满整个容器的高度stretch"}
          ]
        },
        {
          value: "flex-wrap",
          label: "换行",
          enable:false,
          choice:'',
          children: [
            {value: "nowrap", label: "不换行", detail: "不换行nowrap"},
            {value: "wrap", label: "正换行", detail: "正换行wrap"},
            {value: "wrap-reverse", label: "逆换行", detail: "逆换行wrap-reverse"},
          ]
        }
      ],
      height:0,
      width:0
    }
  },
  mounted() {
    let that = this
    eventBus.on("dbComponent", () => {
      that.css = `.main{${objectToCss(getStore("SimpleStore").selectPlate[0].styles)}}`
    })
  },
  methods: {
    printCss() {
      this.setterData.styles = analysisCssText(this.css)
    },
    choiceDisplay(a,attr,value) {
      if(a.choice!==value){
        a.choice = value
        this.setterData.styles[attr] = value
      }else{
        a.choice = ''
        delete this.setterData.styles[attr]
      }
      if(this.displayList[0].choice === "flex"){
        this.displayList[1].enable = true
        this.displayList[2].enable = true
        this.displayList[3].enable = true
        this.displayList[4].enable = true
      }else{
        this.displayList[1].enable = false
        this.displayList[2].enable = false
        this.displayList[3].enable = false
        this.displayList[4].enable = false
      }
    },
    choiceStyle(attr,value){
      this.setterData.styles[attr] = value
    }
}
}
</script>

<style scoped>
.itemLabel {
  display: inline-flex;
  width: 70px;
  font-size: 13px;
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
