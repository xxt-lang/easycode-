<template>
  <div v-show="setterStyles">
    <div class="row">
      <span class="itemLabel">绑定class </span>
      <div class="itemContent">
        <el-input v-model="setterData.bindClass" placeholder="输入对应的class选择器" @blur="blur"/>
      </div>
    </div>
    <el-button @click="printCss">保存</el-button>
    <VMonacoEditor v-model="css" language="css" key="css" height="30vh"></VMonacoEditor>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="布局" name="1">
        <div class="row" v-for="d in displayList" :key="d.value" v-show="d.enable">
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
        <div class="row" v-for="item in marginOrPaddingList">
          <span class="itemLabel">{{ item.label }}</span>
          <div class="itemContent">
            <el-input-number size="small" controls-position="right" v-model="item.value" @change="choiceStyle(item.name,item.value+'px')"></el-input-number>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="文字" name="2">
        <div class="row">
          <span class="itemLabel">{{ fontList['fontSize'].label }}</span>
          <div class="itemContent">
            <el-input-number v-model="fontList['fontSize'].value" @change="choiceStyle(fontList['fontSize'].name,fontList['fontSize'].value+'px')"></el-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ fontList['lineHeight'].label }}</span>
          <div class="itemContent">
            <el-input-number v-model="fontList['lineHeight'].value" @change="choiceStyle(fontList['lineHeight'].name,fontList['lineHeight'].value+'px')"></el-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ fontList['fontWeight'].label }}</span>
          <div class="itemContent">
            <el-select v-model="fontList['fontWeight'].value" @change="choiceStyle(fontList['fontWeight'].name,fontList['fontWeight'].value)">
              <el-option v-for="item in fontWeightOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ fontList['fontFamily'].label }}</span>
          <div class="itemContent">
            <el-select v-model="fontList['fontFamily'].value" @change="choiceStyle(fontList['fontFamily'].name,fontList['fontFamily'].value)">
              <el-option v-for="item in fontFamilyOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ fontList['color'].label }}</span>
          <div class="itemContent">
            <el-color-picker v-model="fontList['color'].value" show-alpha :predefine="predefineColors"  @change="choiceStyle(fontList['color'].name,fontList['color'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ fontList['textAlign'].label }}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button v-for="t in fontList['textAlign'].children"
                         :key="t.value"
                         :type="fontList['textAlign'].choice === t.value? 'primary':''"
                         size="small"
                         @click="choiceDisplay(fontList['textAlign'],fontList['textAlign'].name,t.value)">
                {{ t.label }}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ fontList['opacity'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="fontList['opacity'].value" @change="choiceStyle(fontList['opacity'].name,fontList['opacity'].value*0.01)"/>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="背景" name="3">

        <div class="row">
          <span class="itemLabel">{{ fontList['opacity'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="fontList['opacity'].value" @change="choiceStyle(fontList['opacity'].name,fontList['opacity'].value*0.01)"/>
          </div>
        </div>
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
      marginOrPaddingList:[
        {label:"外边距(px)",name:"margin",value:0},
        {label:"top(px)",name:"margin-top",value:0},
        {label:"left(px)",name:"margin-left",value:0},
        {label:"bottom(px)",name:"margin-bottom",value:0},
        {label:"right(px)",name:"margin-right",value:0},
        {label:"内边距(px)",name:"padding",value:0},
        {label:"top(px)",name:"padding-top",value:0},
        {label:"left(px)",name:"padding-left",value:0},
        {label:"bottom(px)",name:"padding-bottom",value:0},
        {label:"right(px)",name:"padding-right",value:0},
        {label:"bottom(px)",name:"padding-bottom",value:0},
        {label:"高度(px)",name:"height",value:0},
        {label:"宽度(px)",name:"width",value:0},
      ],
      fontList:{
        "fontSize":{label:"字号(px)",name:"font-size",value:1},
        "lineHeight":{label:"行高(px)",name:"line-height",value:1},
        "fontWeight":{label:"字重",name:"font-weight",value:''},
        "fontFamily":{label:"字体",name:"font-family",value:''},
        "color":{label:"颜色",name:"color",value:''},
        "textAlign":{
          label:"对齐",
          name:"text-align",
          choice:'',
          children: [
            {value: "left", label: "左对齐", detail: "左对齐left"},
            {value: "right", label: "右对齐", detail: "右对齐right"},
            {value: "center", label: "居中对齐", detail: "居中对齐center"},
            {value: "justify", label: "两端对齐", detail: "两端对齐justify"},
          ]},
        "opacity":{label:"透明度",name:"opacity",value:0}
      },
      fontWeightOptions:[
        {label:'100 Thin',value:'100'},
        {label:'200 Extra Light',value:'200'},
        {label:'300 Light',value:'300'},
        {label:'400 Normal',value:'400'},
        {label:'500 Medium',value:'500'},
        {label:'600 Semi Bold',value:'600'},
        {label:'700 Bold',value:'700'},
        {label:'Extra Bold',value:'800'},
        {label:'Black',value:'900'},
      ],
      fontFamilyOptions:[
        {label:'Helvetica',value:'Helvetica'},
        {label:'Arial',value:'Arial'},
        {label:'serif',value:'serif'},
      ],
      predefineColors:[
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577',
      ],
      background:[
        {}
      ]
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
.row{
  display: flex;
  margin-top:5px
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

.itemContent {
  display: inline-flex;
  width: 170px
}
</style>
