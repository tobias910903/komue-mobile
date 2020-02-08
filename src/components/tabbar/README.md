### 底部导航

```
<template>
    <kom-tabbar>
        <kom-tabbar-item title="首页" link="#" active>
            <kom-icon icon="home" slot="icon"></kom-icon>
        </kom-tabbar-item>
        <kom-tabbar-item title="购物车" link="#">
            <kom-icon icon="shopcart-outline" slot="icon"></kom-icon>
        </kom-tabbar-item>
        <kom-tabbar-item title="个人中心" link="#">
            <kom-icon icon="ucenter-outline" slot="icon"></kom-icon>
            <kom-badge slot="badge" type="danger">2</kom-badge>
        </kom-tabbar-item>
        <kom-tabbar-item title="图片" link="#">
            <img slot="icon" style="height: 25px;" src="path/img/logo.png">
        </kom-tabbar-item>
    </kom-tabbar>
</template>

<script type="text/babel">
    export default {
        
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-tabbar</strong>【slot】</h3>
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
<h3><strong>kom-tabbar</strong>【props】</h3>
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
            <td>fixed</td>
            <td>是否fixed定位</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>active-color</td>
            <td>选中颜色 &amp;&amp; 常规颜色值</td>
            <td>String</td>
            <td>-</td>
            <td>#09BB07</td>
        </tr>
        <tr>
            <td>bgcolor</td>
            <td>背景颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FFF</td>
        </tr>
        <tr>
            <td>fontsize</td>
            <td>标题字体大小</td>
            <td>String</td>
            <td>-</td>
            <td>.22rem（11px）</td>
        </tr>
        <tr>
            <td>color</td>
            <td>标题字体颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#5C5C5C</td>
        </tr>
        <tr>
            <td><strong>exact</strong></td>
            <td>是否已开启 router-link 的严格模式</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td><strong>active-class</strong></td>
            <td>router-link 激活时的class名</td>
            <td>String</td>
            <td>-</td>
            <td>router-link-active</td>
        </tr>
        <tr>
            <td>padding</td>
            <td>上下内边距</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>.06rem（3px）</td>
        </tr>
        <tr>
            <td>border-color</td>
            <td>底边框颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#E4E4E4</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-tabbar-item</strong>【slot】</h3>
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
            <td>badge</td>
            <td>添加角标</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-tabbar-item</strong>【props】</h3>
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
            <td>link</td>
            <td>导航链接</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>type</td>
            <td>链接的类型，<span>type="link"</span>的link将会解析为路由，<span>type="a"</span>是普通&lt;a&gt;</td>
            <td>String</td>
            <td><span>link</span>,<span>a</span></td>
            <td>link</td>
        </tr>
        <tr>
            <td>tag</td>
            <td>router-link的tag属性，type="link"时生效</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>title</td>
            <td>导航标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>active</td>
            <td>是否激活当前选项卡</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>dot</td>
            <td>是否添加小红点</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-tabbar-other</strong>【slot】</h3>
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
<h3><strong>kom-tabbar-other</strong>【props】</h3>
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
            <td>link</td>
            <td>导航链接</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>type</td>
            <td>链接的类型，<span>type="link"</span>的link将会解析为路由，<span>type="a"</span>是普通&lt;a&gt;</td>
            <td>String</td>
            <td><span>link</span>,<span>a</span></td>
            <td>link</td>
        </tr>
        </tbody>
    </table>
</div>
