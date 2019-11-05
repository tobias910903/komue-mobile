<template>
    <ul class="kom-list-box">
        <slot></slot>
    </ul>
</template>

<style lang="less" scoped>
    .kom-list-box {
        background: rgba(255, 255, 255, 1);
        -webkit-box-shadow: 0 0 10px 0 rgba(34, 58, 156, 0.1);
        box-shadow: 0 0 10px 0 rgba(34, 58, 156, 0.1);
    }
</style>
