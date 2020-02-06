<template>
    <li :class="!!$slots.icon ? 'kom-timeline-custom-item' : 'kom-timeline-item'">
        <template v-if="!!$slots.icon">
            <span class="kom-timeline-icon"><slot name="icon"></slot></span>
        </template>
        <template v-else>
            <em class="kom-timeline-icon"></em>
        </template>
        <slot></slot>
    </li>
</template>

<script type="text/babel">
    export default {
        name: 'kom-timeline-item'
    }
</script>
