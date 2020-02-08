### Flexbox

```
<template>
    <div>
        <kom-flexbox>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
        </kom-flexbox>
        
        <kom-flexbox>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
        </kom-flexbox>
        
        <kom-flexbox>
            <div>div</div>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
        </kom-flexbox>
        
        <kom-flexbox>
            <div>div</div>
            <kom-flexbox-item>kom-flexbox-item</kom-flexbox-item>
            <div>div</div>
        </kom-flexbox>
    </div>
</template>

<script type="text/babel">
    export default {

    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-flexbox</strong>【slot】</h3>
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
<h3><strong>kom-flexbox</strong>【props】</h3>
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
            <td>direction</td>
            <td>布局方向（水平和垂直）</td>
            <td>String</td>
            <td><span>horizontal</span>, <span>vertical</span></td>
            <td>horizontal</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-flexbox-item</strong>【slot】</h3>
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
<h3><strong>kom-flexbox-item</strong>【props】</h3>
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
            <td>align</td>
            <td>垂直对齐方式</td>
            <td>String</td>
            <td><span>top</span>, <span>center</span>, <span>bottom</span></td>
            <td>center</td>
        </tr>
        </tbody>
    </table>
</div>
