<template>
    <div class="kom-drawer">
        <transition :name="fold">
            <div class="content" :class="fold" v-show="isShow">
                <slot></slot>
            </div>
        </transition>
        
        <transition name="fade">
            <div class="mask" @click.stop.prevent="hide" v-show="isShow"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "KomDrawer",
        data() {
            return {
                fold: "fold-right" // 弹窗层的方向 top right bottom left
            }
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            direction: {
                type: String,
                default: 'right'
            }
        },
        methods: {
            hide() {
                this.$emit('toggle', false);
            }
        },
        mounted() {
            this.fold = "fold-" + this.direction;
        }
    }
</script>

<style scoped lang="less">
    .kom-drawer {
        .content {
            position: fixed;
            z-index: 50;
            background-color: #ffffff;
            
            &.fold-top {
                top: 0;
                left: 0;
                right: 0;
                height: 50%;
            }
            
            &.fold-right {
                top: 0;
                right: 0;
                bottom: 0;
                width: 70%;
            }
            
            &.fold-bottom {
                right: 0;
                left: 0;
                bottom: 0;
                height: 50%;
            }
            
            &.fold-left {
                top: 0;
                left: 0;
                bottom: 0;
                width: 70%;
            }
            
            &.fold-top-enter-active, &.fold-top-leave-active {
                transition: all .3s;
            }
            
            &.fold-top-enter, &.fold-top-leave-to {
                top: -50%;
                opacity: 0;
            }
            
            &.fold-right-enter-active, &.fold-right-leave-active {
                transition: all .3s;
            }
            
            &.fold-right-enter, &.fold-right-leave-to {
                right: -70%;
                opacity: 0;
            }
            
            &.fold-bottom-enter-active, &.fold-bottom-leave-active {
                transition: all .3s;
            }
            
            &.fold-bottom-enter, &.fold-bottom-leave-to {
                bottom: -50%;
                opacity: 0;
            }
            
            &.fold-left-enter-active, &.fold-left-leave-active {
                transition: all .3s;
            }
            
            &.fold-left-enter, &.fold-left-leave-to {
                left: -70%;
                opacity: 0;
            }
        }
        
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 40;
            background: rgba(7, 17, 27, 0.5);
            opacity: 1;
            
            &.fade-enter-active, &.fade-leave-active {
                transition: all 0.3s ease;
            }
            
            &.fade-enter, &.fade-leave-to {
                opacity: 0;
            }
        }
    }
</style>
