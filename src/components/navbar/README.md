### 头部导航

```
<template>
    <div>
        <kom-navbar title="NavBar"></kom-navbar>
        
        <kom-navbar title="NavBar">
            <router-link to="#" slot="left">
                <kom-navbar-back-icon></kom-navbar-back-icon>
            </router-link>
            <router-link to="#" slot="right">
                <kom-navbar-next-icon></kom-navbar-next-icon>
            </router-link>
        </kom-navbar>
        
        <kom-navbar>
            <router-link to="#" slot="left">
                <kom-navbar-back-icon>返回</kom-navbar-back-icon>
            </router-link>
    
            <img slot="center" src="path/img/logo.png"/>
    
            <router-link to="#" slot="right">
                <kom-navbar-next-icon>前进</kom-navbar-next-icon>
            </router-link>
        </kom-navbar>
        
        <kom-navbar title="什么鬼，这个标题怎么那么长啊">
            <router-link to="#" slot="left">
                <kom-icon icon="shopcart-outline" size="25px" color="#777"></kom-icon>
            </router-link>
    
            <router-link to="#" slot="right">
                <kom-icon icon="ucenter-outline" size="25px" color="#777"></kom-icon>
            </router-link>
            <router-link to="#" slot="right">
                <kom-icon icon="ucenter-outline" size="25px" color="#777"></kom-icon>
            </router-link>
            <router-link to="#" slot="right">
                <kom-icon icon="ucenter-outline" size="25px" color="#777"></kom-icon>
            </router-link>
        </kom-navbar>
    </div>
</template>

<script>
    export default {

    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-navbar</strong>【slot】</h3>
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
            <td>left</td>
            <td>导航左侧内容</td>
        </tr>
        <tr>
            <td>center</td>
            <td>导航中间内容</td>
        </tr>
        <tr>
            <td>right</td>
            <td>导航右侧内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-navbar</strong>【props】</h3>
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
            <td>导航标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>fixed</td>
            <td>是否fixed定位</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>bgcolor</td>
            <td>背景颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FFF</td>
        </tr>
        <tr>
            <td>height</td>
            <td>高度</td>
            <td>String</td>
            <td>-</td>
            <td>1rem（50px）</td>
        </tr>
        <tr>
            <td>fontsize</td>
            <td>中间标题字号</td>
            <td>String</td>
            <td>-</td>
            <td>.3rem（15px）</td>
        </tr>
        <tr>
            <td>color</td>
            <td>按钮字体颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#5C5C5C</td>
        </tr>
        <tr>
            <td>border-color</td>
            <td>底边框颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#E4E4E4</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-navbar-back-icon || kom-navbar-next-icon</strong>【slot】</h3>
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
<h3><strong>kom-navbar-back-icon || kom-navbar-next-icon</strong>【props】</h3>
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
            <td>String</td>
            <td>-</td>
            <td>#5C5C5C</td>
        </tr>
        </tbody>
    </table>
</div>
