### 搜索框

> 行内模式

```
<template>
    <kom-search v-model="value1" :on-submit="submitHandler"></kom-search>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                value1: ''
            }
        },
        methods: {
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
        }
    }
</script>
```

<br/>

> 全屏模式（带匹配结果）

```
<template>
    <kom-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></kom-search>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                value2: '',
                result: []
            }
        },
        methods: {
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            itemClickHandler(item) {
                this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
        },
        watch: {
            value2(val) {
                this.result = this.getResult(val);
            }
        }
    }
</script>
```

- 通过 v-model 绑定的值 value2 获取匹配的结果；result支持对象数组或者字符串数组形式，对象数组需包含label属性，例如：[{label: 'Apple', id: '1111'}, {label: 'Orange', id: '2222'}...] 或者 ['Apple', 'Orange'...]

<br/>

<h2>API</h2>
<h3><strong>kom-search</strong>【slot】</h3>
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
            <td>自定义内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-search</strong>【props】</h3>
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
            <td>placeholder</td>
            <td>placeholder提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>搜 索</td>
        </tr>
        <tr>
            <td>cancel-text</td>
            <td>取消按钮文字</td>
            <td>String</td>
            <td>-</td>
            <td>取消</td>
        </tr>
        <tr>
            <td>on-submit</td>
            <td>提交时触发方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>on-cancel</td>
            <td>取消触发的方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>fullpage</td>
            <td>是否全屏模式（带搜索匹配结果）</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>top</td>
            <td>全屏模式距离顶部的距离</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>result</td>
            <td>匹配结果（fullpage为true时生效）</td>
            <td>Array</td>
            <td>-</td>
            <td>[]</td>
        </tr>
        <tr>
            <td>item-click</td>
            <td>匹配结果点击事件（fullpage为true时生效）</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
