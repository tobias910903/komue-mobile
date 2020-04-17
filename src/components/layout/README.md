### 页面布局

> 默认调用

```
<template>
    <kom-layout>
        <kom-navbar slot="navbar" title="NavBar">
            <router-link to="#" slot="left">
                <kom-navbar-back-icon></kom-navbar-back-icon>
            </router-link>
        </kom-navbar>

        <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
        <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
        <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>

        <slot name="bottom"></slot>

        <kom-tabbar slot="tabbar">
            <kom-tabbar-item title="首页" link="#" active>
                <kom-icon icon="home" slot="icon"></kom-icon>
            </kom-tabbar-item>
            <kom-tabbar-item title="购物车" link="#">
                <kom-icon icon="shopcart-outline" slot="icon"></kom-icon>
            </kom-tabbar-item>
            <kom-tabbar-item title="个人中心" link="#">
                <kom-icon icon="ucenter-outline" slot="icon"></kom-icon>
            </kom-tabbar-item>
        </kom-tabbar>

    </kom-layout>
</template>
<script>
    export default {

    }
</script>
```

<br/>

> 快速调用页头

```
<template>
    <kom-layout title="啦啦啦啦" link="#">
        
        <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
        <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
        <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>

        <kom-tabbar slot="tabbar">
            <kom-tabbar-item title="首页" link="#">
                <kom-icon icon="home" slot="icon"></kom-icon>
            </kom-tabbar-item>
            <kom-tabbar-item title="购物车" link="#" active>
                <kom-icon icon="shopcart" slot="icon"></kom-icon>
            </kom-tabbar-item>
            <kom-tabbar-item title="个人中心" link="#">
                <kom-icon icon="ucenter-outline" slot="icon"></kom-icon>
            </kom-tabbar-item>
        </kom-tabbar>

    </kom-layout>
</template>
<script>
    export default {

    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-layout</strong>【slot】</h3>
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
            <td>navbar</td>
            <td>页头内容</td>
        </tr>
        <tr>
            <td>top</td>
            <td>上部内容 &lt;slot name="top"&gt;&lt;/slot&gt;</td>
        </tr>
        <tr>
            <td>-</td>
            <td>主体内容</td>
        </tr>
        <tr>
            <td>bottom</td>
            <td>下部内容 &lt;slot name="bottom"&gt;&lt;/slot&gt;</td>
        </tr>
        <tr>
            <td>tabbar</td>
            <td>页尾内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-layout</strong>【props】</h3>
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
            <td>kom-navbar的跳转链接</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>title</td>
            <td>kom-navbar的标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>show-navbar</td>
            <td>是否显示kom-navbar</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        </tbody>
    </table>
</div>

- 特别注意：若 kom-layout 组件的父级包含了高度不是100%的元素，需手动将其高度设置为100%，否则页面将不能正常滚动。
- 另外：使用 kom-layout 组件，kom-navbar和kom-tabbar 不要使用fixed属性。

