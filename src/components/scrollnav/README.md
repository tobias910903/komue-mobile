### 滚动导航

```
<template>
    <kom-scrollnav>
        <kom-scrollnav-panel :label="item.label" v-for="item, key in list" :key="key">

            <!-- 内容 -->
            <p>{{item.label}}</p>
            <kom-list :theme="1">
                <kom-list-item v-for="i in 10">
                    <img slot="img" src="//static.shikee.com/common/img/blank.gif">
                    <span slot="title">{{item.label}} - {{item.label}}</span>
                </kom-list-item>
            </kom-list>
            <!-- 内容 -->

        </kom-scrollnav-panel>
    </kom-scrollnav>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    {label: '今日特惠'},
                    {label: '烟灶推荐'},
                    {label: '净水饮水推荐'},
                    {label: '洗碗机推荐'},
                    {label: '电热推荐'},
                    {label: '燃热推荐'},
                    {label: '消毒柜推荐'},
                    {label: '嵌入式推荐'},
                    {label: '商用电器'},
                    {label: '活动说明'}
                ]
            }
        }
    }
</script>
```

- 当滚动容器不是body，也未使用 kom-layout 组件时，自定义的滚动容器需设置样式 position: relative

<br/>

<h2>API</h2>
<h3><strong>kom-scrollnav</strong>【slot】</h3>
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
<h3><strong>kom-scrollnav-panel</strong>【slot】</h3>
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
<h3><strong>kom-scrollnav</strong>【props】</h3>
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
            <td>height</td>
            <td>导航高度</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>.9rem</td>
        </tr>
        <tr>
            <td>color</td>
            <td>字体颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#333</td>
        </tr>
        <tr>
            <td>current-color</td>
            <td>高亮字体颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#F00</td>
        </tr>
        <tr>
            <td>toggle-text</td>
            <td>切换分类提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>切换分类</td>
        </tr>
        <tr>
            <td>bgcolor</td>
            <td>导航背景颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FFF</td>
        </tr>
        <tr>
            <td>border-color</td>
            <td>边框颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#EFEFEF</td>
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
<h3><strong>kom-scrollnav-panel</strong>【props】</h3>
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
            <td>导航标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
