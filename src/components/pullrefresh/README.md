### 下拉刷新

```
<template>
    <kom-pullrefresh :callback="loadList" ref="pullrefreshDemo">

        <kom-list theme="4">
            <kom-list-item v-for="item, key in list" :key="key">
                <img slot="img" :src="item.img">
                <span slot="title">{{item.title}}</span>
                <kom-list-other slot="other">
                    <div>
                        <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                        <span class="list-del-price">¥{{item.productprice}}</span>
                    </div>
                    <div>content</div>
                </kom-list-other>
            </kom-list-item>
        </kom-list>

    </kom-pullrefresh>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                page: 1,
                list: [
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                        title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                        title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                        title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ]
            }
        },
        methods: {
            loadList() {
                const url = 'http://list.KOM.org/getdata.php';

                this.$http.jsonp(url, {params: {type: 'pulldown', page: this.page}}).then((response) => {

                    const _list = response.body;

                    this.list = [..._list, ...this.list];

                    this.$dialog.toast({
                        mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
                    });

                    this.$refs.pullrefreshDemo.$emit('KOM.pullrefresh.finishLoad');

                    this.page++;
                });
            }
        }
    }
</script>
```

- 在kom-pullrefresh组件上绑定:callback="loadList"方法，当拖动列表达到一定位置后将会调用loadList方法，从而获取最新的数据；
  
  单次请求数据加载完毕后，需手动调用自定义事件（通知组件做出相应处理）：
  this.$refs.pullrefreshDemo.$emit('KOM.pullrefresh.finishLoad');

<br/>

<h2>API</h2>
<h3><strong>kom-pullrefresh</strong>【slot】</h3>
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
            <td>列表内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-pullrefresh</strong>【props】</h3>
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
            <td>callback</td>
            <td>当拖动列表达到一定位置后将会调用该自定义方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>stop-drag</td>
            <td>是否禁止拖动加载内容</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>pull-text</td>
            <td>下拉提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>下拉刷新</td>
        </tr>
        <tr>
            <td>drop-text</td>
            <td>下拉到可加载位置提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>松开加载</td>
        </tr>
        <tr>
            <td>loading-text</td>
            <td>加载中提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>加载中...</td>
        </tr>
        <tr>
            <td>show-init-tip</td>
            <td>是否首次加载显示提示图标</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        </tbody>
    </table>
</div>
