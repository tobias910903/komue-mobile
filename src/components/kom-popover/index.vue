<template>
    <div class="kom-popover">
        <transition name="fold">
            <div class="content" v-show="popoverShow">
                <slot></slot>
            </div>
        </transition>
        
        <transition name="fade">
            <div class="mask" @click.stop.prevent="hide" v-show="popoverShow"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'KomPopover',
        props: {
            popoverShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                data: []
            }
        },
        methods: {
            hide() {
                this.$emit('hidePopover', false);
            }
        }
    }
</script>

<style scoped lang="less">
    .kom-popover {
        .content {
            position: fixed;
            overflow-y: auto;
            box-sizing: border-box;
            padding: 14px;
            width: 90%;
            min-height: 140px;
            max-height: 80%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            -webkit-border-radius: 3px;
            border-radius: 3px;
            background: #fff;
            z-index: 40002;
            
            &.fold-enter-active, &.fold-leave-active {
                transition: all .3s ease;
            }
            
            &.fold-enter, &.fold-leave-to {
                transform: translate(-50%, -40%);
                opacity: 0;
            }
        }
        
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 40001;
            background: rgba(0, 0, 0, .5);
            opacity: 1;
            
            &.fade-enter-active, &.fade-leave-active {
                transition: all .3s ease;
            }
            
            &.fade-enter, &.fade-leave-to {
                opacity: 0;
            }
        }
    }
</style>
