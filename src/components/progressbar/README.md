### 进度条

> 圈形进度条

```
<template>
    <div>
        <div style="width: 120px;height: 120px;">
            <kom-progressbar :progress="progress1" trail-width="4">{{progress1 * 100}}%</kom-progressbar>
        </div>

        <div style="width: 120px;height: 120px;">
            <kom-progressbar
                    :progress="progress2"
                    trail-width="2"
                    stroke-width="4"
                    stroke-color="#B2B2B2"
                    trail-color="#FE5D51"
                    fill-color="#EAEAEA"
            >{{progress2 * 100}}%</kom-progressbar>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                progress1: 0.1,
                progress2: 0.4
            }
        }
    }
</script>
```

<br/>

> 结合CountUp组件

```
<template>
    <div>
        <kom-progressbar :progress="progress3" trail-width="6">
            <kom-countup :endnum="progress3 * 100" :duration="1" suffix="%"></kom-countup>
        </kom-progressbar>
    
        <kom-button size="large" @click.native="progress3 = 0.8">设置为80%</kom-button>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                progress3: 0.3
            }
        }
    }
</script>
```

<br/>

> 线形进度条

```
<template>
    <kom-progressbar type="line" :progress="progress4" trail-width="4" trail-color="#FE5D51"></kom-progressbar>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                progress4: 0.6
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-progressbar</strong>【slot】</h3>
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
<h3><strong>kom-progressbar</strong>【props】</h3>
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
            <td>进度条类型</td>
            <td>String</td>
            <td><span>circle</span>,<span>line</span></td>
            <td>circle</td>
        </tr>
        <tr>
            <td>progress</td>
            <td>进度所占百分比（取值范围0-1）</td>
            <td>Float</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>fill-color</td>
            <td>进度条背景颜色，线形进度条无效</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>stroke-width</td>
            <td>进度条描边厚度，取值为正数，svg中stroke-width属性值</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>stroke-color</td>
            <td>进度条颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>trail-width</td>
            <td>高亮进度条描边厚度，不填则取stroke-width的值</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>trail-color</td>
            <td>高亮进度条颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
