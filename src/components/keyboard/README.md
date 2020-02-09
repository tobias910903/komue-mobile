### 安全键盘

```
<template>
    <div>
        <kom-button size="large" type="primary" @click.native="show1 = true">打开</kom-button>

        <kom-keyboard v-model="show1" :callback="done1" ref="keyboardDemo1"></kom-keyboard>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                show1: false
            }
        },
        methods: {
            done1(val) {
                console.log('输入的密码是：' + val);
                this.$dialog.loading.open('验证支付密码');

                /* 模拟异步验证密码 */
                setTimeout(() => {
                    this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
                    this.$dialog.loading.close();
                }, 2000);
            }
        }
    }
</script>
```


- 将kom-keyboard组件的 v-model 绑定到一个本地变量show1，通过操作这个变量即可控制 keyboard 的显示与隐藏
- 同时给:callback绑定一个本地方法，当6位密码输入完全后将会调用调用
- 通过自定义事件this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '错误信息'); 提示错误信息
- 在kom-keyboard组件上设置disorder或:disorder="true"即可打乱键盘顺序

<br/>

<h2>API</h2>
<h3><strong>kom-keyboard</strong>【props】</h3>
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
            <td>title</td>
            <td>键盘提示标题</td>
            <td>String</td>
            <td>-</td>
            <td>YDUI安全键盘</td>
        </tr>
        <tr>
            <td>cancel-text</td>
            <td>取消文字</td>
            <td>String</td>
            <td>-</td>
            <td>取消</td>
        </tr>
        <tr>
            <td>input-text</td>
            <td>输入提示标题</td>
            <td>String</td>
            <td>-</td>
            <td>输入数字密码</td>
        </tr>
        <tr>
            <td>disorder</td>
            <td>是否打乱键盘顺序</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>6位密码输入完后调用的方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>trigger-close</td>
            <td>是否点击遮罩关闭键盘</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>masker-opacity</td>
            <td>遮罩层透明度</td>
            <td>Number</td>
            <td>-</td>
            <td>.5</td>
        </tr>
        </tbody>
    </table>
</div>
