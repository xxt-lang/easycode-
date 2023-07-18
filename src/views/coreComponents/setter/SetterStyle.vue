<template>
  <div v-if="setterStyles" class="setterStyle">
    <div class="row">
      <span class="itemLabel">绑定class </span>
      <div class="itemContent">
        <el-input v-model="setterData.bindClass" placeholder="输入对应的class选择器" @blur="blur"/>
      </div>
    </div>
    <el-button @click="printCss">保存</el-button>
    <AceEditor v-model="css" language="css" key="styleCss" height="30vh"></AceEditor>
    <el-collapse v-model="activeNames" style="margin-top:5px">
      <el-collapse-item title="布局" class="collapseGroup" name="1">
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
                             @changeValue="changeValue(item.attr,$event)"></ec-input-number>
          </div>
        </div>
        <el-collapse-item title="外边距" name="1-1" class="item-item">
          <div class="row"
               v-for="item in [styles['margin'],styles['margin-top'],styles['margin-left'],styles['margin-bottom'],styles['margin-right']]"
               :key="item.attr">
            <span class="itemLabel">{{ item.label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="item.value" size="small" :units="units"
                               @changeValue="changeValue(item.attr,$event)"></ec-input-number>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="内边距" name="1-2" class="item-item">
          <div class="row"
               v-for="item in [styles['padding'],styles['padding-top'],styles['padding-left'],styles['padding-bottom'],styles['padding-right']]"
               :key="item.attr">
            <span class="itemLabel">{{ item.label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="item.value" size="small" :units="units"
                               @changeValue="changeValue(item.attr,$event)"></ec-input-number>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse-item>
      <el-collapse-item title="文字" class="collapseGroup" name="2">
        <div class="row">
          <span class="itemLabel">{{ styles['font-size'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['font-size'].value" unit="px" size="small" :units="units"
                             @changeValue="changeValue(styles['font-size'].attr,$event)"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['line-height'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['line-height'].value" unit="px" size="small" :units="units"
                             @change="choiceStyle(styles['line-height'].attr,styles['line-height'].value)"></ec-input-number>
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
      <el-collapse-item title="背景" class="collapseGroup" name="3">
        <div class="row">
          <span class="itemLabel">{{ styles['background-color'].label }}</span>
          <div class="itemContent">
            <el-color-picker v-model="styles['background-color'].value" show-alpha :predefine="predefineColors"
                             @change="choiceStyle(styles['background-color'].attr,styles['background-color'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['background-image'].label }}</span>
          <div class="itemContent">
            <el-input v-model="styles['background-image'].value"
                      @change="choiceStyle(styles['background-image'].attr,`url(${styles['background-image'].value})`) "/>
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
            <div class="itemContent">
              <ec-input-number v-model="styles['background-size'].params.width" size="small" :units="units"
                               @changeValue="changeBackgroundSize"></ec-input-number>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">高</span>
            <div class="itemContent">
              <ec-input-number v-model="styles['background-size'].params.height" size="small" :units="units"
                               @changeValue="changeBackgroundSize"></ec-input-number>
            </div>
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
        </div>
        <div class="row">
          <span class="itemLabel">左</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['background-position'].params.left" size="small" :units="units"
                             @changeValue="changeBackgroundPosition"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">顶</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['background-position'].params.top" size="small" :units="units"
                             @changeValue="changeBackgroundPosition"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel"></span>
          <div class="itemContent" style="width: 130px">
            <el-button-group>
              <el-button v-for="t in styles['background-position'].children"
                         :key="t.label"
                         :type="styles['background-position'].choice === t.label? 'primary':''"
                         size="small"
                         @click="choiceBackgroundPosition(styles['background-position'],t)">
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
      <el-collapse-item title="位置" class="collapseGroup" name="4">
        <div class="row">
          <span class="itemLabel">{{ styles['position'].label }}</span>
          <div class="itemContent">
            <el-select v-model="styles['position'].value"
                       placeholder="位置"
                       @change="choiceStyle(styles['position'].attr,styles['position'].value)">
              <el-option v-for="item in positionOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="row" v-for="item in [styles['top'],styles['left'],styles['bottom'],styles['right']]"
             v-show="styles['position'].value!=='static' && styles['position'].value!==''">
          <span class="itemLabel">{{ item.label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="item.value" size="small" :units="units"
                             @changeValue="changeValue(item.attr,$event)"></ec-input-number>
          </div>
        </div>

        <div class="row">
          <span class="itemLabel">{{ styles['z-index'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['z-index'].value" size="small"
                             @changeValue="choiceStyle(styles['z-index'].attr,styles['z-index'].value)"></ec-input-number>
          </div>
        </div>

        <div class="row">
          <span class="itemLabel">{{ styles['float'].label }}</span>
          <div class="itemContent">
            <el-select v-model="styles['float'].value"
                       placeholder="浮动方向"
                       @change="choiceStyle(styles['float'].attr,styles['float'].value)">
              <el-option v-for="item in floatOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['clear'].label }}</span>
          <div class="itemContent">
            <el-select v-model="styles['clear'].value"
                       placeholder="清除"
                       @change="choiceStyle(styles['clear'].attr,styles['clear'].value)">
              <el-option v-for="item in clearOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="边框" class="collapseGroup" name="5">
        <!--        边框radius-->
        <div class="row">
          <span class="itemLabel">{{ styles['border-radius'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['border-radius'].value"
                       @change="changeBorderRadio(styles['border-radius'].attr,styles['border-radius'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['border-top-left-radius'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['border-top-left-radius'].value"
                       @change="changeBorderRadio(styles['border-top-left-radius'].attr,styles['border-top-left-radius'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['border-top-right-radius'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['border-top-right-radius'].value"
                       @change="changeBorderRadio(styles['border-top-right-radius'].attr,styles['border-top-right-radius'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['border-bottom-left-radius'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['border-bottom-left-radius'].value"
                       @change="changeBorderRadio(styles['border-bottom-left-radius'].attr,styles['border-bottom-left-radius'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['border-bottom-right-radius'].label }}</span>
          <div class="itemContent">
            <el-slider v-model="styles['border-bottom-right-radius'].value"
                       @change="changeBorderRadio(styles['border-bottom-right-radius'].attr,styles['border-bottom-right-radius'].value)"/>
          </div>
        </div>
        <!--        边框-->
        <div class="row">
          <span class="itemLabel">{{ styles['border-width'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['border-width'].value" size="small" :units="units" unit="px"
                             @changeValue="choiceStyle(styles['border-width'].attr,$event)"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['border-color'].label }}</span>
          <div class="itemContent">
            <el-color-picker v-model="styles['border-color'].value" show-alpha :predefine="predefineColors"
                             @change="choiceStyle(styles['border-color'].attr,styles['border-color'].value)"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['border-style'].label }}</span>
          <div class="itemContent">
            <el-select v-model="styles['border-style'].value"
                       placeholder="选择边框样式"
                       @change="choiceStyle(styles['border-style'].attr,styles['border-style'].value)">
              <el-option v-for="item in borderStyleOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!--       上边框 -->
        <el-collapse-item title="上边框" name="5-4" class="item-item">
          <div class="row">
            <span class="itemLabel">{{ styles['border-top-width'].label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="styles['border-top-width'].value" size="small" :units="units" unit="px"
                               @changeValue="choiceStyle(styles['border-top-width'].attr,$event)"></ec-input-number>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-top-color'].label }}</span>
            <div class="itemContent">
              <el-color-picker v-model="styles['border-top-color'].value" show-alpha :predefine="predefineColors"
                               @change="choiceStyle(styles['border-top-color'].attr,styles['border-top-color'].value)"/>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-top-style'].label }}</span>
            <div class="itemContent">
              <el-select v-model="styles['border-top-style'].value"
                         placeholder="选择边框样式"
                         @change="choiceStyle(styles['border-top-style'].attr,styles['border-top-style'].value)">
                <el-option v-for="item in borderStyleOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </el-collapse-item>
        <!--左边框-->
        <el-collapse-item title="左边框" name="5-3" class="item-item">
          <div class="row">
            <span class="itemLabel">{{ styles['border-left-width'].label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="styles['border-left-width'].value" size="small" :units="units" unit="px"
                               @changeValue="choiceStyle(styles['border-left-width'].attr,$event)"></ec-input-number>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-left-color'].label }}</span>
            <div class="itemContent">
              <el-color-picker v-model="styles['border-left-color'].value" show-alpha :predefine="predefineColors"
                               @change="choiceStyle(styles['border-left-color'].attr,styles['border-left-color'].value)"/>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-left-style'].label }}</span>
            <div class="itemContent">
              <el-select v-model="styles['border-left-style'].value"
                         placeholder="选择边框样式"
                         @change="choiceStyle(styles['border-left-style'].attr,styles['border-left-style'].value)">
                <el-option v-for="item in borderStyleOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </el-collapse-item>
        <!--下边框-->
        <el-collapse-item title="下边框" name="5-2" class="item-item">
          <div class="row">
            <span class="itemLabel">{{ styles['border-bottom-width'].label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="styles['border-bottom-width'].value" size="small" :units="units" unit="px"
                               @changeValue="choiceStyle(styles['border-bottom-width'].attr,$event)"></ec-input-number>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-bottom-color'].label }}</span>
            <div class="itemContent">
              <el-color-picker v-model="styles['border-bottom-color'].value" show-alpha :predefine="predefineColors"
                               @change="choiceStyle(styles['border-bottom-color'].attr,styles['border-bottom-color'].value)"/>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-bottom-style'].label }}</span>
            <div class="itemContent">
              <el-select v-model="styles['border-bottom-style'].value"
                         placeholder="选择边框样式"
                         @change="choiceStyle(styles['border-bottom-style'].attr,styles['border-bottom-style'].value)">
                <el-option v-for="item in borderStyleOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </el-collapse-item>
        <!--右边框-->
        <el-collapse-item title="右边框" name="5-1" class="item-item">
          <div class="row">
            <span class="itemLabel">{{ styles['border-right-width'].label }}</span>
            <div class="itemContent">
              <ec-input-number v-model="styles['border-right-width'].value" size="small" :units="units" unit="px"
                               @changeValue="choiceStyle(styles['border-right-width'].attr,$event)"></ec-input-number>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-right-color'].label }}</span>
            <div class="itemContent">
              <el-color-picker v-model="styles['border-right-color'].value" show-alpha :predefine="predefineColors"
                               @change="choiceStyle(styles['border-right-color'].attr,styles['border-right-color'].value)"/>
            </div>
          </div>
          <div class="row">
            <span class="itemLabel">{{ styles['border-right-style'].label }}</span>
            <div class="itemContent">
              <el-select v-model="styles['border-right-style'].value"
                         placeholder="选择边框样式"
                         @change="choiceStyle(styles['border-right-style'].attr,styles['border-right-style'].value)">
                <el-option v-for="item in borderStyleOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </el-collapse-item>
        <!--        边框阴影-->

        <div class="row">
          <span class="itemLabel">{{ styles['box-shadow']['params']['inset'].label }}</span>
          <div class="itemContent">
            <el-switch v-model="styles['box-shadow']['params']['inset'].value" @change="changeBoxShadow"></el-switch>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['box-shadow']['params']['color'].label }}</span>
          <div class="itemContent">
            <el-color-picker v-model="styles['box-shadow']['params']['color'].value" show-alpha
                             :predefine="predefineColors"
                             @change="changeBoxShadow"/>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['box-shadow']['params']['x'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['box-shadow']['params']['x'].value" size="small" unit="px" :units="units"
                             @changeValue="changeBoxShadow"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['box-shadow']['params']['y'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['box-shadow']['params']['y'].value" size="small" unit="px" :units="units"
                             @changeValue="changeBoxShadow"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['box-shadow']['params']['obscure'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['box-shadow']['params']['obscure'].value" size="small" unit="px" :units="units"
                             @changeValue="changeBoxShadow"></ec-input-number>
          </div>
        </div>
        <div class="row">
          <span class="itemLabel">{{ styles['box-shadow']['params']['extend'].label }}</span>
          <div class="itemContent">
            <ec-input-number v-model="styles['box-shadow']['params']['extend'].value" size="small" unit="px" :units="units"
                             @changeValue="changeBoxShadow"></ec-input-number>
          </div>
        </div>
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
import AceEditor from "../AceEditor.vue";
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
    AceEditor
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
        "height": {label: "高度", attr: "height", value: "auto"},
        "width": {label: "宽度", attr: "width", value: "auto"},
        "margin": {label: "外边距", attr: "margin", value: '0px'},
        "margin-top": {label: "上", attr: "margin-top", value: '0px'},
        "margin-left": {label: "左", attr: "margin-left", value: '0px'},
        "margin-bottom": {label: "下", attr: "margin-bottom", value: '0px'},
        "margin-right": {label: "右", attr: "margin-right", value: '0px'},
        "padding": {label: "内边距", attr: "padding", value: '0px'},
        "padding-top": {label: "上", attr: "padding-top", value: '0px'},
        "padding-left": {label: "左", attr: "padding-left", value: '0px'},
        "padding-bottom": {label: "下", attr: "padding-bottom", value: '0px'},
        "padding-right": {label: "右", attr: "padding-right", value: '0px'},
        "font-size": {label: "字号(px)", attr: "font-size", value: ''},
        "line-height": {label: "行高(px)", attr: "line-height", value: ''},
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
        "opacity": {label: "透明度", attr: "opacity", value: 100},
        "background-color": {label: "背景色", attr: "background-color", value: ''},
        "background-image": {label: "图片地址", attr: "background-image", value: ''},
        "background-size": {
          label: "尺寸",
          attr: "background-size",
          value: '',
          params: {height: "auto", width: "auto"},
          children: [
            {value: 'default', label: "默认", detail: "默认"},
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
        "background-position": {
          label: "定位",
          attr: "background-position",
          value: '',
          params: {left:'',top: ''},
          choice: '',
          children: [
            {value: {left: '0px', top: '0px'}, label: "左上", detail: "左上"},
            {value: {left: '50%', top: '0px'}, label: "上", detail: "上"},
            {value: {left: '100%', top: '0px',}, label: "右上", detail: "右上"},
            {value: {left: '0px', top: '50%'}, label: "左", detail: "左"},
            {value: {left: '50%', top: '50%'}, label: "中", detail: "中"},
            {value: {left: '100%', top: '50%'}, label: "右", detail: "右"},
            {value: {left: '0px', top: '100%'}, label: "左下", detail: "左下"},
            {value: {left: '50%', top: '100%'}, label: "下", detail: "下"},
            {value: {left: '100%', top: '100%'}, label: "右下", detail: "右下"},
          ]
        },

        "position": {
          label: "位置",
          attr: "position",
          value: '',
        },
        "left": {
          label: "left",
          attr: "left",
          value: "auto",
        },
        "right": {
          label: "right",
          attr: "right",
          value: "auto",
        },
        "top": {
          label: "top",
          attr: "top",
          value: "auto"
        },
        "bottom": {
          label: "bottom",
          attr: "bottom",
          value: "auto"
        },
        "z-index": {
          label: "z-index",
          attr: "z-index",
          value: 0
        },
        "float": {
          label: '浮动',
          attr: "float",
          value: ""
        },
        "clear": {
          label: '清除',
          attr: 'clear',
          value: ''
        },


        "border-radius": {
          label: "固定圆角(px)",
          attr: "border-radius",
          value: 0,
        },
        "border-top-left-radius": {
          label: "左上(px)",
          attr: "border-top-left-radius",
          value: 0,
        },
        "border-top-right-radius": {
          label: "右上(px)",
          attr: "border-top-right-radius",
          value: 0,
        },
        "border-bottom-left-radius": {
          label: "左下(px)",
          attr: "border-bottom-left-radius",
          value: 0,
        },
        "border-bottom-right-radius": {
          label: "右下(px)",
          attr: "border-bottom-right-radius",
          value: 0,
        },

        "border-width": {
          label: "宽度",
          attr: "border-width",
          value: "auto",
        },
        "border-color": {
          label: "颜色",
          attr: "border-color",
          value: '',
        },
        "border-style": {
          label: "样式",
          attr: "border-style",
          value: '',
        },

        "border-top-width": {
          label: "宽度",
          attr: "border-top-width",
          value: "auto",
        },
        "border-top-color": {
          label: "边框颜色",
          attr: "border-top-color",
          value: '',
        },
        "border-top-style": {
          label: "样式",
          attr: "border-style",
          value: '',
        },
        "border-left-width": {
          label: "宽度",
          attr: "border-left-width",
          value: "auto",
        },
        "border-left-color": {
          label: "边框颜色",
          attr: "border-left-color",
          value: '',
        },
        "border-left-style": {
          label: "样式",
          attr: "border-left-style",
          value: '',
        },
        "border-right-width": {
          label: "宽度",
          attr: "border-right-width",
          value: "auto",
        },
        "border-right-color": {
          label: "颜色",
          attr: "border-right-color",
          value: '',
        },
        "border-right-style": {
          label: "样式",
          attr: "border-right-style",
          value: '',
        },
        "border-bottom-style": {
          label: "样式",
          attr: "border-bottom-style",
          value: '',
        },
        "border-bottom-width": {
          label: "宽度",
          attr: "border-bottom-style",
          value: "auto",
        },
        "border-bottom-color": {
          label: "颜色",
          attr: "border-bottom-style",
          value: '',
        },
        "box-shadow": {
          label: "阴影",
          value: '',
          attr: 'box-shadow',
          params: {
            inset: {label: '内外阴影', value: false},
            color: {label: "颜色", value: ''},
            x: {label: "x", value: '0px'},
            y: {label: "y", value: '0px'},
            obscure: {label: "模糊", value: '0px'},
            extend: {label: "扩展", value: '0px'}
          },
        }
      },
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
      borderStyleOptions: [
        {label: 'solid', value: 'solid'},
        {label: 'dashed', value: 'dashed'},
        {label: 'dotted', value: 'dotted'},
        {label: 'none', valueL: 'none'},
        {label: 'inset', value: 'inset'},
        {label: 'groove', value: 'groove'},
        {label: 'outset', value: 'outset'},
        {label: 'double', value: 'double'},
        {label: 'ridge', value: 'ridge'},
        {label: 'hidden', value: 'hidden'}
      ],
      positionOptions: [
        {label: 'static', value: 'static'},
        {label: 'relative', value: 'relative'},
        {label: 'absolute', value: 'absolute'},
        {label: 'fixed', value: 'fixed'},
        {label: 'sticky', value: 'sticky'}
      ],
      floatOptions: [
        {label: 'none', value: 'none'},
        {label: 'left', value: 'left'},
        {label: 'right', value: 'right'},
      ],
      clearOptions: [
        {label: 'none', value: 'none'},
        {label: 'left', value: 'left'},
        {label: 'right', value: 'right'},
        {label: 'both', value: 'both'}
      ]

    }
  },
  mounted() {
    let that = this
    eventBus.on("dbComponent", () => {
      let styles = getStore("SimpleStore").selectPlate[0].styles
      that.css = `.main{\n${objectToCss(styles)}\n}`
      that.styles = {
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
        "height": {label: "高度", attr: "height", value: "auto"},
        "width": {label: "宽度", attr: "width", value: "auto"},
        "margin": {label: "外边距", attr: "margin", value: '0px'},
        "margin-top": {label: "上", attr: "margin-top", value: '0px'},
        "margin-left": {label: "左", attr: "margin-left", value: '0px'},
        "margin-bottom": {label: "下", attr: "margin-bottom", value: '0px'},
        "margin-right": {label: "右", attr: "margin-right", value: '0px'},
        "padding": {label: "内边距", attr: "padding", value: '0px'},
        "padding-top": {label: "上", attr: "padding-top", value: '0px'},
        "padding-left": {label: "左", attr: "padding-left", value: '0px'},
        "padding-bottom": {label: "下", attr: "padding-bottom", value: '0px'},
        "padding-right": {label: "右", attr: "padding-right", value: '0px'},
        "font-size": {label: "字号(px)", attr: "font-size", value: ''},
        "line-height": {label: "行高(px)", attr: "line-height", value: ''},
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
        "opacity": {label: "透明度", attr: "opacity", value: 100},
        "background-color": {label: "背景色", attr: "background-color", value: ''},
        "background-image": {label: "图片地址", attr: "background-image", value: ''},
        "background-size": {
          label: "尺寸",
          attr: "background-size",
          value: '',
          params: {height: "auto", width: "auto"},
          children: [
            {value: 'default', label: "默认", detail: "默认"},
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
        "background-position": {
          label: "定位",
          attr: "background-position",
          value: '',
          params: {left: 'auto', top:'auto'},
          choice: '',
          children: [
            {value: {left: '0px', top: '0px'}, label: "左上", detail: "左上"},
            {value: {left: '50%', top: '0px'}, label: "上", detail: "上"},
            {value: {left: '100%', top: '0px',}, label: "右上", detail: "右上"},
            {value: {left: '0px', top: '50%'}, label: "左", detail: "左"},
            {value: {left: '50%', top: '50%'}, label: "中", detail: "中"},
            {value: {left: '100%', top: '50%'}, label: "右", detail: "右"},
            {value: {left: '0px', top: '100%'}, label: "左下", detail: "左下"},
            {value: {left: '50%', top: '100%'}, label: "下", detail: "下"},
            {value: {left: '100%', top: '100%'}, label: "右下", detail: "右下"},
          ]
        },

        "position": {
          label: "位置",
          attr: "position",
          value: '',
        },
        "left": {
          label: "left",
          attr: "left",
          value: "auto",
        },
        "right": {
          label: "right",
          attr: "right",
          value: "auto",
        },
        "top": {
          label: "top",
          attr: "top",
          value: "auto"
        },
        "bottom": {
          label: "bottom",
          attr: "bottom",
          value: "auto"
        },
        "z-index": {
          label: "z-index",
          attr: "z-index",
          value: 0
        },
        "float": {
          label: '浮动',
          attr: "float",
          value: ""
        },
        "clear": {
          label: '清除',
          attr: 'clear',
          value: ''
        },


        "border-radius": {
          label: "固定圆角(px)",
          attr: "border-radius",
          value: 0,
        },
        "border-top-left-radius": {
          label: "左上(px)",
          attr: "border-top-left-radius",
          value: 0,
        },
        "border-top-right-radius": {
          label: "右上(px)",
          attr: "border-top-right-radius",
          value: 0,
        },
        "border-bottom-left-radius": {
          label: "左下(px)",
          attr: "border-bottom-left-radius",
          value: 0,
        },
        "border-bottom-right-radius": {
          label: "右下(px)",
          attr: "border-bottom-right-radius",
          value: 0,
        },

        "border-width": {
          label: "宽度",
          attr: "border-width",
          value: "auto",
        },
        "border-color": {
          label: "颜色",
          attr: "border-color",
          value: '',
        },
        "border-style": {
          label: "样式",
          attr: "border-style",
          value: '',
        },

        "border-top-width": {
          label: "宽度",
          attr: "border-top-width",
          value: "auto",
        },
        "border-top-color": {
          label: "边框颜色",
          attr: "border-top-color",
          value: '',
        },
        "border-top-style": {
          label: "样式",
          attr: "border-style",
          value: '',
        },
        "border-left-width": {
          label: "宽度",
          attr: "border-left-width",
          value: "auto",
        },
        "border-left-color": {
          label: "边框颜色",
          attr: "border-left-color",
          value: '',
        },
        "border-left-style": {
          label: "样式",
          attr: "border-left-style",
          value: '',
        },
        "border-right-width": {
          label: "宽度",
          attr: "border-right-width",
          value: "auto",
        },
        "border-right-color": {
          label: "颜色",
          attr: "border-right-color",
          value: '',
        },
        "border-right-style": {
          label: "样式",
          attr: "border-right-style",
          value: '',
        },
        "border-bottom-style": {
          label: "样式",
          attr: "border-bottom-style",
          value: '',
        },
        "border-bottom-width": {
          label: "宽度",
          attr: "border-bottom-style",
          value: "auto",
        },
        "border-bottom-color": {
          label: "颜色",
          attr: "border-bottom-style",
          value: '',
        },
        "box-shadow": {
          label: "阴影",
          value: '',
          attr: 'box-shadow',
          params: {
            inset: {label: '内外阴影', value: false},
            color: {label: "颜色", value: ''},
            x: {label: "x", value: '0px'},
            y: {label: "y", value: '0px'},
            obscure: {label: "模糊", value: '0px'},
            extend: {label: "扩展", value: '0px'}
          },
        }
      }
      this.changStyle(styles)
    })

  },
  methods: {
    changStyle(styles){
      for (let key in styles) {
        if(key === 'background-position'){
          let position =styles[key].split(" ")
          this.styles[key].params.left=position[0]
          this.styles[key].params.top=position[1]
        }else if(key === 'background-size'){
          let size = styles[key].split(" ")
          this.styles[key].params.height = size[1]
          this.styles[key].params.width = size[0]
        }else if(key === 'box-shadow'){
          let boxShadow = styles[key].split(" ")
          this.styles[key].params.inset.value = boxShadow[0]==='inset'
          this.styles[key].params.x.value=boxShadow[1]
          this.styles[key].params.y.value = boxShadow[2]
          this.styles[key].params.obscure.value=boxShadow[3]
          this.styles[key].params.extend.value = boxShadow[4]
          this.styles[key].params.color.value=boxShadow[5]
        }else{
          this.styles[key].value = styles[key]
        }

      }
    },
    choiceStyle(attr, value) {
      this.setterData.styles[attr] = value
      this.css = `.main{\n${objectToCss(this.setterData.styles)}\n}`
    },
    deleteStyle(attr) {
      delete this.setterData.styles[attr]
      this.css = `.main{\n${objectToCss(this.setterData.styles)}\n}`
    },
    printCss() {
      this.setterData.styles = analysisCssText(this.css)
      this.changStyle(this.setterData.styles)
    },
    changeValue(attr, param) {
      if (!param|| param === "") {
        this.deleteStyle(attr)
      } else {
        this.choiceStyle(attr, param)
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
          let width = a.params['width']
          let height = a.params['height']
          value = `${!width.value ? "auto" : width.value} ${!height.value ? "auto" : height.value}`
        }
        this.choiceStyle(attr, value)
      } else {
        a.value = ''
        this.deleteStyle(attr)
      }
    },

    changeBackgroundSize() {
      this.choiceStyle('background-size', `${this.styles['background-size'].params['width']} ${this.styles['background-size'].params['height']}`)
    },

    changeBackgroundPosition() {
      console.log(this.styles['background-position'].params)
      this.choiceStyle('background-position', `${this.styles['background-position'].params.left} ${this.styles['background-position'].params.top}`)
    },
    choiceBackgroundPosition(position, param) {
      if (position.choice === param.label) {
        position.choice = ""
        this.choiceStyle('background-position', `auto auto`)
        this.styles['background-position'].params = {
          left: 'auto',
          top: 'auto'
        }
      } else {
        position.choice = param.label
        position.params.left = param.value.left
        position.params.top = param.value.top
        this.changeBackgroundPosition()
      }
    },

    changeBoxShadow() {
      let params = this.styles['box-shadow'].params
      this.choiceStyle("box-shadow",
          `${params['inset'].value ? 'inset' : ""} ${params['x'].value} ${params['y'].value} ${params['obscure'].value} ${params['extend'].value} ${params['color'].value}`)
    },
    changeBorderRadio(attr, value) {
      if (attr === 'border-radius') {
        this.deleteStyle('border-top-left-radius')
        this.deleteStyle('border-top-right-radius')
        this.deleteStyle('border-bottom-left-radius')
        this.deleteStyle('border-bottom-right-radius')
        this.styles['border-top-left-radius'].value = 0
        this.styles['border-top-right-radius'].value = 0
        this.styles['border-bottom-left-radius'].value = 0
        this.styles['border-bottom-right-radius'].value = 0
      } else {
        this.deleteStyle('border-radius')
        this.styles['border-radius'].value = 0
      }
      this.choiceStyle(attr, value+'px')
    }
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

.collapseGroup {
  margin-top: 5px;
}

:deep(.el-collapse-item__header) {
  background-color: #c6e2ff;
}

:deep(.item-item .el-collapse-item__header) {
  background-color: #f2f2f2;
  margin: 5px;
}
</style>
