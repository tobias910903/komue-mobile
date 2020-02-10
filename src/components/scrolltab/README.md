### 滚动选项卡


```
<template>
    <kom-scrolltab>
        <kom-scrolltab-panel label="空调" icon="demo-icons-category1">
            <div style="height: 350px;background-color: gray;"></div>
        </kom-scrolltab-panel>

        <kom-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
            <div style="height: 350px;background-color: blue;"></div>
        </kom-scrolltab-panel>

        <kom-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
            <div style="height: 350px;background-color: yellow;"></div>
        </kom-scrolltab-panel>
        
        <!-- ... -->
    </kom-scrolltab>
</template>

<script type="text/babel">
    export default {

    }
</script>
```

- 在kom-scrolltab-panel组件上设置active属性即初始化激活当前选项卡
- 当滚动容器不是body，也未使用 kom-layout 组件时，自定义的滚动容器需设置样式 position: relative


<br/>

<h2>API</h2>
<h3><strong>kom-scrolltab</strong>【slot】</h3>
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
<h3><strong>kom-scrolltab-panel</strong>【slot】</h3>
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
<h3><strong>kom-scrolltab</strong>【props】</h3>
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
            <td>高亮索引</td>
            <td>Number</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>切换回调函数（返回当前索引）</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-scrolltab-panel</strong>【props】</h3>
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
            <td>label</td>
            <td>选项卡标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>图标（只支持图标样式名）</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
