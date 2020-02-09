### 选项卡

> 普通调用

```
<template>
    <kom-tab>
        <kom-tab-panel label="选项一">土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。</kom-tab-panel>
        <kom-tab-panel label="选项二">我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</kom-tab-panel>
        <kom-tab-panel label="选项三">时间是一切财富中最宝贵的财富。</kom-tab-panel>
        <kom-tab-panel label="选项四">真理惟一可靠的标准就是永远自相符合。</kom-tab-panel>
    </kom-tab>
</template>

<script type="text/babel">
    export default {

    }
</script>
```

<br/>

> 设置初始，手动切换

```
<template>
    <kom-tab v-model="tab1">
        <kom-tab-panel label="选项一">111111</kom-tab-panel>
        <kom-tab-panel label="选项二">222222 - 【设置初始激活项】</kom-tab-panel>
        <kom-tab-panel label="选项三">333333</kom-tab-panel>
        <kom-tab-panel label="选项四">444444</kom-tab-panel>
    </kom-tab>

    <kom-button-group>
        <kom-button size="large" @click.native="tab1 = 3" type="warning">go to 3</kom-button>
    </kom-button-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                tab1: 1
            }
        }
    }
</script>
```

<br/>

> 多个选项卡，左右滑动

```
<template>
    <kom-tab horizontal-scroll>
        <kom-tab-panel label="选项一">111111</kom-tab-panel>
        <kom-tab-panel label="选项二">222222</kom-tab-panel>
        <kom-tab-panel label="选项三">333333</kom-tab-panel>
        <kom-tab-panel label="选项四">444444</kom-tab-panel>
        <kom-tab-panel label="选项五">555555</kom-tab-panel>
        <kom-tab-panel label="选项六">666666</kom-tab-panel>
        <kom-tab-panel label="选项七">777777</kom-tab-panel>
        <kom-tab-panel label="选项八">888888</kom-tab-panel>
        <kom-tab-panel label="选项九">999999</kom-tab-panel>
        <kom-tab-panel label="选项十">000000</kom-tab-panel>
    </kom-tab>
</template>
```

<br/>

> 异步获取数据

```
<template>
    <kom-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick">
        <kom-tab-panel v-for="item in items" :label="item.label">{{item.content}}</kom-tab-panel>
    </kom-tab>
</template>

<script>
    export default {
        data() {
            return {
                tab2: 0,
                items: [
                    {label: '1111', content: 'aaaaaaaaaaa'},
                    {label: '2222', content: 'bbbbbbbbbbb'},
                    {label: '3333', content: 'ccccccccccc'},
                    {label: '4444', content: 'ddddddddddd'}
                ]
            }
        },
        methods: {
            fn(label, key) {
                console.log(label, key);
            },
            itemClick(key) {
                console.log('数据加载中');
                setTimeout(() => {
                    this.tab2 = key;
                    console.log('数据加载完毕');
                    this.items[key].content = '新内容【key:' + key + '】新内容_' + new Date().getTime();
                }, 1000);
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-tab</strong>【slot】</h3>
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
<h3><strong>kom-tab</strong>【props】</h3>
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
            <td>active-color</td>
            <td>选中时高亮的颜色值</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FF5E53</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>切换时调用的函数（返回当前label和当前tabkey）</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>item-click</td>
            <td>点击选项卡时触发的方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>prevent-default</td>
            <td>是否自动切换</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>horizontal-scroll</td>
            <td>是否可横向滚动</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>bg-color</td>
            <td>背景颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#FFF</td>
        </tr>
        <tr>
            <td>color</td>
            <td>字体颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#585858</td>
        </tr>
        <tr>
            <td>font-size</td>
            <td>字体大小</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>.28rem（14px）</td>
        </tr>
        <tr>
            <td>height</td>
            <td>高度</td>
            <td>String &amp;&amp; (px或rem)</td>
            <td>-</td>
            <td>.85rem（42.5px）</td>
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
<h3><strong>kom-tab-panel</strong>【slot】</h3>
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
<h3><strong>kom-tab-panel</strong>【props】</h3>
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
            <td>label</td>
            <td>选项卡标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>active</td>
            <td>是否激活当前选项卡</td>
            <td>Boolean</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>tabkey</td>
            <td>选项卡的值（多用于区分各个选项卡），不指定将返回当前索引</td>
            <td>String || Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>badge</td>
            <td>角标数值</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>badge-bgcolor</td>
            <td>角标背景颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#F6514B</td>
        </tr>
        <tr>
            <td>badge-scale</td>
            <td>角标缩放比例</td>
            <td>String</td>
            <td>-</td>
            <td>.7</td>
        </tr>
        <tr>
            <td>dot</td>
            <td>是否显示小圆点</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>dot-color</td>
            <td>小圆点颜色</td>
            <td>String &amp;&amp; 常规颜色值</td>
            <td>-</td>
            <td>#F6514B</td>
        </tr>
        </tbody>
    </table>
</div>
