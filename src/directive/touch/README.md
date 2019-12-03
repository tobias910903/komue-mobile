```
<template>
    <div style="height: 400px; width: 100%; background-color: #007aff"
         v-tap="tap"
         v-longtap="longtap"
         v-swipe="swipe"
         v-swipeup="swipeup"
         v-swiperight="swiperight"
         v-swipedown="swipedown"
         v-swipeleft="swipeleft">
    </div>
</template>

<script>

export default {
    methods: {
        tap(){
            console.log("tap");
        },
        longtap(){
            console.log("longtap");
        },
        swipe(){
            console.log("swipe");
        },
        swipeup(){
            console.log("swipeup");
        },
        swiperight(){
            console.log("swiperight");
        },
        swipedown(){
            console.log("swipedown");
        },
        swipeleft(){
            console.log("swipeleft");
        }
    }
}
</script>
```
