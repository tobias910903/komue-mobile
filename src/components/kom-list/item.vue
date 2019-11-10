<template>
    <li :class="itemClass" @click="handleClick">
        <slot></slot> {{title}}
    </li>
</template>

<script>
    export default {
        props: {
            navigate: {
                type: String
            },
            title:{
                type: String,
                default: ""
            }
        },
        computed: {
            itemClass: function () {
                return this.navigate !== undefined && 'kom-list-navigate-right';
            }
        },
        methods:{
            handleClick(){
                this.$emit('click');
            }
        }
    };
</script>

<style lang="less" scoped>
    li {
        position: relative;
        padding: 0 20px;
        height: 44px;
        line-height: 44px;
        color: #172B4D;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:active{
            background-color: #f8f8f8;
        }
        
        & + li {
            border-top: 1px solid rgba(242, 242, 242, 1);
        }
        
        &.kom-list-navigate-right {
            position: relative;
            padding-right: 35px;
            
            &:after {
                position: absolute;
                right: 20px;
                font-family: "kiconfont" !important;
                content: "\e621";
                font-size: 16px;
            }
        }
    }
</style>
