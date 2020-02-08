### 时间轴

```
<template>
    <kom-timeline>
        <kom-timeline-item>
            <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
            <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
        </kom-timeline-item>
        <kom-timeline-item>
            <p>【南宁市】您的订单已到达【南宁安吉站】</p>
            <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
        </kom-timeline-item>
        <kom-timeline-item>
            <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
            <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
        </kom-timeline-item>
        ......
    </kom-timeline>
</template>

<script type="text/babel">
    export default {
        
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-timeline</strong>【slot】</h3>
<div class="table">
    <table>
        <thead>
        <tr>
            <td>name</td>
            <td>描述</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>-</td>
            <td>内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-timeline-item</strong>【slot】</h3>
<div class="table">
    <table>
        <thead>
        <tr>
            <td>name</td>
            <td>描述</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>-</td>
            <td>内容</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>自定义图标</td>
        </tr>
        </tbody>
    </table>
</div>
