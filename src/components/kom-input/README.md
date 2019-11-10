```
<template>
    <div>
        <kom-input type="text" v-model="a" placeholder="用户名..."></kom-input>
        <kom-input type="password" v-model="b"></kom-input>
        <kom-input v-model="c" label="昵称"></kom-input>
        <kom-input type="textarea" v-model="d"></kom-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                a: '',
                b: '',
                c: '',
                d: ''
            }
        }
    }
</script>
```
