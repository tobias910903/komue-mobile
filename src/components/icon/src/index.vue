<template>
    <i class="kiconfont" :class="icon" @click="sendHandler"></i>
</template>

<script>
    export default {
        name: 'KomIcon',
        props: {
            icon: {
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
