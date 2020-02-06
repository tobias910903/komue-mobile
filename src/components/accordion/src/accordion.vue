<template>
    <div class="kom-accordion">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-accordion',
        data() {
            return {
                opening: false
            }
        },
        props: {
            accordion: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            open(uid) {
                if (this.opening) return;

                this.$children.forEach(item => {
                    if (item._uid === uid) {
                        item.show ? item.closeItem() : item.openItem();
                    } else {
                        !this.accordion && item.closeItem();
                    }
                });
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/styles/components/accordion.less";
</style>
