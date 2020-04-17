### 发送验证码

> 普通调用

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <kom-icon slot="icon" icon="phone3" size=".45rem"></kom-icon>
            <input type="text" slot="right" placeholder="请输入手机号码">

            <!-- ↓↓关键代码是这里↓↓ -->
            <kom-sendcode slot="right" 
                         v-model="start1" 
                         @click.native="sendCode1" 
                         type="warning"
            ></kom-sendcode>
            <!-- ↑↑关键代码是这里↑↑ -->

        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                start1: false
            }
        },
        methods: {
            sendCode1() {
                this.$dialog.loading.open('发送中...');
                setTimeout(() => {

                    this.start1 = true;
                    this.$dialog.loading.close();

                    this.$dialog.toast({
                        mes: '已发送',
                        icon: 'success',
                        timeout: 1500
                    });

                }, 1000);
            }
        }
    }
</script>
```
- 将kom-sendcode组件的 v-model 绑定到一个本地变量start1，将其设置为true即开始倒计时。kom-sendcode组件继承kom-button组件，因此与kom-button有同样的 props。

<br/>

> 自定义倒计时按钮

```
<template>
    <kom-sendcode
            v-model="start2"
            @click.native="start2 = true"
            second="15"
            init-str="点我啊，你点我啊"
            run-str="在{%s}秒后你就可以重新获取啦"
            reset-str="你可以重新获取验证码啦"
            size="large"
            type="primary"
    ></kom-sendcode>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                start2: false
            }
        }
    }
</script>
```

- 通过second属性设置倒计时时长（秒），init-str属性设置初始显示文本，run-str属性设置运行时显示文本（需包含{%s}），reset-str属性设置结束后按钮显示文本

<br/>

> 刷新页面倒计时继续

```
<template>
    <kom-sendcode
            v-model="start3"
            storage-key="dashuaibi"
            @click.native="start3 = true"
            size="large"
            type="danger"
            init-str="刷新页面倒计时还会继续"
    ></kom-sendcode>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                start3: false
            }
        }
    }
</script>
```

- 给属性storage-key设置一个不为空的值即可

<br/>

<h2>API</h2>
<h3><strong>kom-sendcode</strong>【props】</h3>
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
            <td>second</td>
            <td>倒计时时长（秒）</td>
            <td>Number</td>
            <td>-</td>
            <td>60</td>
        </tr>
        <tr>
            <td>init-str</td>
            <td>初始化按钮显示文本</td>
            <td>String</td>
            <td>-</td>
            <td>获取短信验证码</td>
        </tr>
        <tr>
            <td>run-str</td>
            <td>运行时显示文本</td>
            <td>String</td>
            <td>-</td>
            <td>{%s}秒后重新获取</td>
        </tr>
        <tr>
            <td>reset-str</td>
            <td>运行结束后显示文本</td>
            <td>String</td>
            <td>-</td>
            <td>重新获取验证码</td>
        </tr>
        <tr>
            <td>storage-key</td>
            <td>储存倒计时剩余时间sessionStorage的键值，设置不为空后，刷新页面倒计时将继续</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
