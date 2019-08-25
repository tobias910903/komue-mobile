```
<template>
  <div>
    <kom-popover v-show="showPopover" :popover-option="popoverOption" ref="popover">
      <div>popover content</div>
    </kom-popover>
  </div>
</template>

<script>
import KomPopover from '@/components/popover'

export default {
  data() {
    return {
      showPopover: false,
      popoverOption: {
        params: "需要传递的参数 可用可不用"
      },
    }
  },
  components: {
    KomPopover
  },
  mounted(){
    this.showPopover = true;
    this.$refs.popover.confirm().then(() => {
    this.showPopover = false;
    console.log("关闭popover");
    });
  }
}
</script>
```

> popover 模态框
