<template>
    <div class="kom-row-cell kom-row">
        <router-link :to="{path : i.href}" :class="'kom-col-'+ col" v-for="(i, index) in list" :key="index">
            {{i.title}}
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
            col: {
                type: String,
                default: 3
            }
        },
        data() {
            return {};
        },
        mounted() {
        
        },
        methods: {}
    };
</script>
<style lang="less" scoped>
    .kom-row-cell {
        text-align: center;
        
        & > [class*='kom-col-'] {
            padding: 20px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
</style>
