<template>
    <ul class="kom-list-box">
        <slot></slot>
    </ul>
</template>

<style lang="less" scoped>
    .kom-list-box {
        background: rgba(255, 255, 255, 1);
        border-top: 1px solid rgba(242, 242, 242, 1);
        border-bottom: 1px solid rgba(242, 242, 242, 1);
    }
</style>
