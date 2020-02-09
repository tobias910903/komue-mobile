### 弹窗

```
<template>
    <div>
        <kom-button size="large" type="primary" @click.native="show1 = true">中间弹出</kom-button>
        <kom-button size="large" type="warning" @click.native="show2 = true">下部弹出</kom-button>
        <kom-button size="large" type="danger" @click.native="show3 = true">左侧弹出</kom-button>
        <kom-button size="large" type="danger" @click.native="show4 = true">右侧弹出</kom-button>

        <kom-popup v-model="show1" position="center" width="90%">
            <div style="background-color:#fff;">
                <p>
                    我为什么喜欢在京东买东西，因为今天买明天就可以送到。我为什么每个商品的评价都一样，因为在京东买的东西太多太多了，
                    导致积累了很多未评价的订单，所以我统一用段话作为评价内容。京东购物这么久，有买到很好的产品，也有买到比较坑的产品，
                    如果我用这段话来评价，说明这款产品没问题，至少85分以上，而比较垃圾的产品，我绝对不会偷懒到复制粘贴评价，我绝对会用心的差评，
                    这样其他消费者在购买的时候会作为参考，会影响该商品销量，而商家也会因此改进商品质牌质量非常好，与卖家描述的完全一致，
                    非常满意，真的很喜欢。
                </p>
                <p style="color:#F00;margin-top: 10px;">
                    呐~你也看到了，这只是一个普通弹窗，未设置内外边距。
                </p>
                <p style="text-align: center;">
                    <kom-button @click.native="show1 = false">Close Center Popup</kom-button>
                </p>
            </div>
        </kom-popup>

        <kom-popup v-model="show2" position="bottom" height="60%">
            <kom-button type="warning" style="margin: 30px;" @click.native="show2 = false">Close Bottom Popup</kom-button>
        </kom-popup>

        <kom-popup v-model="show3" position="left" width="60%">
            <kom-button type="danger" style="margin: 30px;" @click.native="show3 = false">Close Left Popup</kom-button>
        </kom-popup>

        <kom-popup v-model="show4" position="right">
            <kom-button type="danger" style="margin: 30px;" @click.native="show4 = false">Close Right Popup</kom-button>
        </kom-popup>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-popup</strong>【slot】</h3>
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
            <td>内容（超出容器将出现滚动条）</td>
        </tr>
        <tr>
            <td>top</td>
            <td>顶部内容（仅在position != 'center'中生效）</td>
        </tr>
        <tr>
            <td>bottom</td>
            <td>底部内容（仅在position != 'center'中生效）</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-popup</strong>【props】</h3>
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
            <td>position</td>
            <td>显示位置</td>
            <td>String</td>
            <td><span>bottom</span>, <span>center</span>, <span>left</span>, <span>right</span></td>
            <td>bottom</td>
        </tr>
        <tr>
            <td>height</td>
            <td>高度</td>
            <td>String</td>
            <td>-</td>
            <td>auto</td>
        </tr>
        <tr>
            <td>width</td>
            <td>宽度</td>
            <td>String</td>
            <td>-</td>
            <td>auto</td>
        </tr>
        <tr>
            <td>close-on-masker</td>
            <td>是否点击遮罩关闭弹窗</td>
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
