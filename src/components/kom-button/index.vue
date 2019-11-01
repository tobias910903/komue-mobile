<template>
    <div class="kom-btn" :class="btnClass" @click="clickFun">{{text}}</div>
</template>

<script>
    export default {
        name: "KomButton",
        props: {
            text: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: "default"
            },
            size: {
                type: String,
                default: ""
            },
            outlined: {
                type: Boolean
            }
        },
        computed: {
            'btnClass': function () {
                let type = 'kom-btn-' + this.type;
                let outLined = this.outlined ? 'kom-btn-outlined' : '';
                return type + ' ' + this.size + ' ' + outLined;
            }
        },
        methods: {
            clickFun() {
                this.$emit('click');
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../assets/less/_variables.less";
    @import "../../assets/less/_mixins.less";
    
    .kom-btn {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42;
        position: relative;
        display: inline-block;
        margin-bottom: 0;
        padding: 6px 12px;
        cursor: pointer;
        text-align: center;
        vertical-align: top;
        white-space: nowrap;
        color: @dark;
        border: 1px solid @dark-gery;
        border-radius: 3px;
        background-color: @white;
        background-clip: padding-box;
        -webkit-transition: all;
        transition: all;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
        -webkit-transition-duration: .2s;
        transition-duration: .2s;
        
        &.small {
            padding: 3px 8px;
            font-size: 12px;
        }
        
        &.block {
            display: block;
            padding: 8px 0;
            width: 100%;
            .border-box;
        }
        
        &.kom-btn-primary {
            color: @white;
            border: 1px solid @primary;
            background-color: @primary;
            
            &:enabled:active, &.kom-active:enabled {
                color: @white;
                border: 1px solid @primary-disact;
                background-color: @primary-disact;
            }
        }
        
        &.kom-btn-success {
            color: @white;
            border: 1px solid @success;
            background-color: @success;
            
            &:enabled:active, &.kom-active:enabled {
                color: @white;
                border: 1px solid @success-disact;
                background-color: @success-disact;
            }
        }
        
        &.kom-btn-warning {
            color: @white;
            border: 1px solid @warning;
            background-color: @warning;
            
            &:enabled:active, &.kom-active:enabled {
                color: @white;
                border: 1px solid @warning-disact;
                background-color: @warning-disact;
            }
        }
        
        &.kom-btn-danger {
            color: @white;
            border: 1px solid @danger;
            background-color: @danger;
            
            &:enabled:active, &.kom-active:enabled {
                color: @white;
                border: 1px solid @danger-disact;
                background-color: @danger-disact;
            }
        }
        
        &.kom-btn-grey {
            color: @white;
            border: 1px solid @grey;
            background-color: @grey;
            
            &:enabled:active, &.kom-active:enabled {
                color: @white;
                border: 1px solid @grey-disact;
                background-color: @grey-disact;
            }
        }
        
        &.kom-btn-outlined {
            background-color: transparent;
            
            &.kom-btn-primary {
                color: @primary;
            }
            
            &.kom-btn-success {
                color: @success;
            }
            
            &.kom-btn-warning {
                color: @warning;
            }
            
            &.kom-btn-danger {
                color: @danger;
            }
            
            &.kom-btn-grey {
                color: @grey;
            }
        }
    }
</style>
