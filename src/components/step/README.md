### 步骤条

```
<template>
    <div>
        <kom-step current="2">
            <kom-step-item>
                <span slot="bottom">步骤一</span>
            </kom-step-item>
            <kom-step-item>
                <span slot="bottom">步骤二</span>
            </kom-step-item>
            <kom-step-item>
                <span slot="bottom">步骤三</span>
            </kom-step-item>
            <kom-step-item>
                <span slot="bottom">步骤四</span>
            </kom-step-item>
        </kom-step> 
        
        <kom-step theme="2" current="3">
            <kom-step-item>
                <span slot="top">已发货</span>
                <span slot="bottom">扬州市</span>
            </kom-step-item>
            <kom-step-item>
                <span slot="top">运输中</span>
            </kom-step-item>
            <kom-step-item>
                <span slot="top">派件中</span>
            </kom-step-item>
            <kom-step-item>
                <span slot="top">已签收</span>
                <span slot="bottom">南宁市</span>
            </kom-step-item>
        </kom-step>
    </div>
</template>
```

<br/>

<h2>API</h2>
<h3><strong>kom-step</strong>【slot】</h3>
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
<h3><strong>kom-step</strong>【props】</h3>
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
            <td>theme</td>
            <td>样式主题</td>
            <td>Number</td>
            <td><span>1</span>, <span>2</span></td>
            <td>1</td>
        </tr>
        <tr>
            <td>current</td>
            <td>默认选中的项</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>current-color</td>
            <td>选中项的高亮颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#0DB78A</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-step-item</strong>【slot】</h3>
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
            <td>top</td>
            <td>步骤条上方的内容</td>
        </tr>
        <tr>
            <td>bottom</td>
            <td>步骤条下方的内容</td>
        </tr>
        </tbody>
    </table>
</div>
