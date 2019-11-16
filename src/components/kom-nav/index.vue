<template>
    <div class="kom-nav">
        <div class="kom-nav-item kom-nav-left">
            <i class="kiconfont kiconzuo" v-if="backIcon != undefined" @click="backFun"></i>
            {{leftText}}
        </div>

        <div class="kom-nav-item kom-nav-right">
            {{rightText}}
            <i class="kiconfont" :class="rightIcon" v-if="rightIcon != undefined" @click="prevFun"></i>
        </div>

        <h3 class="kom-title border-box">{{title}}</h3>
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
            },
            rightText: {
                type: String,
                default: ""
            },
            rightIcon: {
                type: String
            }
        },
        methods: {
            backFun(){
                this.$emit('backFun');
            },
            prevFun(){
                this.$emit('prevFun');
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../assets/less/_mixins.less";

    .kom-nav {
        position: relative;
        z-index: 100;
        height: 44px;
        -webkit-box-shadow: 0 0 4px #dddddd;
        box-shadow: 0 0 4px #dddddd;

        .kom-nav-item{
            display: inline-block;
            position: absolute;
            top: 0;
            z-index: 10;
            height: 44px;
            line-height: 44px;
            .kiconfont{
                font-size: 14px;
            }
        }

        .kom-nav-left{
            left: 0;
            padding-left: 15px;
        }

        .kom-nav-right{
            right: 0;
            padding-right: 15px;
            .kiconfont{
                margin-left: 5px;
                font-size: 14px;
            }
        }

        .kom-title {
            padding: 0 40px;
            font-size: 15px;
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
