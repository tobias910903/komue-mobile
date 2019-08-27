```
<template>
  <div>
    <!-- 点击按钮 显示侧滑菜单 -->
    <button @click="setSidebar(true)">显示</button>
    <button @click="setSidebar(false)">隐藏</button>
  
    <!-- 侧滑菜单 -->
    <side-bar :sidebarShow="sidebarShow" v-on:hideSidebar="setSidebar(false)"></side-bar>
  </div>
</template>
 
<script>
  // 引入 侧滑菜单组件
  import SideBar from '@/components/sidebar'
 
  export default {
    name: 'komSideBar',
    components: { 
    SideBar
    },
    data() {
      return {
        sidebarShow: false // 默认值
      }
    },
    methods: {
      setSidebar(val){
        this.sidebarShow = val;
      }
    }
  }
</script>
```