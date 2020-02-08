### 多行文本框

```
<template>
    <kom-cell-group title="文本域">
        <kom-cell-item>
            <kom-textarea slot="right" placeholder="请输入您的银行卡卡号和密码" maxlength="100"></kom-textarea>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-textarea</strong>【props】</h3>
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
            <td>maxlength</td>
            <td>最大输入字数</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>初始提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>show-counter</td>
            <td>是否显示计数器</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>更改后调用的方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
