```
<template>
  <div>
    <diveditable class="kom-card-body" placeholder="点击添加内容" v-model="contentText"></diveditable>
  </div>
</template>

<script>
  // 引入组件
  import diveditable from "@/components/diveditable"

  export default {
    components: {
      diveditable
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
