<template>
    <div>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-scrollnav-panel',
        props: {
            label: String
        },
        mounted() {
            this.$parent.addItem({label: this.label, _uid: this._uid});
        }
    }
</script>
