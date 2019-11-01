```
<template>
    <div>
        <kom-button type="danger" text="按钮"></kom-button>
        <kom-button type="primary" text="按钮"></kom-button>
        <kom-button type="success" text="按钮"></kom-button>
        <kom-button type="warning" text="按钮"></kom-button>
        <kom-button type="grey" text="按钮"></kom-button>
        <kom-button text="按钮"></kom-button>
        <br /><br />
        <kom-button type="danger" text="按钮" size="small"></kom-button>
        <kom-button type="primary" text="按钮" size="small"></kom-button>
        <kom-button type="success" text="按钮" size="small"></kom-button>
        <kom-button type="warning" text="按钮" size="small"></kom-button>
        <kom-button type="grey" text="按钮" size="small"></kom-button>
        <kom-button text="按钮" size="small"></kom-button>
        <br /><br />
        <kom-button type="danger" text="按钮" size="block"></kom-button>
        <kom-button type="primary" text="按钮" size="block"></kom-button>
        <kom-button type="success" text="按钮" size="block"></kom-button>
        <kom-button type="warning" text="按钮" size="block"></kom-button>
        <kom-button type="grey" text="按钮" size="block"></kom-button>
        <kom-button text="按钮" size="block"></kom-button>
        <br /><br />
        <kom-button type="danger" text="按钮" size="block" outlined></kom-button>
        <kom-button type="primary" text="按钮" size="block" outlined></kom-button>
        <kom-button type="success" text="按钮" size="block" outlined></kom-button>
        <kom-button type="warning" text="按钮" size="block" outlined></kom-button>
        <kom-button type="grey" text="按钮" size="block" outlined></kom-button>
        <kom-button text="按钮" size="block" outlined></kom-button>
        <br /><br />
        <kom-button type="success" text="点击事件" @click="btnClick"></kom-button>
    </div>
</template>

<script>
    export default {
        methods:{
            btnClick(){
                console.log("按钮点击");
            }
        }
    }
</script>
```
