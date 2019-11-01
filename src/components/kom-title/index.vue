<template>
    <div class="kom-section-title">
        <h3>{{title}}</h3>
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
        margin: 12px 0 6px;
        padding: 0 12px;
        color: #777777;
        
        h3 {
            display: inline-block;
            font-weight: 100;
            font-size: 14px;
        }
    }
</style>
