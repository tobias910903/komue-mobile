```
<template>
    <div>
        <!-- 点击按钮 显示侧滑菜单 -->
        <button @click="setDrawer(true)">显示</button>
        <button @click="setDrawer(false)">隐藏</button>
        
        <!-- 侧滑菜单 -->
        <kom-drawer direction="top" :drawerShow="drawerShow" v-on:hideDrawer="setDrawer(false)"></kom-drawer>
    </div>
</template>

<script>
    import KomDrawer from '@/components/kom-drawer'
    
    export default {
        data() {
            return {
                drawerShow: false // 默认值
            }
        },
        components: {
            KomDrawer
        },
        methods: {
            setDrawer(val) {
                this.drawerShow = val;
            }
        }
    }
</script>
```

> 抽屉
