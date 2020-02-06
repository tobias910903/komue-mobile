<template>
    <div class="kom-tabbar-other">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-tabbar-other',
        props: {
            type: {
                validator (value) {
                    return ['link', 'a'].indexOf(value) > -1;
                },
                default: 'link'
            },
            link: {
                type: [String, Object],
                default: ''
            }
        }
    }
</script>
