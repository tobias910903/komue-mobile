### 图片轮播

```
<template>
    <kom-slider autoplay="3000">
        <kom-slider-item>
            <a href="http://www.ydcss.com">
                <img src="path/img/1.jpg">
            </a>
        </kom-slider-item>
        <kom-slider-item>
            <a href="http://www.ydcss.com">
                <img src="path/img/2.jpg">
            </a>
        </kom-slider-item>
        <kom-slider-item>
            <a href="http://www.ydcss.com">
                <img src="path/img/3.jpg">
            </a>
        </kom-slider-item>
    </kom-slider>
</template>
```

<br/>

<h2>API</h2>
<h3><strong>kom-slider</strong>【slot】</h3>
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
<h3><strong>kom-slider</strong>【props】</h3>
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
            <td>index</td>
            <td>初始打开第N张图片</td>
            <td>Number</td>
            <td>-</td>
            <td>1</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>切换速度（单位毫秒）</td>
            <td>Number</td>
            <td>-</td>
            <td>200</td>
        </tr>
        <tr>
            <td>autoplay</td>
            <td>自动播放时间（单位毫秒）</td>
            <td>Number</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>direction</td>
            <td>切换方向</td>
            <td>String</td>
            <td><span>horizontal</span>,<span>vertical</span></td>
            <td>horizontal</td>
        </tr>
        <tr>
            <td>show-pagination</td>
            <td>是否显示分页标记</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>切换后回调（返回当前页码）</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>loop</td>
            <td>是否循环</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>pagination-color</td>
            <td>小点点颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#B7D0E1</td>
        </tr>
        <tr>
            <td>pagination-activecolor</td>
            <td>小点点选中颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FF0005</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-slider-item</strong>【slot】</h3>
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
