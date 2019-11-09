<template>
    <div class="kom-tab">
        <div class="kom-tab-item" :class="i.routeName == activeTab ? 'kom-active' : ''" v-for="(i, index) in list" :key="index" @click="itemClick(i)">
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
            },
            activeTab: {
                type: String
            }
        },
        methods: {
            itemClick(item) { // 触发父组件回调
                this.$emit("click", item);
            }
        }
    };
</script>

<style lang="less" scoped>
    .kom-tab {
        display: table;
        position: fixed;
        bottom: 0;
        padding: 0;
        width: 100%;
        height: 50px;
        background-color: #ffffff;
        table-layout: fixed;
        border-top: 1px solid rgba(242, 242, 242, 1);
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
            &:active {
                background-color: rgba(155, 155, 155, .1);
            }
            .kiconfont {
                width: 24px;
                height: 24px;
                font-size: 20px;
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
            .kom-tab-label {
                font-size: 12px;
            }
        }
    }
</style>
