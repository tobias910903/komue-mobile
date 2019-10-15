<template>
    <div class="kom-modal">
        <transition name="fadeup">
            <div class="content" v-show="modal.showModal">
                <h3 class="title">{{modal.title}}</h3>
                <div class="text">{{modal.text}}</div>
                <div class="btn-group">
                    <div class="btn" @click="cancel">{{modal.cancelButtonText}}</div>
                    <div class="btn" @click="submit">{{modal.confirmButtonText}}</div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="mask" v-show="modal.showModal"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'komModal',
    props: {
        modalOption: Object
    },
    data() {
        return {
            resolve: '',
            reject: '',
            promise: '' // 保存promise对象
        }
    },
    computed: {
        modal: function() {
            let options = this.modalOption;
            return {
                showModal: options.showModal || false,
                title: options.title || '提示',
                text: options.text || '',
                cancelButtonText: options.cancelButtonText || '取消',
                confirmButtonText: options.confirmButtonText || '确定'
            }
        }
    },
    methods: {
        submit() {
            this.resolve('submit'); //确定,将promise断定为完成态
        },
        cancel() {
            this.reject('cancel'); // 取消,将promise断定为reject状态
        },
        confirm() { // 创建promise对象，给父组件调用
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
            return this.promise;
        }
    }
}
</script>

<style scoped lang="less">
.kom-modal {
    position: relative;
    .content {
        position: fixed;
        box-sizing: border-box;
        padding: 20px;
        width: 90%;
        min-height: 140px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-border-radius: 3px;
        border-radius: 3px;
        background: #fff;
        z-index: 50002;
        .title {
            font-size: 16px;
            font-weight: 600;
            line-height: 30px;
        }
        .text {
            font-size: 14px;
            line-height: 30px;
            color: #555;
        }
        .btn-group {
            display: flex;
            position: absolute;
            right: 10px;
            bottom: 10px;
            .btn {
                cursor: pointer;
                padding: 10px 20px;
                font-size: 14px;
                &:last-child {
                    color: #76D49B;
                }
            }
        }
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
        z-index: 50001;
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
