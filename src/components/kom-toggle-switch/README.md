```
<template>
    <div>
        <kom-toggle-switch v-model="testToggle1" v-on:change="tog1"></kom-toggle-switch>
        <p><br /></p>
        <kom-toggle-switch v-model="testToggle2" v-on:change="tog2"></kom-toggle-switch>
    </div>
</template>

<script>
    import KomToggleSwitch from '@/components/kom-toggle-switch'
    export default {
        data(){
            return {
                testToggle1: false,
                testToggle2: true
            }
        },
        components: {
            KomToggleSwitch
        },
        methods:{
            tog1(val){
                this.testToggle1 = val;
            },
            tog2(val){
                this.testToggle2 = val;
            }
        }
    }
</script>
```

> Toggle Switch 开关
