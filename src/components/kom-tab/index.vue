<template>
    <div class="kom-tab">
        <div class="kom-tab-item kom-active" v-for="(i, index) in list" :key="index" @click="itemClick(i)">
            <i :class="i.icon"></i>
            <div class="kom-tab-label">{{i.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: []
            }
        },
        methods: {
            itemClick(item) { // 触发父组件回调
                this.$emit("click", item);
            }
        },
    };
</script>

<style lang="less" scoped>
    .kom-tab {
        bottom: 0;
        display: table;
        width: 100%;
        height: 50px;
        padding: 0;
        table-layout: fixed;
        border-top: 0;
        border-bottom: 0;
        -webkit-touch-callout: none;
        .kom-tab-item {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;
            &.kom-active {
                color: #007aff;
            }
            .kiconfont {
                top: 3px;
                width: 24px;
                height: 24px;
                padding-top: 0;
                padding-bottom: 0;
                &:active {
                    background: none;
                }
                & ~ .kom-tab-label {
                    font-size: 11px;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>
