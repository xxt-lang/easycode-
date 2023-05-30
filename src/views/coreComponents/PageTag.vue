<template>
  <div>
    <el-row class="toolbar">
      <el-tag
          v-for="(item,index) in pageTagStore.pageTags"
          :key="item.nodeKey"
          :type="pageTagStore.selectPage === item?'':'info'"
          class="mx-1"
          effect="dark"
          closable
          size="large"
          @close="removePage(index)"
          @click = "click(item)"
      >
        {{ item.title }}
      </el-tag>
    </el-row>
  </div>
</template>

<script>
import {PageTagStore} from '@/stores/counter.js'
export default {
  name: "PageTag",
  data() {
    return {
      pages: [
        {title: 'Tag 1'},
        {title: 'Tag 2'},
        {title: 'Tag 3'},
        {title: 'Tag 4'},
        {title: 'Tag 5'},
      ],
    }
  },
  setup() {
    const pageTagStore = PageTagStore()
    return {
      pageTagStore
    }
  },
  computed: {
  },
  methods: {
    removePage(index) {
      if(this.pageTagStore.selectPage == this.pageTagStore.pageTags[index]){
        this.pageTagStore.pageTags[index].selected = false
        if(index >0){
          this.pageTagStore.pageTags[index - 1].selected = true
          this.pageTagStore.selectPage = this.pageTagStore.pageTags[index - 1]
        }
      }
      this.pageTagStore.pageTags.splice(index, 1)
    },
    click(item) {
      this.pageTagStore.selectPage.selected = false
      item.selected = true
      this.pageTagStore.selectPage = item
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 52px;
  background-color: white;
  padding: 10px;
}
.mx-1 {
  margin-left: 5px;

  &:hover {
    cursor: default;
  }
}

</style>
