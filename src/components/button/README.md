### 按钮

```
<template>
    <div>
        <kom-button type="primary">primary</kom-button>
        <kom-button type="danger">danger</kom-button>
        <kom-button type="warning">warning</kom-button>
        <kom-button type="hollow">hollow</kom-button>
        <kom-button type="disabled" disabled>disabled</kom-button>
        <kom-button size="large" type="primary">primary</kom-button>
        <kom-button size="large" type="danger">danger</kom-button>
        <kom-button size="large" type="warning">warning</kom-button>
        <kom-button size="large" type="disabled" disabled>disabled</kom-button>
        <kom-button size="large" type="hollow">hollow</kom-button>
        <kom-button size="large" bgcolor="#000" color="#FFF">Custom Color</kom-button>
        <kom-button size="large" type="primary" shape="circle">shape="circle"</kom-button>
        <kom-button size="large" type="primary" shape="angle">shape="angle"</kom-button>
        <kom-button size="large" type="primary" loading loading-txt="缓慢加载中">primary</kom-button>
        <kom-button-group>
            <kom-button size="large" type="primary">Block Button</kom-button>
        </kom-button-group>
        <kom-button size="large" @click.native="handleClick" type="danger">Bind Click</kom-button>
    </div>
</template>

<script type="text/babel">
    export default {
        methods: {
            handleClick() {
                alert('Hello World!');
            }
        }
    }
</script>
```

- 设置type属性改变按钮组件颜色
- 设置size属性为large即为块级按钮
- 设置bgcolor(背景颜色)和color(字体颜色)即可自定义按钮颜色
- 圆角 shape="circle"
- 直角 shape="angle"
- 实际上分组只是将按钮间隔屏幕两边的距离，否则按钮将贴至屏幕边缘，在块级按钮外部添加kom-button-group即可
- 添加参数loading 或 :loading="true"即可。添加loading-text="缓慢加载中"即可自定义显示文字
注意：只有 size="large" 中 loading-text 才生效。

<br/>

<h2>API</h2>
<h3><strong>kom-button-group</strong>【slot】</h3>
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
            <td>内容，将按钮间隔屏幕两边的距离</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-button</strong>【props】</h3>
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
            <td>按钮类型</td>
            <td>String</td>
            <td><span>primary</span>, <span>danger</span>, <span>warning</span>, <span>hollow</span>,
                <span>disabled</span></td>
            <td>primary</td>
        </tr>
        <tr>
            <td>size</td>
            <td>按钮大小</td>
            <td>String</td>
            <td><span>mini</span>, <span>small</span>, <span>large</span></td>
            <td>small</td>
        </tr>
        <tr>
            <td>bgcolor</td>
            <td>按钮背景颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>color</td>
            <td>按钮字体颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
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
            <td>shape</td>
            <td>形状（分为R角square，大圆角circle和直角angle）</td>
            <td>String</td>
            <td><span>square</span>, <span>circle</span>, <span>angle</span></td>
            <td>square</td>
        </tr>
        <tr>
            <td>action-type</td>
            <td>渲染后 &lt;button&gt; 的类型</td>
            <td>String</td>
            <td><span>button</span>, <span>submit</span>, <span>reset</span></td>
            <td>button</td>
        </tr>
        <tr>
            <td>loading</td>
            <td>是否加载中</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>loading-color</td>
            <td>加载中图标颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FFF</td>
        </tr>
        <tr>
            <td>loading-txt</td>
            <td>加载中显示文字</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
