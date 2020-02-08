### 单选

```
<template>
    <div>
        <kom-radio-group v-model="radio1">
            <kom-radio val="啦啦啦"></kom-radio>
            <kom-radio val="啊啊啊"></kom-radio>
            <kom-radio val="喔喔喔"></kom-radio>
        </kom-radio-group>
        
        <kom-radio-group v-model="radio2">
            <kom-radio val="1">啦啦啦</kom-radio>
            <kom-radio val="2">啊啊啊</kom-radio>
            <kom-radio val="3">喔喔喔</kom-radio>
        </kom-radio-group>

        <kom-radio-group v-model="radio3">
            <kom-radio val="啦啦啦"></kom-radio>
            <kom-radio val="啊啊啊"></kom-radio>
            <kom-radio val="喔喔喔" disabled></kom-radio>
        </kom-radio-group> 
        
        <kom-radio-group v-model="radio4" color="#F00">
            <kom-radio val="啦啦啦"></kom-radio>
            <kom-radio val="啊啊啊"></kom-radio>
            <kom-radio val="喔喔喔"></kom-radio>
        </kom-radio-group>       
        
        <kom-radio-group v-model="radio5" size="30">
            <kom-radio val="1"><span style="font-size: 24px;">男</span></kom-radio>
            <kom-radio val="2"><span style="font-size: 24px;">女</span></kom-radio>
            <kom-radio val="3"><span style="font-size: 24px;">未知</span></kom-radio>
        </kom-radio-group>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                radio1: '啦啦啦',
                radio2: 2,
                radio3: '喔喔喔',
                radio4: '啊啊啊',
                radio5: 3
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-radio-group</strong>【slot】</h3>
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
<h3><strong>kom-radio-group</strong>【props】</h3>
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
            <td>color</td>
            <td>图标颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#4CD864</td>
        </tr>
        <tr>
            <td>size</td>
            <td>图标大小，默认为px</td>
            <td>Number</td>
            <td>-</td>
            <td>20</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>选择后回调，返回选中值</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-radio</strong>【slot】</h3>
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
<h3><strong>kom-radio</strong>【props】</h3>
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
            <td>val</td>
            <td>值</td>
            <td>String || Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        </tbody>
    </table>
</div>
