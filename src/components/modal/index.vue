<template>
    <div class="kom-modal">
        <div class="mask"></div>
        <div class="modal-content">
            <h3 class="title">{{modal.title}}</h3>
            <div class="text" v-if="modal.isHtml"><slot></slot></div>
            <div class="text" v-if="!modal.isHtml">{{modal.text}}</div>
            <div class="btn-group">
                <div class="btn" @click="cancel">{{modal.cancelButtonText}}</div>
                <div class="btn" @click="submit">{{modal.confirmButtonText}}</div>
            </div>
        </div>
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
            promise: '', // 保存promise对象
        }
    },
    computed: {
        modal: function() {
            let options = this.modalOption;
            return {
                isHtml: options.isHtml || false,
                title: options.title || '提示',
                text: options.text,
                cancelButtonText: options.cancelButtonText ? options.cancelButtonText : '取消',
                confirmButtonText: options.confirmButtonText ? options.confirmButtonText : '确定',
            }
        }
    },
    methods: {
        //确定,将promise断定为完成态
        submit() {
            this.resolve('submit');
        },
        // 取消,将promise断定为reject状态
        cancel() {
            this.reject('cancel');
        },
        //显示confirm弹出,并创建promise对象，给父组件调用
        confirm() {
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
            return this.promise; //返回promise对象,给父级组件调用
        }
    }
}
</script>

<style scoped lang="less">
.kom-modal {
    position: relative;
    .modal-content {
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
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 50001;
        background: rgba(0,0,0,.5);
    }
}
</style>
