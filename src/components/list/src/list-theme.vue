<template>
    <article class="kom-list" :class="classes">
        <slot></slot>
    </article>
</template>

<script type="text/babel">
    export default {
        name: 'kom-list',
        props: {
            theme: {
                validator(value){
                    return ['1', '2', '3', '4', '5'].indexOf(value + '') > -1;
                },
                default: '1'
            }
        },
        computed: {
            classes() {
                return 'kom-list-theme' + this.theme;
            }
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/list.less';
</style>
