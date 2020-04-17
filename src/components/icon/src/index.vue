<template>
    <i class="kiconfont" :class="icon" @click="sendHandler" :style="{'color': color, 'font-size': size}"></i>
</template>

<script>
    export default {
        name: 'KomIcon',
        props: {
            icon: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            }
        },
        methods: {
            sendHandler(){
                this.$emit("click");
            }
        }
    }
</script>

<style>
    @import "../../../assets/styles/components/iconfonts/iconfont.css";
</style>
