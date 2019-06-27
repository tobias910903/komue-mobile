```
<template>
  <div>
    <!-- 点击按钮 显示侧滑菜单 -->
    <button @click="setSidebar(true)">显示</button>
    <button @click="setSidebar(false)">隐藏</button>
  
    <!-- 侧滑菜单 -->
    <sidebar :sidebarShow="sidebarShow" v-on:hideSidebar="setSidebar">插槽内容</sidebar>
  </div>
</template>
 
<script>
  // 引入 侧滑菜单组件
  import sidebar from '@/components/sidebar'
 
  export default {
    name: 'komSideBar',
    components: { 
      sidebar 
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