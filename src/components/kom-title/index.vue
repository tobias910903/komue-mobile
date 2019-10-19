<template>
    <div class="kom-section-title">
        {{title}}
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            }
        }
    };
</script>
<style lang="less" scoped>
    .kom-section-title {
        margin: 15px 0 10px;
        padding: 0 20px;
        font-size: 14px;
        color: #787878;
    }
</style>
