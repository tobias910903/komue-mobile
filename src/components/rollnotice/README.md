### 滚动公告

```
<template>
    <kom-rollnotice autoplay="2000">
        <kom-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</kom-rollnotice-item>
        <kom-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</kom-rollnotice-item>
        <kom-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</kom-rollnotice-item>
    </kom-rollnotice>
</template>
```

<br/>

<h2>API</h2>
<h3><strong>kom-rollnotice</strong>【slot】</h3>
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
<h3><strong>kom-rollnotice</strong>【props】</h3>
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
            <td>height</td>
            <td>高度（px）</td>
            <td>Number</td>
            <td>-</td>
            <td>30</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>切换速度（毫秒）</td>
            <td>Number</td>
            <td>-</td>
            <td>500</td>
        </tr>
        <tr>
            <td>autoplay</td>
            <td>自动播放时间（毫秒）</td>
            <td>Number</td>
            <td>-</td>
            <td>3000</td>
        </tr>
        <tr>
            <td>align</td>
            <td>对齐方式</td>
            <td>String</td>
            <td><span>left</span>, <span>center</span>, <span>right</span></td>
            <td>left</td>
        </tr>
        <tr>
            <td>direction</td>
            <td>滚动方向</td>
            <td>String</td>
            <td><span>up</span>, <span>down</span></td>
            <td>up</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-rollnotice-item</strong>【slot】</h3>
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
