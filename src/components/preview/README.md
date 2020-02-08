### 表单预览

```
<template>
    <kom-preview :buttons="btns">
        <kom-preview-header>
            <div slot="left">付款金额</div>
            <div slot="right">¥2400.00</div>
        </kom-preview-header>

        <kom-preview-item>
            <div slot="left">商品</div>
            <div slot="right">啦啦啦啦啦啦啦</div>
        </kom-preview-item>
        <kom-preview-item>
            <div slot="left">商品</div>
            <div slot="right">啦啦啦啦啦啦啦</div>
        </kom-preview-item>
        <kom-preview-item>
            <div slot="left">商品商品</div>
            <div slot="right">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        </kom-preview-item>
    </kom-preview>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                btns: [
                    {
                        text: '辅助操作',
                        click: () => {
                            alert('辅助操作');
                        }
                    },
                    {
                        color: '#F00',
                        text: '跳转首页',
                        link: {path: '/'}
                    }
                ]
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-preview</strong>【slot】</h3>
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
<h3><strong>kom-preview-header</strong>【slot】</h3>
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
            <td>left</td>
            <td>左侧内容</td>
        </tr>
        <tr>
            <td>right</td>
            <td>右侧内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-preview-item</strong>【slot】</h3>
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
            <td>left</td>
            <td>左侧内容</td>
        </tr>
        <tr>
            <td>right</td>
            <td>右侧内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-preview</strong>【props】</h3>
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
            <td>buttons</td>
            <td>按钮们：<br>
                [{<br>
                &nbsp;&nbsp;text: String, //文字<br>
                &nbsp;&nbsp;link: [String, Object], //跳转链接，当为Object时，为router-link<br>
                &nbsp;&nbsp;color: String, //文字颜色<br>
                &nbsp;&nbsp;click: Function, //点击回调函数<br>
                }]
            </td>
            <td>Array</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
