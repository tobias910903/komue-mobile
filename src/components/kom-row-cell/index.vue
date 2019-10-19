<template>
    <div class="kom-row-cell kom-row">
        <router-link :to="{path : i.href}" :class="'kom-col-'+ col" v-for="(i, index) in list" :key="index">
            <i :class="i.icon"></i>
            <p>{{i.title}}</p>
        </router-link>
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
            'col': function () {
                return this.rowNum == '3' ? '4' : '3';
            }
        }
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
                margin-top: 8px;
                font-size: 12px;
            }
        }
    }
</style>
