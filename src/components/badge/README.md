### 角标

> 样式

```
<template>
    <div>
        <yd-badge>1</yd-badge>
        <yd-badge type="primary">321</yd-badge>
        <yd-badge type="danger">333</yd-badge>
        <yd-badge type="warning">4444</yd-badge>
        <yd-badge type="hollow">55555</yd-badge>
        <yd-badge bgcolor="#000" color="#FFF">666666</yd-badge>
        <yd-badge shape="square">2</yd-badge>
        <yd-badge shape="square" type="primary">321</yd-badge>
        <yd-badge shape="square" type="danger">333</yd-badge>
        <yd-badge shape="square" type="warning">4444</yd-badge>
        <yd-badge shape="square" type="hollow">55555</yd-badge>
        <yd-badge shape="square" bgcolor="#000" color="#FFF">666666</yd-badge>
    </div>
</template>
```

<br/>

<h2>API</h2>
<h3><strong>yd-badge</strong>【slot】</h3>
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
<h3><strong>yd-badge</strong>【props】</h3>
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
            <td>type</td>
            <td>角标类型[默认为灰底白字]</td>
            <td>String</td>
            <td><span>primary</span>, <span>danger</span>, <span>warning</span>, <span>hollow</span></td>
            <td>""</td>
        </tr>
        <tr>
            <td>shape</td>
            <td>角标形状（圆形和方形）</td>
            <td>String</td>
            <td><span>circle</span>, <span>square</span></td>
            <td>circle</td>
        </tr>
        <tr>
            <td>color</td>
            <td>角标颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>bgcolor</td>
            <td>角标背景色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>scale</td>
            <td>缩放比例</td>
            <td>String</td>
            <td>-</td>
            <td>1</td>
        </tr>
        </tbody>
    </table>
</div>
