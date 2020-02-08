### 开关

```
<template>
    <div>
        <kom-switch v-model="switch1"></kom-switch>
        <p>【model: switch1 = {{switch1}}】</p>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                switch1: false
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-switch</strong>【props】</h3>
<div class="table">
    <table>
        <thead>
        <tr>
            <td>参数</td>
            <td>说明</td>
            <td>类型</td>
            <td>可选值</td>
            <td>默认值</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>color</td>
            <td>颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#4CD864</td>
        </tr>
        <tr>
            <td>true-value</td>
            <td>选中时的值</td>
            <td>String, Number, Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>false-value</td>
            <td>选中时的值</td>
            <td>String, Number, Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>size</td>
            <td>开关尺寸</td>
            <td>String</td>
            <td><span>small</span>, <span>normal</span>, <span>large</span></td>
            <td>-</td>
        </tr>
        <tr>
            <td>val</td>
            <td>当前switch设置的额外值，比如列表数据的ID</td>
            <td>Boolean, String, Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>点击后回调，返回是否选中和设置的额外值val</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
