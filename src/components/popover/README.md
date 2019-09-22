```
<template>
  <div>
    <kom-popover v-show="popoverOption.showPopover" :popover-option="popoverOption" ref="popover">
      <div>popover content</div>
    </kom-popover>
  </div>
</template>

<script>
import KomPopover from '@/components/popover'

export default {
  data() {
    return {
      popoverOption: {
        showPopover: false
      },
    }
  },
  components: {
    KomPopover
  },
  mounted(){
    this.popoverOption.showPopover = true;
    this.$refs.popover.confirm().then(() => {
      this.popoverOption.showPopover = false;
      console.log("关闭popover");
    });
  }
}
</script>
```

> popover 模态框
