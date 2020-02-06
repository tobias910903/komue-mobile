<template>
    <div class="kom-rollnotice-item"><slot></slot></div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-rollnotice-item',
        mounted() {
            this.$parent.init();
        }
    }
</script>
