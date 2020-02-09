### 多选列表

> 默认使用

```
<template>
    <kom-checklist v-model="checklist1">
        <kom-checklist-item val="1">
            <div style="height: 50px;line-height: 50px;">1 -- 值：{{checklist1}}</div>
        </kom-checklist-item>
        <kom-checklist-item val="2">
            <div style="height: 50px;line-height: 50px;">2</div>
        </kom-checklist-item>
        <kom-checklist-item val="3">
            <div style="height: 50px;line-height: 50px;">3</div>
        </kom-checklist-item>
    </kom-checklist>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checklist1: [1]
            }
        }
    }
</script>
```

<br/>

> 图标显示在右侧

```
<template>
    <kom-checklist align="right" v-model="checklist2">
        <kom-checklist-item val="1">
            <div style="height: 50px;line-height: 50px;">1 -- 值：{{checklist2}}</div>
        </kom-checklist-item>
        <kom-checklist-item val="2">
            <div style="height: 50px;line-height: 50px;">2</div>
        </kom-checklist-item>
        <kom-checklist-item val="3">
            <div style="height: 50px;line-height: 50px;">3</div>
        </kom-checklist-item>
    </kom-checklist>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checklist1: [1]
            }
        }
    }
</script>
```

<br/>

> 结合kom-checkbox组件实现全选

```
<template>
    <div>
        <div style="padding-left:12px;margin-bottom: 10px;">
            <kom-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选 {{isCheckAll}}</kom-checkbox>
        </div>

        <kom-checklist v-model="checklist3" ref="checklistDemo" :callback="change">
            <kom-checklist-item val="1">
                <div style="height: 50px;line-height: 50px;">1 -- 值：{{checklist3}}</div>
            </kom-checklist-item>
            <kom-checklist-item val="2">
                <div style="height: 50px;line-height: 50px;">2</div>
            </kom-checklist-item>
            <kom-checklist-item val="3">
                <div style="height: 50px;line-height: 50px;">3</div>
            </kom-checklist-item>
        </kom-checklist>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checklist3: [],
                isCheckAll: false
            }
        },
        methods: {
            change(value, isCheckAll) {
                this.isCheckAll = isCheckAll;
            },
            checkAll() {
                this.isCheckAll = !this.isCheckAll;
                this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll);
            }
        }
    }
</script>
```

- 第一步，实现全选：

  ① 给kom-checklist添加属性ref="checklistDemo"；  
  ② 将kom-checkbox绑定到一个本地变量isCheckAll，通过设置其值判定是否选中；  
  ③ 给kom-checkbox添加一个方法:change="checkAll"，通过自定义方法this.$refs.checklistDemo.$emit('ydui.checklist.checkall', true|false)实现全选|反选。

- 第二步，监听多选列表是否全选：

  给kom-checklist添加回调方法:callback="change"，其返回两个值（当前选择的值和是否全选），以改变isCheckAll的值。

<br/>

> 禁止点击整行触发选中

```
<template>
    <kom-checklist v-model="checklist4" :label="false">
        <kom-checklist-item val="aaa">
            <kom-flexbox style="padding: 15px 0;">
                <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg" class="demo-checklist-img">
                <kom-flexbox-item align="top">
                    [aaa] 类似购物车 / 类似购物车<br/>
                    <span style="color: blue;">点击这边的内容是禁止选中的</span><br/>
                    <p style="color:#F00;">选中值：{{checklist4}}</p>
                </kom-flexbox-item>
            </kom-flexbox>
        </kom-checklist-item>
        <kom-checklist-item val="bbb">
            <kom-flexbox style="padding: 15px 0;">
                <img src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg" class="demo-checklist-img">
                <kom-flexbox-item align="top">
                    [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
                </kom-flexbox-item>
            </kom-flexbox>
        </kom-checklist-item>
        <kom-checklist-item val="ccc">
            <kom-flexbox style="padding: 15px 0;">
                <img src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg" class="demo-checklist-img">
                <kom-flexbox-item align="top">
                    [ccc] 展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果
                </kom-flexbox-item>
            </kom-flexbox>
        </kom-checklist-item>
    </kom-checklist>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checklist4: []
            }
        }
    }
</script>
```

<br/>

<h2>API</h2>
<h3><strong>kom-checklist</strong>【slot】</h3>
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
<h3><strong>kom-checklist</strong>【props】</h3>
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
            <td>选中颜色</td>
            <td>String &amp; 常规颜色值</td>
            <td>-</td>
            <td>#4CD864</td>
        </tr>
        <tr>
            <td>align</td>
            <td>图标放置位置</td>
            <td>String</td>
            <td><span>left</span>, <span>right</span></td>
            <td>left</td>
        </tr>
        <tr>
            <td>label</td>
            <td>是否启用点击整行触发选中</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>回调方法（返回当前选中值和是否全选）</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
<h3><strong>kom-checklist-item</strong>【slot】</h3>
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
<h3><strong>kom-checklist-item</strong>【props】</h3>
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
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>val</td>
            <td>值（必填）</td>
            <td>Boolean,String,Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>change</td>
            <td>回调方法（返回当前值和是否选中）</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
