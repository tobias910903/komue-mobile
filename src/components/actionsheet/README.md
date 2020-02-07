### 移动端常见操作表，从屏幕下方移入

> 带取消

```
<template>
    <div>
        <yd-button @click.native="show1 = true" size="large">带取消</yd-button>
    
        <yd-actionsheet :items="myItems1" v-model="show1" cancel="取消"></yd-actionsheet>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                show1: false,
                myItems1: [
                    {
                        label: '拍照',
                        callback: () => {
                            this.$dialog.toast({mes: '咔擦，此人太帅！'});
                            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
                        }
                    },
                    {
                        label: '从相册中偷取',
                        callback: () => {
                            this.$dialog.toast({mes: '看到了不该看到的东西！'});
                        }
                    }
                ]
            }
        }
    }
</script>
```
- 将yd-actionsheet组件的 v-model 绑定到一个本地变量show1，通过操作这个变量即可控制 actionsheet 的显示与隐藏

<br/>

> 不带取消
```
<template>
    <div>
        <yd-button @click.native="show2 = true" size="large" type="warning">不带取消</yd-button>

        <yd-actionsheet :items="myItems2" v-model="show2"></yd-actionsheet>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                show2: false,
                myItems2: [
                    {
                        label: '示例菜单一 - 我是不会关闭的',
                        callback: () => {
                            this.$dialog.toast({mes: 'Say: 我是不会关闭的！'});
                        },
                        stay: true /* 不关闭 */
                    },
                    {
                        label: '示例菜单二 - 自动关闭',
                        callback: () => {
                            this.$dialog.toast({mes: 'Say: 我关闭啦啦啦！'});
                        }
                    },
                    {label: '示例菜单三 - 自动关闭'},
                    {label: '示例菜单四 - 自动关闭'}
                ]
            }
        }
    }
</script>
```
- 将items属性绑定一个由对象组成的数组myItems2，每个对象有label，callback 和 stay 三个键；

    -label 菜单项的文本；

    -callback 点击该菜单项的回调函数；

    -stay 是否关闭 actionsheet，默认false，直接关闭。

<br/>

<h2>API</h2>
<h3><strong>yd-actionsheet</strong>【props】</h3>
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
            <td>items</td>
            <td>菜单项数组：<br>
                [{<br>
                &nbsp;&nbsp;label: String, //菜单项的文本<br>
                &nbsp;&nbsp;callback: Function, //点击该菜单项的回调函数<br>
                &nbsp;&nbsp;stay: Boolean, //是否关闭 actionsheet（默认false，直接关闭）<br>
                }]
            </td>
            <td>Array</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>cancel</td>
            <td>取消按钮的文本，为空则不显示取消按钮</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
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
