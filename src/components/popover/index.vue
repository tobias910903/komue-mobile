<template>
    <div class="kom-popover">
        <div class="mask" @click="cancel"></div>
        <div class="popover-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'kompopover',
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
        popover: function() { // 调用父组件中的popoverOption传递的参数 {{popover.params}} 
            let options = this.popoverOption;
            return {
                params: options.params,
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
    position: relative;
    .popover-content {
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
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 40001;
        background: rgba(0,0,0,.5);
    }
}
</style>
