```
<template>
    <div>
        <!-- 点击按钮 显示侧滑菜单 -->
        <button @click="toggle(true)">显示</button>
        <button @click="toggle(false)">隐藏</button>
        
        <!-- popover -->
        <kom-popover :isShow="isShow" @toggle="toggle()">
            <div>popover content</div>
        </kom-popover>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            toggle(val){
                this.isShow = val;
            }
        }
    }
</script>
```
