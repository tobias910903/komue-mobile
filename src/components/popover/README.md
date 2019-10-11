```
<template>
  <div>
    <!-- 点击按钮 显示侧滑菜单 -->
    <button @click="setPopover(true)">显示</button>
    <button @click="setPopover(false)">隐藏</button>

    <!-- popover -->
    <popover :popoverShow="popoverShow" v-on:hidePopover="setPopover(false)">
      <div>popover content</div>
    </popover>
  </div>
</template>

<script>
// 引入 侧滑菜单组件
import Popover from '@/components/popover'

export default {
  name: 'komPopover',
  components: {
    Popover
  },
  data() {
    return {
      popoverShow: false
    }
  },
  methods: {
    setPopover(val){
      this.popoverShow = val;
    }
  }
}
</script>
```

> popover 模态框
