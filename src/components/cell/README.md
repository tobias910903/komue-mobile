### 列表视图

> 基本使用（将列表分组）

```
<template>
    <div>
        <kom-cell-group>
            <kom-cell-item>
                <span slot="left">左边内容一</span>
                <span slot="right">右边内容一</span>
            </kom-cell-item>
            <kom-cell-item>
                <span slot="left">左边内容二</span>
                <span slot="right">右边内容二</span>
            </kom-cell-item>
        </kom-cell-group>

        <kom-cell-group>
            <kom-cell-item>
                <span slot="left">左边内容一</span>
                <span slot="right">右边内容一</span>
            </kom-cell-item>
            <kom-cell-item>
                <span slot="left">左边内容二</span>
                <span slot="right">右边内容二</span>
            </kom-cell-item>
        </kom-cell-group>
    </div>
</template>

<script type="text/babel">
    export default {

    }
</script>
```

<br/>

> 添加箭头标识
```
<template>
    <kom-cell-group>
        <kom-cell-item arrow>
            <span slot="left">左边内容一</span>
            <span slot="right">右边内容一</span>
        </kom-cell-item>
    </kom-cell-group>
</template>
```

<br/>

> 设置列表DOM类型

```
<template>
    <kom-cell-group>
        <kom-cell-item arrow type="a" href="tel:400-888-8888">
            <span slot="left">这里是一个A链接</span>
            <span slot="right">href不会解析</span>
        </kom-cell-item>
        <kom-cell-item arrow type="link" href="#">
            <span slot="left">这里是一个Router-Link链接</span>
            <span slot="right">href会解析为路由</span>
        </kom-cell-item>
        <kom-cell-item arrow type="label">
            <span slot="left">这里是一个Label</span>
        </kom-cell-item>
        <kom-cell-item arrow>
            <span slot="left">这里是一个普通DIV</span>
        </kom-cell-item>
    </kom-cell-group>
</template>
```

<br/>

> 给每组列表添加标题

```
<template>
    <kom-cell-group title="这里是一个标题">
        <kom-cell-item arrow href="#" type="link">
            <span slot="left">我的订单</span>
            <span slot="right">查看全部订单</span>
        </kom-cell-item>
        <kom-cell-item arrow href="#" type="link">
            <span slot="left">我的收藏</span>
        </kom-cell-item>
    </kom-cell-group>
    
    <kom-cell-group title="这里是另外一个标题">
        <kom-cell-item arrow href="#" type="link">
            <span slot="left">我的订单</span>
            <span slot="right">查看全部订单</span>
        </kom-cell-item>
        <kom-cell-item arrow href="#" type="link">
            <span slot="left">我的收藏</span>
        </kom-cell-item>
    </kom-cell-group>
</template>
```

<br/>

> 使用文本框、下拉选择框

```
<template>
    <kom-cell-group>
        <kom-cell-item>
            <span slot="left">手机号：</span>
            <input slot="right" type="number" placeholder="请输入手机号">
        </kom-cell-item>
        
        <kom-cell-item arrow type="label">
            <select slot="right">
                <option value="">支付方式</option>
                <option value="1">支付宝</option>
                <option value="2">微信</option>
                <option value="3">财付通</option>
            </select>
        </kom-cell-item>
        
        <kom-cell-item arrow type="label">
            <span slot="left">性别：</span>
            <select slot="right">
                <option value="">请选择性别</option>
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="3">未知</option>
            </select>
        </kom-cell-item>
    </kom-cell-group>
</template>
```

<br/>

> 使用多选框

```
<template>
    <kom-cell-group title="多选">
        <kom-cell-item type="checkbox">
            <span slot="left">多选一</span>
            <input slot="right" type="checkbox" value="Han MeiMei" v-model="checkedNames"/>
        </kom-cell-item>

        <kom-cell-item type="checkbox">
            <span slot="left">多选二</span>
            <input slot="right" type="checkbox" value="Li Lei" v-model="checkedNames"/>
        </kom-cell-item>

        <kom-cell-item type="checkbox">
            <span slot="left">多选三</span>
            <input slot="right" type="checkbox" value="Jim Green" v-model="checkedNames"/>
        </kom-cell-item>

        <kom-cell-item>
            <span slot="left">选中的值：</span>
            <span slot="right">{{checkedNames}}</span>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checkedNames: ['Han MeiMei']
            }
        }
    }
</script>
```

<br/>

> 使用单选框

```
<template>
    <kom-cell-group title="单选">
        <kom-cell-item type="radio">
            <span slot="left">单选一</span>
            <input slot="right" type="radio" value="Lili" v-model="picked"/>
        </kom-cell-item>

        <kom-cell-item type="radio">
            <span slot="left">单选二</span>
            <input slot="right" type="radio" value="Lucy" v-model="picked"/>
        </kom-cell-item>

        <kom-cell-item>
            <span slot="left">选中的值：</span>
            <span slot="right">{{picked}}</span>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                picked: 'Lucy'
            }
        }
    }
</script>
```

<br />

> 使用switch复选框

```
<template>
    <kom-cell-group>
        <kom-cell-item type="label">
            <div slot="left">设为默认地址 - {{komswitch}}</div>
            <kom-switch slot="right" v-model="komswitch"></kom-switch>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                komswitch: false
            }
        }
    }
</script>
```

<br />

> 使用多行文本域

```
<template>
    <kom-cell-group title="文本域">
        <kom-cell-item>
            <kom-textarea slot="right" placeholder="请输入您的银行卡卡号和密码" maxlength="100"></kom-textarea>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {

    }
</script>
```

<br />

<h2>API</h2>
<h3><strong>kom-cell-group</strong>【slot】</h3>
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
<h3><strong>kom-cell-group</strong>【props】</h3>
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
            <td>每组列表的标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-cell-item</strong>【props】</h3>
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
            <td>列表的类型，<span>type="link"</span>将会解析为路由，<span>type="a"</span>则解析为普通&lt;a&gt;</td>
            <td>String</td>
            <td>
                <span>link</span>,<span>a</span>,<span>label</span>,<span>div</span>,<span>checkbx</span>,<span>radio</span>
            </td>
            <td>div</td>
        </tr>
        <tr>
            <td>arrow</td>
            <td>是否带右向箭头</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>href</td>
            <td>跳转链接，只在<span>type="link"</span>时生效</td>
            <td>String || Object</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-cell-item</strong>【slot】</h3>
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
            <td>icon</td>
            <td>列表的图标</td>
        </tr>
        <tr>
            <td>left</td>
            <td>列表左侧内容</td>
        </tr>
        <tr>
            <td>right</td>
            <td>列表右侧内容</td>
        </tr>
        </tbody>
    </table>
</div>
