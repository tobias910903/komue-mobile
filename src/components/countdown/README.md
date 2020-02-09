### 时间倒计时

> 默认模板

```
<template>
    <kom-countdown time="2019/06/06 06:06:06"></kom-countdown>
</template>
```

<br/>

> 传入时间为（秒）

```
<template>
    <kom-countdown :time="666666" timetype="second"></kom-countdown>
</template>
```

<br/>

> 传入时间为（时间戳）

```
<template>
    <kom-countdown :time="1559772366" timetype="timestamp"></kom-countdown>
</template>
```

<br/>

> 自定义参数模板

```
<template>
    <kom-countdown time="2019/06/06 06:06:06" format="{%s}秒】{%m}分】{%h}时】{%d}天】"></kom-countdown>
</template>
```

- 设置format参数即可自定义显示模板；
  
  参数可选标识：{%d}天，{%h}时，{%m}分，{%s}秒自定义显示模板。

<br/>

> 通过Slot自定义HTML模板（个位十位一体）

```
<template>
    <kom-countdown time="2019/08/08 08:08:08">
        <span style="color:red;">{%d}<i>天</i></span>
        <span style="color:gray;">{%h}<i>时</i></span>
        <span style="color:blue;">{%m}<i>分</i></span>
        <span style="color:orange;">{%s}<i>秒</i></span>
    </kom-countdown>
</template>
```

<br/>

> 通过Slot自定义HTML模板（个位十位分开）

```
<template>
    <kom-countdown slot="right" time="2019/09/08 00:00:00">
        <em>{%d0}</em><em>{%d1}</em><em>{%d2}</em>天
        <em>{%h1}</em><em>{%h2}</em>小时
        <em>{%m1}</em><em>{%m2}</em>时
        <em>{%s1}</em><em>{%s2}</em>秒
    </kom-countdown>
</template>
```

- 参数可选标识：

  {%d0}天(百位)，{%d1}天(十位)，{%d2}天(个位)，最大支持显示3位数的天；  
  {%h1}时(十位)，{%h2}时(个位)；  
  {%m1}分(十位)，{%m2}分(个位)；  
  {%s1}秒(十位)，{%s2}秒(个位)。

<br/>

<h2>API</h2>
<h3><strong>kom-countdown</strong>【slot】</h3>
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
<h3><strong>kom-countdown</strong>【props】</h3>
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
            <td>time</td>
            <td>结束时间点，时间格式</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>format</td>
            <td>模板参数</td>
            <td>String</td>
            <td>-</td>
            <td>{%d}天{%h}时{%m}分{%s}秒</td>
        </tr>
        <tr>
            <td>timetype</td>
            <td>传入时间类型，datetime：结束时间（时间格式），second：剩余时间（秒），timestamp：时间戳</td>
            <td>String</td>
            <td><span>datetime</span>, <span>second</span>, <span>timestamp</span></td>
            <td>datetime</td>
        </tr>
        <tr>
            <td>done-text</td>
            <td>倒计时结束后显示文字</td>
            <td>String</td>
            <td>-</td>
            <td>已结束</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>倒计时结束后调用方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
