<template>
  <div v-show="showContextmenu" :style="contextmenuStyle" class="contextmenu">
    <div v-for="(item,index) in contextmenuList" :key="index">
      <el-button
          size="large"
          @click="clickFunc(item)">{{ item.label }}
      </el-button>
    </div>
  </div>
</template>

<script>
  import {SimpleStore, MouseEventStore} from '@/stores/counter'

  export default {
    name: "Contextmenu",
    props: {
      contextmenuList: {
        type: Array,
        default: function () {
          return []
        }
      },
      showContextmenu: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      contextmenuStyle: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    emits: ['update:showContextmenu'],
    data() {
      return {}
    },
    setup() {
      const simpleStore = SimpleStore()
      const mouseEventStore = MouseEventStore()
      return {
        // 您可以返回整个 store 实例以在模板中使用它
        simpleStore,
        mouseEventStore
      }
    },
    methods: {
      clickFunc(item) {
        this.$emit('update:showContextmenu', false)
        item.func(this.mouseEventStore.mouseEvent)
      },
    }
  }

</script>

<style scoped>
  .contextmenu {
    position: absolute;
    width: 60px;
    z-index: 1000;
  /*  防止按钮无法点击*/
  }

  ::v-deep(.el-button+.el-button) {
    margin-left: 0px;
  }
</style>
