### 数字加减


```
<template>
    <div>
        <kom-counter max="75" unit="3" v-model="spinner1"></kom-counter>
        <span>[model: counter = {{counter}}]</span>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                counter: 0
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-counter</strong>【props】</h3>
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
            <td>unit</td>
            <td>累计值</td>
            <td>Number</td>
            <td>-</td>
            <td>1</td>
        </tr>
        <tr>
            <td>max</td>
            <td>最大值</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>min</td>
            <td>最小值（不设置最小值，则默认为累计值）</td>
            <td>Number</td>
            <td>-</td>
            <td>累计值</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>longpress</td>
            <td>是否支持长按快速加减</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>width</td>
            <td>总宽度</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>2rem（100px）</td>
        </tr>
        <tr>
            <td>height</td>
            <td>总高度</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>.6rem（30px）</td>
        </tr>
        <tr>
            <td>val</td>
            <td>当前spinner设置的额外值，比如购物车内数据的ID</td>
            <td>Boolean, String, Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>选择后回调，返回设置的额外值val和当前数值</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>button-style</td>
            <td>加减按钮样式</td>
            <td>String</td>
            <td><span>square</span>, <span>circle</span></td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
