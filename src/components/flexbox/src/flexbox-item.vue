<template>
    <div class="kom-flexbox-item" :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-flexbox-item',
        props: {
            align: {
                validator(val) {
                    return ['top', 'center', 'bottom'].indexOf(val) > -1;
                },
                default: 'center'
            }
        },
        computed: {
            classes() {
                if (this.align === 'top') {
                    return 'kom-flexbox-item-start';
                } else if (this.align === 'bottom') {
                    return 'kom-flexbox-item-end';
                } else {
                    return 'kom-flexbox-item-center';
                }
            }
        }
    }
</script>
