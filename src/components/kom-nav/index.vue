<template>
    <div class="kom-nav">
        <div class="kom-nav-left" @click="backFun">
            <i class="kiconfont kiconzuo" v-if="backIcon != undefined"></i>{{leftText}}
        </div>

        <h3 class="kom-title">{{title}}</h3>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
            leftText: {
                type: String,
                default: ""
            },
            backIcon: {
                type: String
            }
        },
        methods: {
            backFun(){
                this.$emit('backFun');
            }
        }
    };
</script>

<style lang="less" scoped>
    .kom-nav {
        position: relative;
        z-index: 100;
        height: 44px;
        -webkit-box-shadow: 0 0 4px #dddddd;
        box-shadow: 0 0 4px #dddddd;
        
        .kom-nav-left{
            display: inline-block;
            position: relative;
            z-index: 10;
            padding-left: 15px;
            height: 44px;
            line-height: 44px;
            .kiconfont{
                font-size: 14px;
            }
        }

        .kom-title {
            position: absolute;
            top: 0;
            font-size: 14px;
            font-weight: 500;
            line-height: 44px;
            width: 100%;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #333333;
        }
    }
</style>
