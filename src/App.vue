<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive :max="10">
                <router-view/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                transitionName: ''
            }
        },
        computed: {},
        methods: {},
        watch: {
            $route(to, from) { // 监听路由
                console.log("当前路由", to.name + ", 上一级路由", from.name);
            }
        },
        mounted() {
            this.$navigation.on('forward', to => {
                console.log('forward');
                this.transitionName = 'slide-left';
                // this.transitionName = to.route.meta.isTransition ? 'slide-left' : ''
            });

            this.$navigation.on('back', (to, from) => {
                console.log('back');
                this.transitionName = 'slide-right';

                // if (to.route.meta.isTransition || from.route.meta.isTransition) {
                //     this.transitionName = 'slide-right'
                // } else {
                //     this.transitionName = ''
                // }
            });

            // 入口页...

        }
    }
</script>

<style lang="less" scoped>
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 450ms;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backface-visibility: hidden;
        perspective: 800;
    }
    
    .slide-right-enter {
        opacity: 1;
        transform: translate3d(-100%, 0, 0);
    }
    
    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    
    .slide-left-enter {
        opacity: 1;
        transform: translate3d(100%, 0, 0);
    }
    
    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>
