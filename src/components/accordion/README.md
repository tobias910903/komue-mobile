### 移动端常见将内容展开或折叠的组件

> 只允许单个展开

```
<template>
    <yd-accordion>
        <yd-accordion-item title="李白《月下独酌》">
            <div style="padding: .24rem;">
                <p>花间一壶酒，独酌无相亲。</p>
                <p>举杯邀明月，对影成三人。</p>
                <p>月既不解饮，影徒随我身。</p>
                <p>暂伴月将影，行乐须及春。</p>
                <p>我歌月徘徊，我舞影零乱。</p>
                <p>醒时同交欢，醉后各分散。</p>
                <p>永结无情游，相期邈云汉。</p>
            </div>
        </yd-accordion-item>
        <yd-accordion-item title="杜甫《望岳》">
            <div style="padding: .24rem;">
                <p>岱宗夫如何，齐鲁青未了。</p>
                <p>造化钟神秀，阴阳割昏晓。</p>
                <p>荡胸生层云，决眦入归鸟。</p>
                <p>会当凌绝顶，一览众山小。</p>
            </div>
        </yd-accordion-item>
        <yd-accordion-item title="王维《青溪》">
            <div style="padding: .24rem;">
                <p>言入黄花川，每逐青溪水。</p>
                <p>随山将万转，趣途无百里。</p>
                <p>声喧乱石中，色静深松里。</p>
                <p>漾漾泛菱荇，澄澄映葭苇。</p>
                <p>我心素已闲，清川澹如此。</p>
                <p>请留盘石上，垂钓将已矣。</p>
            </div>
        </yd-accordion-item>
    </yd-accordion>
</template>

<script type="text/babel">
    export default {

    }
</script>
```
<br/>

> 展开多个
```
<template>
    <yd-accordion accordion>
        <yd-accordion-item title="李白" open>
            <div style="padding: .24rem;">
                李白（701年－762年），字太白，号青莲居士，又号“谪仙人”，是唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫并称为“李杜”，为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”。其人爽朗大方，爱饮酒作诗，喜交友。
            </div>
        </yd-accordion-item>
        <yd-accordion-item title="杜甫">
            <div style="padding: .24rem;">
                杜甫（712年—770年），字子美，汉族，本襄阳人，后徙河南巩县。自号少陵野老，唐代伟大的现实主义诗人，与李白合称“李杜”。为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”，杜甫也常被称为“老杜”。
            </div>
        </yd-accordion-item>
        <yd-accordion-item title="王维">
            <div style="padding: .24rem;">
                王维（701年－761年，一说699年—761年），河东蒲州（今山西运城）人，祖籍山西祁县。唐朝著名诗人、画家，字摩诘，号摩诘居士。
            </div>
        </yd-accordion-item>
    </yd-accordion>
</template>

<script type="text/babel">
    export default {
        
    }
</script>
```
- 组件 yd-accordion 上添加 accordion或:accordion="true"即可同时展开多个面板
- 组件 yd-accordion-item 上添加 open或:open="true"即可默认展开面板

<br/>

> 设置部分标题内容不触发展开折叠
```
<template>
    <yd-accordion>
        <yd-accordion-item title="李白可为你展开">
            <div slot="icon" style="color:#F00;">点击这里不会触发折叠</div>
            <div slot="txt" style="color:#F00;">这里也不会触发折叠</div>
            <div>
                李白（701年－762年），字太白，号青莲居士，又号“谪仙人”......
            </div>
        </yd-accordion-item>
        <yd-accordion-item>
            <div slot="icon" style="color:blue;">标题也没有话就不能自动展开折叠咯</div>
            <div>
                杜甫（712年—770年），字子美，汉族，本襄阳人......
            </div>
        </yd-accordion-item>
    </yd-accordion>
</template>

<script type="text/babel">
    export default {

    }
</script>
```
- 通过设置 yd-accordion-item的slot【icon和txt】即可

<br/>

> 手动展开
```
<template>
    <div>
        <yd-accordion>
            <yd-accordion-item title="李白" ref="accordion" :auto="false">
                <div>
                    李白（701年－762年），字太白，号青莲居士，又号“谪仙人”......
                </div>
            </yd-accordion-item>
        </yd-accordion>
        <yd-button size="large" @click.native="open">手动{{isOpen ? '折叠' : '展开'}}</yd-button>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            open() {
                this.isOpen = !this.isOpen;
                if (this.isOpen) {
                    this.$refs.accordion.openItem();
                } else {
                    this.$refs.accordion.closeItem();
                }
            }
        }
    }
</script>
```
- 设置 yd-accordion-item 的参数 :auto="false" 将禁用其自动折叠展开；
- 通过使用 this.$refs.accordion.openItem();展开面板；
- 通过使用 this.$refs.accordion.closeItem();折叠面板；

<br/>

<h2>API</h2> <h3><strong>yd-accordion</strong>【slot】</h3>
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
</div> <h3><strong>yd-accordion</strong>【props】</h3>
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
            <td>accordion</td>
            <td>是否可以同时展开多个面板</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        </tbody>
    </table>
</div> <h3><strong>yd-accordion-item</strong>【slot】</h3>
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
        <tr>
            <td>title</td>
            <td>标题内容（可自定义颜色，放置图标等等）</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>没有事件响应的标题图标内容（位于“标题内容”前面）</td>
        </tr>
        <tr>
            <td>txt</td>
            <td>没有事件响应的其他标题内容（位于“标题内容”后面）</td>
        </tr>
        </tbody>
    </table>
</div> <h3><strong>yd-accordion-item</strong>【props】</h3>
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
            <td>标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>open</td>
            <td>是否默认展开面板</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>auto</td>
            <td>是否自动展开折叠参数</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        </tbody>
    </table>
</div> 

