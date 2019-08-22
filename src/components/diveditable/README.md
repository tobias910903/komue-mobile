```
<template>
  <div>
    <diveditable class="kom-card-body" placeholder="点击添加内容" v-model="contentText"></diveditable>
  </div>
</template>

<script>
  // 引入组件
  import Diveditable from "@/components/diveditable"

  export default {
    components: {
      Diveditable
    },
    data() {
      return {
        contentText: ""
      }
    },
    methods: {

    }
  }
</script>
```

> div contenteditable 双向绑定
