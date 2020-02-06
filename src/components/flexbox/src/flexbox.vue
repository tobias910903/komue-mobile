<template>
    <div class="kom-flexbox" :class="direction == 'vertical' ? 'kom-flexbox-vertical' : 'kom-flexbox-horizontal'">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-flexbox',
        props: {
            direction: {
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) > -1;
                },
                default: 'horizontal'
            }
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/flexbox.less';
</style>
