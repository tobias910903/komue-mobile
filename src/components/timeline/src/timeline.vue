<template>
    <div class="kom-timeline">
        <ul class="kom-timeline-content">
            <slot></slot>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-timeline',
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/timeline.less';
</style>
