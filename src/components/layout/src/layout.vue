<template>
    <section class="kom-flexview">
        <slot name="navbar" v-if="showNavbar">
            <kom-navbar :title="title" v-if="!!title">
                <router-link :to="link || '/'" slot="left">
                    <kom-navbar-back-icon></kom-navbar-back-icon>
                </router-link>
            </kom-navbar>
        </slot>

        <slot name="top"></slot>

        <section class="kom-scrollview" ref="scrollView" id="scrollView">
            <slot></slot>
        </section>

        <slot name="bottom"></slot>

        <slot name="tabbar"></slot>
    </section>
</template>

<script type="text/babel">
    export default {
        name: 'kom-layout',
        props: {
            link: String,
            title: String,
            showNavbar: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/styles/components/layout.less";
</style>
