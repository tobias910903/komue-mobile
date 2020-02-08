###移动端常见列表页

> 列表样式

```
<template>
    <kom-list theme="3"> /* 这里可选1/2/3/4/5五种样式 */
        <kom-list-item v-for="item, key in list" :key="key">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <kom-list-other slot="other">
                <div>
                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                    <span class="demo-list-del-price">¥{{item.w_price}}</span>
                </div>
                <div>content</div>
            </kom-list-other>
        </kom-list-item>
    </kom-list>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                ]
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-list</strong>【slot】</h3>
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
<h3><strong>kom-list</strong>【props】</h3>
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
            <td>theme</td>
            <td>列表主题样式</td>
            <td>String || Number</td>
            <td><span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>, <span>5</span></td>
            <td>1</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-list-item</strong>【slot】</h3>
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
            <td>img</td>
            <td>列表的主图</td>
        </tr>
        <tr>
            <td>title</td>
            <td>列表的标题</td>
        </tr>
        <tr>
            <td>other</td>
            <td>列表的其他信息；采用flex布局，使用 <span>justify-content: space-between;</span>将内容分为左右结构</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-list-item</strong>【props】</h3>
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
            <td>列表的类型，<span>type="link"</span>的href将会解析为路由，<span>type="a"</span>是普通&lt;a&gt;</td>
            <td>String</td>
            <td><span>link</span>,<span>a</span>,<span>div</span></td>
            <td>a</td>
        </tr>
        <tr>
            <td>href</td>
            <td>跳转链接</td>
            <td>String || Object</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-list-other</strong>【slot】</h3>
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

