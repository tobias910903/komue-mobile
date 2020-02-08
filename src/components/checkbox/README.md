### 多选

```
<template>
    <div>
        <kom-checkbox v-model="checkbox1">啦啦啦啦</kom-checkbox>
        
        <kom-checkbox-group v-model="checkbox2">
            <kom-checkbox val="啦啦啦"></kom-checkbox>
            <kom-checkbox val="啊啊啊"></kom-checkbox>
            <kom-checkbox val="喔喔喔"></kom-checkbox>
        </kom-checkbox-group>
        
        <kom-checkbox-group v-model="checkbox3">
            <kom-checkbox val="1">啦啦啦</kom-checkbox>
            <kom-checkbox val="2">啊啊啊</kom-checkbox>
            <kom-checkbox val="3">喔喔喔</kom-checkbox>
        </kom-checkbox-group>
        
        <kom-checkbox-group v-model="checkbox4">
            <kom-checkbox val="1">啦啦啦</kom-checkbox>
            <kom-checkbox val="2" disabled>啊啊啊</kom-checkbox>
            <kom-checkbox val="3" disabled>喔喔喔</kom-checkbox>
        </kom-checkbox-group>
        
        <kom-checkbox-group v-model="checkbox5" color="#F00">
            <kom-checkbox val="1">啦啦啦</kom-checkbox>
            <kom-checkbox val="2">啊啊啊</kom-checkbox>
            <kom-checkbox val="3">喔喔喔</kom-checkbox>
        </kom-checkbox-group>
        
        <kom-checkbox-group v-model="checkbox6">
            <kom-checkbox val="1" shape="circle">啦啦啦</kom-checkbox>
            <kom-checkbox val="2" shape="circle">啊啊啊</kom-checkbox>
            <kom-checkbox val="3" shape="circle">喔喔喔</kom-checkbox>
        </kom-checkbox-group>
        
        <kom-checkbox-group v-model="checkbox7" size="30">
            <kom-checkbox val="1"><span style="font-size: 24px;">男</span></kom-checkbox>
            <kom-checkbox val="2"><span style="font-size: 24px;">女</span></kom-checkbox>
            <kom-checkbox val="3"><span style="font-size: 24px;">未知</span></kom-checkbox>
        </kom-checkbox-group>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checkbox1: true,
                checkbox2: [],
                checkbox3: ['2'],
                checkbox4: ['2'],
                checkbox5: ['1'],
                checkbox6: ['1'],
                checkbox7: ['3']
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-checkbox-group</strong>【slot】</h3>
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
<h3><strong>kom-checkbox-group</strong>【props】</h3>
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
            <td>选择后回调，返回当前选中值</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-checkbox</strong>【slot】</h3>
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
<h3><strong>kom-checkbox</strong>【props】</h3>
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
            <td>String || Number || Boolean</td>
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
        <tr>
            <td><strong>color</strong></td>
            <td>图标颜色【单个使用才会生效】</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#4CD864</td>
        </tr>
        <tr>
            <td><strong>size</strong></td>
            <td>图标大小【单个使用才会生效】</td>
            <td>Number</td>
            <td>-</td>
            <td>20</td>
        </tr>
        <tr>
            <td>shape</td>
            <td>图标形状，默认方形</td>
            <td>String</td>
            <td><span>square</span>, <span>circle</span></td>
            <td>square</td>
        </tr>
        <tr>
            <td>change</td>
            <td>更改调用方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>true-value</td>
            <td>选中时的值</td>
            <td>String, Number, Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>false-value</td>
            <td>选中时的值</td>
            <td>String, Number, Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        </tbody>
    </table>
</div>
