### 等分网格

> 等分两列（带图标）

```
<template>
    <kom-grids-group :rows="2">
        <kom-grids-item>
            <img slot="icon" src="path/img/logo.png">
            <span slot="text">image</span>
        </kom-grids-item>
        <kom-grids-item>
            <kom-icon slot="icon" name="home" color="#FF685D"></kom-icon>
            <span slot="text">iconfont</span>
        </kom-grids-item>
    </kom-grids-group>
</template>

<script type="text/babel">
    export default {
        
    }
</script>
```
- 在 kom-grids-group 组件上添加 rows="2"即为两列表格；通过 slot="icon" 自定义图标，slot="text" 自定义显示文字。

<br/>

> 等分三列（添加标题）
```
<template>
    <kom-grids-group :rows="3" title="等分3列">
        <kom-grids-item v-for="n in 6">
            <span slot="text">grids-3</span>
        </kom-grids-item>
    </kom-grids-group>
</template>

<script type="text/babel">
    export default {

    }
</script>
```

<br/>

> 设置 item 的高度

```
<template>
    <kom-grids-group :rows="3" item-height="130px">
        <kom-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="../img/img.jpg" style="height: 50px;">
            </div>
        </kom-grids-item>
        <kom-grids-item>
            <div slot="else" style="text-align: center;">
                <p style="padding: 5px;color:#F00;">当页面内容高度不一致时，设置item的高度就不会导致页面错乱</p>
            </div>
        </kom-grids-item>
        ......
    </kom-grids-group>
</template>
```

<br/>

<h2>API</h2>
<h3><strong>kom-grids-group</strong>【slot】</h3>
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
<h3><strong>kom-grids-group</strong>【props】</h3>
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
            <td>rows</td>
            <td>每行显示列数</td>
            <td>Number</td>
            <td><span>2</span>, <span>3</span>, <span>4</span>, <span>5</span></td>
            <td>4</td>
        </tr>
        <tr>
            <td>title</td>
            <td>每组表格标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>item-height</td>
            <td>设置 kom-grids-item 的高度（防止页面内容高度不一致时导致页面错乱），默认0为不限制</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>0</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-grids-item</strong>【slot】</h3>
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
            <td>icon</td>
            <td>图标内容</td>
        </tr>
        <tr>
            <td>text</td>
            <td>文字内容</td>
        </tr>
        <tr>
            <td>else</td>
            <td>其他内容，该slot没有样式限制</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-grids-item</strong>【props】</h3>
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
            <td>渲染后DOM的类型，<span>type="link"</span>将会解析为路由，<span>type="a"</span>则解析为普通&lt;a&gt;</td>
            <td>String</td>
            <td><span>link</span>, <span>a</span></td>
            <td>link</td>
        </tr>
        <tr>
            <td>link</td>
            <td>跳转URL</td>
            <td>String || Object</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
