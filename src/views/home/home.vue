<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']" router>
            <el-sub-menu index="1">
              <template #title>
                医院设置管理
              </template>
                <el-menu-item index="user">医院设置列表</el-menu-item>
              <el-menu-item index="dataDic">医院设置添加</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
              >
                <setting
                />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>
        <el-main>
          <el-scrollbar>
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

import {useRouter} from 'vue-router'

export default {
  name: 'home',
  props: {},
  setup (props, context) {
    const router = useRouter();
    console.log(router.getRoutes())
    return {}
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.common-layout {
  height: 100%;
}
</style>
