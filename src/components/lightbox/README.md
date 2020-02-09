### 图片预览

> 普通使用

```
<template>
    <kom-lightbox>
        <kom-lightbox-img v-for="item, key in list" :key="key" :src="item.src"></kom-lightbox-img>
    </kom-lightbox>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    {src: 'path/img/meizu_s1.jpg'},
                    {src: 'path/img/meizu_s2.jpg'},
                    {src: 'path/img/meizu_s3.jpg'},
                    {src: 'path/img/meizu_s4.jpg'},
                    {src: 'path/img/meizu_s5.jpg'},
                    {src: 'path/img/meizu_s6.jpg'}
                ]
            }
        }
    }
</script>
```

- 在组件kom-lightbox组件内放置对应的kom-lightbox-img并指定src即可；
  
  PS：组件kom-lightbox向下查找所有kom-lightbox-img组件，并给其绑定相应事件， 因此将kom-lightbox-img看成是普通img标签即可。

<br/>

> 添加描述

```
<template>
    <kom-lightbox :num="list.length">
        <kom-lightbox-img v-for="item in list" :src="item.src" :original="item.original"></kom-lightbox-img>

        <kom-lightbox-txt>
            <h1 slot="top">双瞳如小窗 佳景观历历</h1>
            <div slot="content">
                <p>相机：灵犀相通，妙不可言。</p>
                <p>设计：美不胜收，爱不释手。</p>
                <p>体验：强劲性能，持久动力。</p>
                <p>mCharge 4.0：上善若水，不止于快。</p>
                <p>mTouch：指尖轻点，安全随行。</p>
            </div>
        </kom-lightbox-txt>
    </kom-lightbox>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: []
            }
        },
        mounted() {
            setTimeout(() => {
                this.list = [
                    {src: 'path/img/meizu_s1.jpg', original: 'path/img/meizu_1.jpg'},
                    {src: 'path/img/meizu_s2.jpg', original: 'path/img/meizu_2.jpg'},
                    {src: 'path/img/meizu_s3.jpg', original: 'path/img/meizu_3.jpg'},
                    {src: 'path/img/meizu_s4.jpg', original: 'path/img/meizu_4.jpg'},
                    {src: 'path/img/meizu_s5.jpg', original: 'path/img/meizu_5.jpg'},
                    {src: 'path/img/meizu_s6.jpg', original: 'path/img/meizu_6.jpg'}
                ];
            }, 2000);
        }
    }
</script>
```

- 缩略图与原图不一致时，指定组件kom-lightbox-img的original即可，预览原图将会使用此地址。  

  使用kom-lightbox-txt组件可以指定图片描述（仅支持一个）。  
  
  注意：若图片数据为异步时，需出入num 的props。

<br/>

<h2>API</h2>
<h3><strong>kom-lightbox</strong>【slot】</h3>
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
<h3><strong>kom-lightbox</strong>【props】</h3>
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
            <td>num</td>
            <td>图片个数（异步数据需指定）</td>
            <td>Number</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>close-text</td>
            <td>关闭提示文字</td>
            <td>String</td>
            <td>-</td>
            <td>关闭</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-lightbox-img</strong>【props】</h3>
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
            <td>src</td>
            <td>图片路径</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>original</td>
            <td>原图路径（不指定将使用src）</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-lightbox-txt</strong>【slot】</h3>
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
            <td>上部内容</td>
        </tr>
        <tr>
            <td>content</td>
            <td>主体内容（超出一定高度，将出现滚动条）</td>
        </tr>
        <tr>
            <td>bottom</td>
            <td>底部内容</td>
        </tr>
        </tbody>
    </table>
</div>
