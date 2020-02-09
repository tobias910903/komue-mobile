### 评分

```
<template>
    <kom-cell-group title="普通使用">
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate1"></kom-rate>
            <span slot="right">值是: 0</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate2"></kom-rate>
            <span slot="right">设置默认值</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" count="7" v-model="rate3"></kom-rate>
            <span slot="right">设置多个</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate4" color="#00FF16" active-color="#0078D7"></kom-rate>
            <span slot="right">自定义颜色</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate5" size="18px"></kom-rate>
            <span slot="right">自定义大小</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate6" :readonly="true"></kom-rate>
            <span slot="right">只读</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate7" :show-text="['很差','还行','一般','挺好','非常好']"></kom-rate>
            <span slot="right">提示文字</span>
        </kom-cell-item>
        <kom-cell-item>
            <kom-rate slot="left" v-model="rate8" :show-text="tipText"></kom-rate>
            <span slot="right">HTML提示模板</span>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                rate1: 0,
                rate2: 3,
                rate3: 2,
                rate4: 1,
                rate5: 4,
                rate6: 3,
                rate7: 2,
                rate8: 1,
                tipText: [
                    '<span style="color:red;">$ 分 - 很差</span>',
                    '<span style="color:blue;">$ 分 - 勉强</span>',
                    '<span style="color:green;">$ 分 - 一般</span>',
                    '<span style="color:black;">$ 分 - 挺好</span>',
                    '<span style="color:chartreuse;">$ 分 - 非常好</span>'
                ]
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-rate</strong>【props】</h3>
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
            <td>count</td>
            <td>星星个数</td>
            <td>Number</td>
            <td>-</td>
            <td>5</td>
        </tr>
        <tr>
            <td>size</td>
            <td>图标大小</td>
            <td>String</td>
            <td>-</td>
            <td>.5rem（25px）</td>
        </tr>
        <tr>
            <td>color</td>
            <td>初始颜色 &amp;&amp; 常规颜色值</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>active-color</td>
            <td>选中样式</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>show-text</td>
            <td>提示文字数组</td>
            <td>Array</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>padding</td>
            <td>两颗星星间的距离</td>
            <td>String</td>
            <td>-</td>
            <td>.06rem（3px）</td>
        </tr>
        </tbody>
    </table>
</div>
