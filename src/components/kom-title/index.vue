<template>
    <div class="kom-section-title">
        <h5>{{title}}</h5>
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
        margin: 12px 0 8px;
        padding: 0 10px;
        font-size: 12px;
        color: #aaaaaa;
        h5{
            display: inline-block;
            font-weight: 400;
            letter-spacing: 1px;
        }
    }
</style>
