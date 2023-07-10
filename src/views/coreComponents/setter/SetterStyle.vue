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
    <el-collapse v-model="activeNames" style="margin-top:5px">
      <el-collapse-item title="布局" name="1">
        <div class="row"
             v-for="d in [styles['display'],styles['flex-wrap'],styles['align-items'],styles['justify-content'],styles['flex-direction']]"
             :key="d.attr"
             v-show="d.enable"
        >
          <span class="itemLabel">{{ d.label }}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button v-for="c in d.children"
                         :key="c.value"
                         :type="d.value === c.value? 'primary':''"
                         size="small"
                         @click="choiceDisplay(d,d.attr,c.value)">
                {{ c.label }}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <div class="row" v-for="item in [styles['height'],styles['width']]" :key=" item.attr">
          <span class="itemLabel">{{ item.label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="item.value" size="small" :units="units"
                             @changeValue="choiceStyle(item.attr,$event.value+$event.unit)"></ec-input-number>
          </div>
        </div>
        <el-collapse-item title="外边距" name="1-1">
          <div class="row" v-for="item in [styles['margin'],styles['margin-top'],styles['margin-left'],styles['margin-bottom'],styles['margin-right']]" :key="item.attr">
            <span class="itemLabel">{{ item.label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="item.value" size="small" :units="units"
                               @changeValue="choiceStyle(item.attr,$event.value+$event.unit)"></ec-input-number>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="内边距" name="1-2">
          <div class="row" v-for="item in [styles['padding'],styles['padding-top'],styles['padding-left'],styles['padding-bottom'],styles['padding-right']]" :key="item.attr">
            <span class="itemLabel">{{ item.label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="item.value" size="small" :units="units"
                               @changeValue="choiceStyle(item.attr,$event.value+$event.unit)"></ec-input-number>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse-item>
      <el-collapse-item title="文字" name="2">
        <div class="row">
          <span class="itemLabel">{{ styles['font-size'].label }}</span>
          <div class="itemContent">
            <el-input-number v-model="styles['font-size'].value"
                             @change="choiceStyle(styles['font-size'].attr,styles['font-size'].value+'px')"></el-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['line-height'].label }}</span>
          <div class="itemContent">
            <el-input-number v-model="styles['line-height'].value"
                             @change="choiceStyle(styles['line-height'].attr,styles['line-height'].value+'px')"></el-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['font-weight'].label }}</span>
          <div class="itemContent">
            <el-select v-model="styles['font-weight'].value"
                       placeholder="选择字重"
                       @change="choiceStyle(styles['font-weight'].attr,styles['font-weight'].value)">
              <el-option v-for="item in fontWeightOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['font-family'].label }}</span>
          <div class="itemContent">
            <el-select placeholder="选择字体"
                v-model="styles['font-family'].value"
                       @change="choiceStyle(styles['font-family'].attr,styles['font-family'].value)">
              <el-option v-for="item in fontFamilyOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['color'].label }}</span>
          <div class="itemContent">
            <el-color-picker v-model="styles['color'].value" show-alpha :predefine="predefineColors"
                             @change="choiceStyle(styles['color'].attr,styles['color'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['text-align'].label }}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button v-for="t in styles['text-align'].children"
                         :key="t.value"
                         :type="styles['text-align'].value === t.value? 'primary':''"
                         size="small"
                         @click="choiceDisplay(styles['text-align'],styles['text-align'].attr,t.value)">
                {{ t.label }}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['opacity'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['opacity'].value"
                       @change="choiceStyle(styles['opacity'].attr,styles['opacity'].value*0.01)"/>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="背景" name="3">
        <div class="row">
          <span class="itemLabel">{{ styles['background-color'].label }}</span>
          <div class="itemContent">
            <el-color-picker v-model="styles['background-color'].value" show-alpha :predefine="predefineColors"
                             @change="choiceStyle(styles['background-color'].attr,styles['background-color'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['background-size'].label }}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button v-for="t in styles['background-size'].children"
                         :key="t.value"
                         :type="styles['background-size'].value === t.value? 'primary':''"
                         size="small"
                         @click="choiceBackgroundSize(styles['background-size'],styles['background-size'].attr,t.value)">
                {{ t.label }}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <div v-show="styles['background-size'].value === 'default'">
          <div class="row">
            <span class="itemLabel">宽</span>
            <el-input size="small"
                      v-model="styles['background-size']['children'][0].params.width"
                      @change="changeBackgroundSize()"></el-input>
          </div>
          <div class="row">
            <span class="itemLabel">高</span>
            <el-input size="small"
                      v-model="styles['background-size']['children'][0].params.height"
                      @change="changeBackgroundSize()"></el-input>
          </div>
        </div>

        <div class="row">
          <span class="itemLabel">{{ styles['background-repeat'].label }}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button v-for="t in styles['background-repeat'].children"
                         :key="t.value"
                         :type="styles['background-repeat'].value === t.value? 'primary':''"
                         size="small"
                         @click="choiceDisplay(styles['background-repeat'],styles['background-repeat'].attr,t.value)">
                {{ t.label }}
              </el-button>
            </el-button-group>
          </div>
        </div>



        <div class="row">
          <span class="itemLabel">{{ styles['background-position'].label }}</span>
          <div class="itemContent">
            <el-button-group>
              <el-button v-for="t in styles['background-position'].children"
                         :key="t.value"
                         :type="styles['background-position'].value === t.value? 'primary':''"
                         size="small"
                         @click="choiceDisplay(styles['background-position'],styles['background-position'].attr,t.value)">
                {{ t.label }}
              </el-button>
            </el-button-group>
          </div>
        </div>

        <div class="row">
          <span class="itemLabel">{{ styles['opacity'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['opacity'].value"
                       @change="choiceStyle(styles['opacity'].attr,styles['opacity'].value*0.01)"/>
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
import EcInputNumber from "../../../components/EcInputNumber.vue";

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
    EcInputNumber,
    VMonacoEditor
  },
  data() {
    return {
      css: '',
      activeNames: '1',
      styles: {
        "display": {
          attr: "display",
          label: "布局模式",
          enable: true,
          value: '',
          children: [
            {value: "inline", label: "内联", detail: "内联布局inline"},
            {value: "flex", label: "弹性", detail: "弹性布局flex"},
            {value: "block", label: "块级", detail: "块级布局block"},
            {value: "inline-block", label: "内联块", detail: "内联块布局inline-block"},
            {value: "none", label: "隐藏", detail: "隐藏none"}
          ]
        },
        "flex-direction": {
          attr: "flex-direction",
          label: "主轴方向",
          enable: false,
          value: '',
          children: [
            {value: "row", label: "左", detail: "水平方向,起点在左侧row"},
            {value: "row-reverse", label: "右", detail: "水平方向，起点在右侧row-reverse"},
            {value: "column", label: "下", detail: "垂直方向,起点在上沿column"},
            {value: "column-reverse", label: "上", detail: "垂直方向,起点在下沿column-reverse"}
          ]
        },
        "justify-content": {
          attr: "justify-content",
          label: "主轴对齐",
          enable: false,
          value: '',
          children: [
            {value: "flex-start", label: "左对齐", detail: "左对齐flex-start"},
            {value: "flex-end", label: "右对齐", detail: "右对齐flex-end"},
            {value: "center", label: "水平居中", detail: "水平居中center"},
            {value: "space-between", label: "两端对齐", detail: "两端对齐space-between"},
            {value: "space-around", label: "横向平分", detail: "横向平分space-around"}
          ]
        },
        "align-items": {
          attr: "align-items",
          label: "辅轴对齐",
          enable: false,
          value: '',
          children: [
            {value: "flex-start", label: "起点对齐", detail: "起点对齐flex-start"},
            {value: "flex-end", label: "终点对齐", detail: "终点对齐flex-end"},
            {value: "center", label: "水平居中", detail: "水平居中"},
            {value: "baseline", label: "baseline", detail: "项目第一行文字的基线对齐"},
            {value: "stretch", label: "stretch", detail: "沾满整个容器的高度stretch"}
          ]
        },
        "flex-wrap": {
          attr: "flex-wrap",
          label: "换行",
          enable: false,
          value: '',
          children: [
            {value: "nowrap", label: "不换行", detail: "不换行nowrap"},
            {value: "wrap", label: "正换行", detail: "正换行wrap"},
            {value: "wrap-reverse", label: "逆换行", detail: "逆换行wrap-reverse"},
          ]
        },
        "height": {label: "高度", attr: "height", value: {value: 0, unit: 'px'}},
        "width": {label: "宽度", attr: "width", value: {value: 0, unit: 'px'}},
        "margin": {label: "外边距", attr: "margin", value: {value: 0, unit: 'px'}},
        "margin-top": {label: "上", attr: "margin-top", value: {value: 0, unit: 'px'}},
        "margin-left": {label: "左", attr: "margin-left", value: {value: 0, unit: 'px'}},
        "margin-bottom": {label: "下", attr: "margin-bottom", value: {value: 0, unit: 'px'}},
        "margin-right": {label: "右", attr: "margin-right", value: {value: 0, unit: 'px'}},
        "padding": {label: "内边距", attr: "padding", value: {value: 0, unit: 'px'}},
        "padding-top": {label: "上", attr: "padding-top", value: {value: 0, unit: 'px'}},
        "padding-left": {label: "左", attr: "padding-left", value: {value: 0, unit: 'px'}},
        "padding-bottom": {label: "下", attr: "padding-bottom", value: {value: 0, unit: 'px'}},
        "padding-right": {label: "右", attr: "padding-right", value: {value: 0, unit: 'px'}},
        "font-size": {label: "字号(px)", attr: "font-size", value: 1},
        "line-height": {label: "行高(px)", attr: "line-height", value: 1},
        "font-weight": {label: "字重", attr: "font-weight", value: ''},
        "font-family": {label: "字体", attr: "font-family", value: ''},
        "color": {label: "颜色", attr: "color", value: ''},
        "text-align": {
          label: "对齐",
          attr: "text-align",
          value: '',
          children: [
            {value: "left", label: "左对齐", detail: "左对齐left"},
            {value: "right", label: "右对齐", detail: "右对齐right"},
            {value: "center", label: "居中对齐", detail: "居中对齐center"},
            {value: "justify", label: "两端对齐", detail: "两端对齐justify"},
          ]
        },
        "opacity": {label: "透明度", attr: "opacity", value: 0},
        "background-color": {label: "背景色", attr: "background-color", value: ''},
        "background-image": {label: "图片地址", attr: "background-image", value: ''},
        "background-size": {
          label: "尺寸",
          attr: "background-size",
          value: '',
          children: [
            {value: 'default', label: "默认", detail: "默认", params: {height: "auto", width: "auto"}},
            {value: "contain", label: "等比填充", detail: "等比填充contain"},
            {value: "cover", label: "等比覆盖", detail: "等比覆盖cover"},
          ]
        },
        "background-repeat": {
          label: "重复显示",
          attr: "background-repeat",
          value: '',
          children: [
            {value: "repeat", label: "垂直水平方向", detail: "垂直方向水平方向重复repeat"},
            {value: "repeat-x", label: "水平", detail: "水平方向重复repeat-x"},
            {value: "repeat-y", label: "垂直", detail: "垂直方向重复repeat-y"},
            {value: "no-repeat", label: "不重复", detail: "不重复no-repeat"},
          ]
        },
        "background-position":{
          label: "定位",
          attr: "background-position",
          value: {left:{label:"左",value:'auto', unit: 'px'},top:{label:"顶",value: 'auto', unit: 'px'},
          children: [
            {value: {left:{value: 0, unit: 'px'},top:{value: 0, unit: 'px'}}, label: "左上", detail: "默认"},
          ]},
      }},
      units: [
        {label: 'px', value: 'px'},
        {label: '%', value: '%'}
      ],
      fontWeightOptions: [
        {label: '100 Thin', value: '100'},
        {label: '200 Extra Light', value: '200'},
        {label: '300 Light', value: '300'},
        {label: '400 Normal', value: '400'},
        {label: '500 Medium', value: '500'},
        {label: '600 Semi Bold', value: '600'},
        {label: '700 Bold', value: '700'},
        {label: 'Extra Bold', value: '800'},
        {label: 'Black', value: '900'},
      ],
      fontFamilyOptions: [
        {label: 'Helvetica', value: 'Helvetica'},
        {label: 'Arial', value: 'Arial'},
        {label: 'serif', value: 'serif'},
      ],
      predefineColors: [
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

    }
  },
  mounted() {
    let that = this
    eventBus.on("dbComponent", () => {
      let styles = getStore("SimpleStore").selectPlate[0].styles
      that.css = `.main{${objectToCss(styles)}}`
      for(let key in styles){
        that.styles[key].value = styles[key]
      }
      console.log(that.css)
    })

  },
  methods: {
    printCss() {
      this.setterData.styles = analysisCssText(this.css)
      for(let key in this.setterData.styles){
        this.styles[key].value = this.setterData.styles[key]
      }
    },
    choiceDisplay(a, attr, value) {
      if (a.value !== value) {
        a.value = value
        this.choiceStyle(attr, value)
      } else {
        a.value = ''
        this.deleteStyle(attr)
      }
      if (this.styles['display'].value === "flex") {
        this.styles['flex-wrap'].enable = true
        this.styles['align-items'].enable = true
        this.styles['justify-content'].enable = true
        this.styles['flex-direction'].enable = true
      } else {
        this.styles['flex-wrap'].enable = false
        this.styles['align-items'].enable = false
        this.styles['justify-content'].enable = false
        this.styles['flex-direction'].enable = false
      }
    },
    choiceBackgroundSize(a, attr, value) {
      if (a.value !== value) {
        a.value = value
        if (a.value === "default") {
          let width = a['children'][0].params['width']
          let height = a['children'][0].params['height']
          value = `${width === "auto" ? width : width + 'px'} ${height === "auto" ? height : height + 'px'}`
        }
        this.choiceStyle(attr, value)
      } else {
        a.value = ''
        this.deleteStyle(attr)
      }
    },
    choiceStyle(attr, value) {
      this.setterData.styles[attr] = value
      this.css = `.main{${objectToCss(this.setterData.styles)}}`
    },
    deleteStyle(attr){
      delete this.setterData.styles[attr]
      this.css = `.main{${objectToCss(this.setterData.styles)}}`
    },
    changeBackgroundSize() {
      let width = this.styles['background-size']['children'][0].params['width']
      let height = this.styles['background-size']['children'][0].params['height']
      if (isNaN(width)) {
        this.styles['background-size']['children'][0].params['width'] = "auto"
      }
      if (isNaN(height)) {
        this.styles['background-size']['children'][0].params['height'] = "auto"
      }
      this.choiceStyle('background-size', `${isNaN(width) ? "auto" : width + 'px'} ${isNaN(height) ? "auto" : height + 'px'}`)
    },
  }
}
</script>

<style scoped>
.row {
  display: flex;
  margin-top: 5px
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
