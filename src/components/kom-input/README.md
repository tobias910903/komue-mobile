```
<template>
    <div>
        <kom-input type="text" v-model="a"></kom-input>
        <kom-input type="password" v-model="b"></kom-input>
        <kom-input v-model="c"></kom-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                a: '',
                b: '',
                c: ''
            }
        },
        methods: {
            submit() {
                console.log(this.a, this.b, this.c);
            }
        }
    }
</script>
```
