<template>
  <div class="kom-drawer">
    <transition name="fold">
      <div class="content" v-show="drawerShow">
        <slot></slot>
      </div>
    </transition>

    <transition name="fade">
      <div class="mask" @click.stop.prevent="hide" v-show="drawerShow"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "komDrawer",
    props: {
      drawerShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        data: []
      }
    },
    methods: {
      hide() {
        this.$emit('hideDrawer', false);
      }
    }
  }
</script>

<style scoped lang="less">
.kom-drawer{
  .content{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    width: 70%;
    background-color: #ffffff;
    &.fold-enter-active, &.fold-leave-active{
      transition: all .3s;
    }
    &.fold-enter,&.fold-leave-to{
      right: -70%;
      opacity: 0;
    }
  }

  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    background: rgba(7, 17, 27, 0.5);
    opacity: 1;
    &.fade-enter-active, &.fade-leave-active{
      transition: all 0.3s ease;
    }
    &.fade-enter, &.fade-leave-to{
      opacity: 0;
    }
  }
}
</style>
