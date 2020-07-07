### 富文本编辑器

```
<template>
    <kom-wang-editor v-model="content" :isClear="isEditorClear" @change="editorChange"></kom-wang-editor>
</template>

<script>
    export default {
        data() {
            return {
                content: "",
                isEditorClear: false
            }
        },
        methods: {
            editorChange(val) {
                console.log(val);
            }
        }
    }
</script>
```
