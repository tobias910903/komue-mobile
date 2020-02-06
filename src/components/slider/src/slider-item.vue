<template>
    <div class="kom-slider-item">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-slider-item',
        mounted() {
            this.$nextTick(this.$parent.init);
        }
    }
</script>
