### 滚动加载

```
<template>
    <kom-infinitescroll :callback="loadList" ref="infinitescrollDemo">

        <kom-list theme="1" slot="list">
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

        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="path/img/loading.svg"/>

    </kom-infinitescroll>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                page: 1,
                pageSize: 10,
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
                this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
                    params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
                }).then(function (response) {
                    const _list = response.body;

                    this.list = [...this.list, ..._list];

                    if (_list.length < this.pageSize || this.page == 3) {
                        /* 所有数据加载完毕 */
                        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                        return;
                    }

                    /* 单次请求数据完毕 */
                    this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

                    this.page++;
                });
            }
        }
    }
</script>
```

- 在kom-infinitescroll组件上绑定:callback="loadList"方法，当列表滚动到一定位置后，将会调用loadList方法，从而获取下一页的数据；

  slot="list"：列表显示内容；  
  slot="loadingTip"：请求数据中提示内容；  
  slot="doneTip"：所有数据加载完毕后提示内容；

- 三个自定义事件（目的通知组件做出相应处理）：

  单次请求数据加载完毕后：this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
  所有数据加载完毕后：this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
  重新初始化：this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit');

<br/>

<h2>API</h2>
<h3><strong>kom-infinitescroll</strong>【slot】</h3>
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
            <td>list</td>
            <td>列表内容</td>
        </tr>
        <tr>
            <td>loadingTip</td>
            <td>加载中提示内容</td>
        </tr>
        <tr>
            <td>doneTip</td>
            <td>所有数据加载完毕后提示内容</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-infinitescroll</strong>【props】</h3>
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
            <td>当列表滚动到底部时，调用的自定义方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>distance</td>
            <td>触发加载方法的滚动距离阈值（像素）</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>scroll-top</td>
            <td>是否初始化滚动至顶部</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        </tbody>
    </table>
</div>
