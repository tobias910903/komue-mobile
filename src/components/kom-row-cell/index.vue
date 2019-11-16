<template>
    <div class="kom-row-cell kom-row">
        <div :class="'kom-col-'+ col" v-for="(i, index) in list" :key="index" @click="itemClick(i)">
            <i class="kiconfont" :class="i.icon"></i>
            <p>{{i.title}}</p>
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
            rowNum: {
                type: String,
                default: 3
            }
        },
        computed: {
            col: function () {
                return this.rowNum == '3' ? '4' : '3';
            }
        },
        methods: {
            itemClick(item){ // 触发父组件回调
                this.$emit("click", item);
            }
        },
    };
</script>
<style lang="less" scoped>
    .kom-row-cell {
        padding: 10px 0;
        text-align: center;

        & > [class*='kom-col-'] {
            padding: 25px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            color: #666666;;

            i {
                font-size: 24px;
            }

            p {
                margin-top: 10px;
                font-size: 12px;
            }
        }
    }
</style>
