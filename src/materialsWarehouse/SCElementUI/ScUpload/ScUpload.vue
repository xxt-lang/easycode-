<template>
  <el-upload
      v-bind="propValue.attributes"
      :headers="headersBindValue"
      :data="dataBindValue"
      :on-change="onChangeBindValue"
      :on-preview="onPreviewBindValue"
      :on-remove="onRemoveBindValue"
      :on-error="onErrorBindValue"
      :on-exceed="onExceedBindValue"
      :on-progress="onProgressBindValue"
      :on-success="onSuccessBindValue"
      :before-remove="beforeUploadBindValue"
      ref="uploadRef"
  >
      <div class="slotBorder"
           v-container="{id:propValue.children[0].id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
        <Container
            :children="propValue.children[0].children"
            :isPreview="isPreview"
            :EcVue="EcVue"
            :lock="propValue.status.lock"
        ></Container>
      </div>
    <template v-slot:tip>
      <div v-show="propValue.attributes['tip-slot']"
           style="min-height: 32px"
           class="slotBorder"
           v-container="{id:propValue.children[1].id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
        <Container
            :children="propValue.children[1].children"
            :isPreview="isPreview"
            :EcVue="EcVue"
            :lock="propValue.status.lock"
        ></Container>
      </div>
    </template>
  </el-upload>
</template>
<script>
import {getPageData, setPageData, bindRefs} from "@/utils/core";
import Container from "@/views/coreComponents/Container.vue";

export default {
  name: "ScUpload",
  components: {Container},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    },
    isPreview: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    "headersBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['headers-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['headers-bindValue'], value, this.EcVue)
      }
    },
    "dataBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['data-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['data-bindValue'], value, this.EcVue)
      }
    },
    "onPreviewBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-preview-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-preview-bindValue'], value, this.EcVue)
      }
    },
    "onRemoveBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-remove-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-remove-bindValue'], value, this.EcVue)
      }
    },
    "onSuccessBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-success-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-success-bindValue'], value, this.EcVue)
      }
    },
    "onErrorBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-error-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-error-bindValue'], value, this.EcVue)
      }
    },
    "onProgressBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-progress-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-progress-bindValue'], value, this.EcVue)
      }
    },
    "onChangeBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-change-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-change-bindValue'], value, this.EcVue)
      }
    },
    "onExceedBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['on-exceed-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['on-exceed-bindValue'], value, this.EcVue)
      }
    },
    "beforeUploadBindValue": {
      get() {
        // 绑定事件监听
        return getPageData(this.propValue.attributes['before-upload-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['before-upload-bindValue'], value, this.EcVue)
      },
      "beforeRemoveBindValue": {
        get() {
          // 绑定事件监听
          return getPageData(this.propValue.attributes['before-remove-bindValue'], this.EcVue)
        },
        set(value) {
          setPageData(this.propValue.attributes['before-remove-bindValue'], value, this.EcVue)
        }
      },
    },
  },
  mounted() {
    bindRefs(this.propValue.attributes, this.$refs['uploadRef'], 'uploadRef', this.EcVue)
  },
  methods: {}
}
</script>
<style scoped>
.slotBorder {
  border-color: #f2f2f2;
  border-style: solid;
  min-height: 80px;
}
</style>
