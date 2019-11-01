```
<template>
    <div>
        <!-- 点击按钮 显示侧滑菜单 -->
        <button @click="toggle(true)">显示</button>
        <button @click="toggle(false)">隐藏</button>
        
        <!-- 侧滑菜单 -->
        <kom-drawer direction="top" :isShow="isShow" @toggle="toggle"></kom-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false // 默认值
            }
        },
        methods: {
            toggle(val) {
                this.isShow = val;
            }
        }
    }
</script>
```
