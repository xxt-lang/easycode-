<template>
  <el-form
      ref="ruleFormRef"
      v-bind="propValue.attributes"
      v-model="formValue"
      :rules="rulesValue"
      @validate="validateMethod"
  >
    <el-form-item
        v-for="item in propValue.children"
        :key="item.id"
        v-bind="item.attributes"
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
import {getPageData, setPageData, execMethod,bindRefs} from "@/utils/core";
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
        return getPageData(this.propValue.attributes['modelValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['modelValue'], value, this.EcVue)
      }
    },
    rulesValue: {
      get() {
        return getPageData(this.propValue.attributes['rules-bindValue'], this.EcVue)
      },
      set(value) {
        setPageData(this.propValue.attributes['rules-bindValue'], value, this.EcVue)
      }
    },
  },
  mounted() {
    bindRefs(this.propValue.attributes, this.$refs['formRef'], 'formRef', this.EcVue)
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
