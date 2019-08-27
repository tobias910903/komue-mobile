<template>
  <div class="kom-sidebar">
    <transition name="fold">
      <div class="content" v-show="sidebarShow">
        <slot></slot>
      </div>
    </transition>

    <transition name="fade">
      <div class="mask" @click.stop.prevent="hide" v-show="sidebarShow"></div>
    </transition>
  </div>
</template>
 
<script>
  export default {
    props: {
      sidebarShow: {
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
        this.$emit('hideSidebar', false);
      }
    }
  }
</script>
 
<style scoped lang="less">
.kom-sidebar{
  .content{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    width: 70%;
    background-color: #ffffff;
    &.fold-enter-active, &.fold-leave-active{
      transition: all .5s;
    }
    &.fold-enter,&.fold-leave-to{
      opacity: 0;
      transform: translateX(70%);
    }
  }
  
  .mask{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 40;
    background: rgba(7, 17, 27, 0.5);
    opacity: 1;
    &.fade-enter-active, &.fade-leave-active{
      transition: all 0.5s ease;
    }
    &.fade-enter, &.fade-leave-to{
      opacity: 0;
    }
  }
}
</style>