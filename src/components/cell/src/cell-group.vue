<template>
    <div class="kom-cell-box">
        <div class="kom-cell-title" v-if="title">{{title}}</div>
        <div class="kom-cell">
            <slot></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script type="text/babel">
    export default{
        name: 'kom-cell-group',
        props: {
            title: String
        }
    }
</script>
