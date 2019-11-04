```
<template>
    <div>
        <kom-input v-model="a"></kom-input>
        <kom-input v-model="b"></kom-input>
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
