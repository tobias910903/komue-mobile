<template>
    <div class="kom-spinner" :class="color == 'white' ? 'kom-spinner-white' : ''"></div>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: ""
            }
        }
    };
</script>

<style lang="less">
    @import "../../assets/styles/components/spinner.less";
</style>
