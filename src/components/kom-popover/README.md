```
<template>
  <div>
    <!-- 点击按钮 显示侧滑菜单 -->
    <button @click="setPopover(true)">显示</button>
    <button @click="setPopover(false)">隐藏</button>

    <!-- popover -->
    <kom-popover :popoverShow="popoverShow" v-on:hidePopover="setPopover(false)">
      <div>popover content</div>
    </kom-popover>
  </div>
</template>

<script>
  import KomPopover from '@/components/kom-popover'

  export default {
    data() {
      return {
        popoverShow: false
      }
    },
    components: {
      KomPopover
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
