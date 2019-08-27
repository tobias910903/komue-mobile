<template>
    <div class="kom-popover">
        <transition name="fadeup">
            <div class="content" v-show="popover.showPopover">
                <slot></slot>
            </div>
        </transition>

        <transition name="fade">
            <div class="mask" @click="cancel" v-show="popover.showPopover"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'komPopover',
    props: {
        popoverOption: Object
    },
    data() {
        return {
            resolve: '',
            promise: '' // 保存promise对象
        }
    },
    computed: {
        popover: function() { // 调用父组件中的popoverOption传递的参数 {{popover.showPopover}} 
            let options = this.popoverOption;
            return {
                showPopover: options.showPopover,
            }
        }
    },
    methods: {
        cancel() {
            this.resolve('cancel');
        },
        confirm() {
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
            });
            return this.promise;
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
        &.fadeup-enter-active, &.fadeup-leave-active{
          transition: all .3s ease;
        }
        &.fadeup-enter, &.fadeup-leave-to{
          opacity: 0;
          transform: translate(-50%, -40%);
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 40001;
        background: rgba(0,0,0,.5); 
        opacity: 1;
        &.fade-enter-active, &.fade-leave-active{
          transition: all .3s ease;
        }
        &.fade-enter, &.fade-leave-to{
          opacity: 0;
        }
    }
}
</style>
