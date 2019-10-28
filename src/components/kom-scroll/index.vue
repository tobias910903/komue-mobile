<template>
    <div class="kom-scroll" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
                scroller: null
            }
        },
        mounted() {
            this.scroller = new BScroll(this.$refs.scroll, {
                bounce: {
                    left: false,
                    right: false
                },
                bounceTime: 300
            });
            this.scroller.refresh();
        }
    };
</script>

<style lang="less" scoped>
    .kom-scroll {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: auto;
        -webkit-overflow-scrolling: touch;
        .content{

        }
    }
</style>
