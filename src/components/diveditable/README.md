### 可编辑的DIV

```
<template>
    <div>
        <kom-diveditable placeholder="点击添加内容" v-model="contentText"></kom-diveditable>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contentText: ""
            }
        }
    }
</script>
```
