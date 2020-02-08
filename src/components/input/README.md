### 表单输入框

> 普通使用

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <span slot="left">用户名：</span>
            <kom-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></kom-input>
        </kom-cell-item>
        <kom-cell-item>
            <span slot="left">密码：</span>
            <kom-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></kom-input>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input1: '',
                input2: ''
            }
        }
    }
</script>
```

<br/>

> 验证 - 内置正则

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <span slot="left">邮箱：</span>
            <kom-input slot="right" v-model="input3" :debug="true" regex="email" placeholder="请输入邮箱地址"></kom-input>
        </kom-cell-item>

        <kom-cell-item>
            <span slot="left">手机号：</span>
            <kom-input slot="right" v-model="input4" regex="mobile" placeholder="请输入手机号码"></kom-input>
        </kom-cell-item>

        <kom-cell-item>
            <span slot="left">银行卡号：</span>
            <kom-input slot="right" v-model="input5" regex="bankcard" placeholder="请输入银行卡号"></kom-input>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input3: 'komui@qq.com',
                input4: '',
                input5: ''
            }
        }
    }
</script>
```

<br/>

> 验证 - 自定义正则

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <span slot="left">QQ：</span>
            <kom-input slot="right" v-model="input6" regex="^\d{5,12}$" placeholder="请输入您的QQ号码"></kom-input>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input6: ''
            }
        }
    }
</script>
```

<br/>

> 不显示清空图标

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <span slot="left">姓名：</span>
            <kom-input slot="right" v-model="input7" required :show-clear-icon="false" placeholder="请输入您的姓名"></kom-input>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input7: ''
            }
        }
    }
</script>
```

<br/>

> 不显示正确或错误图标

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <span slot="left">手机号：</span>
            <kom-input slot="right" v-model="input8" required :show-success-icon="false" :show-error-icon="false" regex="mobile" placeholder="请输入手机号码"></kom-input>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input8: ''
            }
        }
    }
</script>
```

<br/>

> 获取验证结果

```
<template>
    <div>
        <kom-cell-group>
            <kom-cell-item>
                <span slot="left">手机号：</span>
                <kom-input slot="right" v-model="input9" ref="input9" required regex="mobile" placeholder="请输入手机号码"></kom-input>
            </kom-cell-item>
            <p slot="bottom" style="color:#F00;padding: 0 .3rem;" v-html="result"></p>
        </kom-cell-group>
        <kom-button-group>
            <kom-button size="large" @click.native="clickHander">显示上方手机号验证结果</kom-button>
        </kom-button-group>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input9: '',
                result: ''
            }
        },
        methods: {
            clickHander() {
                const input = this.$refs.input9;
                this.result = `{<br />  valid：${input.valid}，<br />  errorMes：'${input.errorMsg}'，<br />  errorCode：'${input.errorCode}'<br />}`;
            }
        }
    }
</script>
```
- errorMsg/errorCode两个参数；errorMsg: 错误提示信息；errorCode: 错误代码；
- errorCode => NOT_NULL(不能为空)、NOT_MIN_SIZE(输入字符位数不足)、NOT_REGEX_RULE(不符合规则)。

<br/>

> 设置焦点

```
<template>
    <div>
        <kom-cell-group>
            <kom-cell-item>
                <span slot="left">内容：</span>
                <kom-input slot="right" v-model="input10" ref="input10" placeholder="请输入内容"></kom-input>
            </kom-cell-item>
        </kom-cell-group>
        <kom-button-group>
            <kom-button size="large" @click.native="setFocusHander">设置焦点</kom-button>
        </kom-button-group>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input10: ''
            }
        },
        methods: {
            setFocusHander() {
                this.$refs.input10.setFocus();
            }
        }
    }
</script>
```
- 通过 this.$refs.input10.setFocus(); 设置焦点
- 通过 this.$refs.input10.setBlur(); 离开焦点

<br/>

<h2>API</h2>
<h3><strong>kom-input</strong>【props】</h3>
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
            <td>name</td>
            <td>表单name</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>type</td>
            <td>文本框类型</td>
            <td>String</td>
            <td><span>text</span>, <span>password</span>, <span>email</span>, <span>number</span>, <span>tel</span>,
                <span>datetime-local</span>, <span>date</span>, <span>time</span></td>
            <td>text</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>描述输入字段</td>
            <td>String</td>
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
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>regex</td>
            <td>验证验证，可为内置正则（email/mobile/bankcard）或自定义正则</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>autocomplete</td>
            <td>自动完成</td>
            <td>String</td>
            <td>-</td>
            <td>off</td>
        </tr>
        <tr>
            <td>show-clear-icon</td>
            <td>是否显示清空内容图标</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>show-error-icon</td>
            <td>是否显示错误图标</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>show-success-icon</td>
            <td>是否显示正确图标</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>show-required-icon</td>
            <td>是否显示必填提示图标</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>required</td>
            <td>是否必填</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>max</td>
            <td>最大输入字符</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>min</td>
            <td>最少输入字符</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>on-focus</td>
            <td>进入焦点事件</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>on-blur</td>
            <td>离开焦点事件</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
