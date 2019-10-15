```
<template>
  <div>
    <kom-diveditable placeholder="点击添加内容" v-model="contentText"></kom-diveditable>
  </div>
</template>

<script>
// 引入组件
import KomDiveditable from "@/components/kom-diveditable"

export default {
  data() {
    return {
      contentText: ""
    }
  },
  components: {
    KomDiveditable
  }
}
</script>
```

> div contenteditable 双向绑定
