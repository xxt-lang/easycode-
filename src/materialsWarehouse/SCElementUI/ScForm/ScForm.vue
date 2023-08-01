<template>
  <el-form
      ref="ruleFormRef"
      v-bind="propValue.attributes"
      v-model="formValue"
      :rules="rulesValue"
      @validate="validateMethod"
  >
    <el-form-item
        v-for="(item,index) in propValue.children"
        :key="item.id"
        v-bind="propValue.attributes['form-item'][index]"
    >
      <template v-slot:default>
        <div :class="{formItemContent:!isPreview}"
             v-container="{id:item.id, featherId:propValue.featherId,componentId:propValue.id,status:propValue.status,multiple:true}">
          <Container
              :children="item.children"
              :isPreview="isPreview"
              :EcVue="EcVue"
              :lock="propValue.status.lock"
          ></Container>
        </div>
      </template>
    </el-form-item>
  </el-form>
</template>
<script>
import {getPageData, setPageData, execMethod} from "@/utils/core";
import Container from "@/views/coreComponents/Container.vue";

export default {
  name: "ScForm",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    EcVue: {
      type: Function,
      default: () => {
      }
    }
  },
  components: {
    Container
  },
  computed: {
    formValue: {
      get() {
        // ���¼�����
        return getPageData(this.propValue.attributes['formValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['formValue'], value, this.EcVue)
      }
    },
    rulesValue: {
      get() {
        // ���¼�����
        return getPageData(this.propValue.attributes['rulesValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['rulesValue'], value, this.EcVue)
      }
    },
  },
  methods: {
    validateMethod() {
      if (execMethod(this.propValue.events['validate'],this.EcVue)) {
        this.EcVue[this.propValue.events['validate'].method]()
      }
    },
  }
}
</script>
<style scoped>
.formItemContent {
  width: 100%;
  height: 100%;
  border-color: #c6e2ff;
  border-style: solid;
  min-height: 32px;
}
</style>
