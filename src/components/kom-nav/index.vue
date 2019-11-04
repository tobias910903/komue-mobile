<template>
    <div class="kom-nav">
        <!--<div class="kom-pull-left"><i class="kiconfont kiconzuo"></i></div>-->
        <h3 class="kom-title">{{title}}</h3>
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
    .kom-nav {
        top: 0;
        overflow: hidden;
        height: 44px;
        -webkit-box-shadow: 0 1px 6px #cccccc;
        box-shadow: 0 1px 6px #cccccc;
        
        .kom-pull-left{
            padding-left: 10px;
            height: 44px;
            line-height: 44px;
        }
        
        .kiconfont {
            margin-right: -10px;
            margin-left: -10px;
            padding-right: 10px;
            padding-left: 10px;
        }
        
        .kom-title {
            font-size: 17px;
            font-weight: 500;
            line-height: 44px;
            position: absolute;
            display: block;
            width: 100%;
            margin: 0;
            padding: 0;
            text-align: center;
            white-space: nowrap;
            color: #000000;
        }
    }
</style>
