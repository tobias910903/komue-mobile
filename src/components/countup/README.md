### 数字动画

> 调用

```
<template>
    <kom-countup
            endnum="1200"
            duration="3"
            decimals="2"
            separator=","
            prefix="$"
            suffix="美元"
    ></kom-countup>
</template>

<script type="text/babel">
    export default {
        
    }
</script>
```

<br/>

> 手动控制开始

```
<template>
    <kom-countup endnum="100" suffix="%" :start="start1"></kom-countup>
    <kom-button size="small" @click.native="start1 = true">开始</kom-button>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                start1: false
            }
        }
    }
</script>
```

- 参数:start绑定到本地变量start1(false)，通过改变start1(true)的值即开始

<br/>

> 更多

```
<template>
    <div>
        <div>
            <kom-countup endnum="50000" ref="demoCountup1" duration="200"></kom-countup>
            <kom-button size="small" @click.native="pauseResume">{{pause ? '继续' : '暂停'}}</kom-button>
        </div>
        <div>
            <kom-countup endnum="5000" ref="demoCountup2"></kom-countup>
            <kom-button size="small" @click.native="reset">重置</kom-button>
            <kom-button size="small" @click.native="start" type="warning" v-show="showBtn">重新开始</kom-button>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                showBtn: false,
                pause: false
            }
        },
        methods: {
            pauseResume() {
                this.pause = !this.pause;
                this.$refs.demoCountup1.instance.pauseResume();
            },
            reset() {
                this.showBtn = true;
                this.$refs.demoCountup2.instance.reset();
            },
            start() {
                this.$refs.demoCountup2.instance.start();
            }
        }
    }
</script>
```

- kom-countup 组件是基于 CountUp.js 创建的。因此同样拥有其方法，例如：

  继续/暂停：this.$refs.demoCountup.instance.pauseResume();  
  重置：this.$refs.demoCountup.instance.reset();  
  开始：this.$refs.demoCountup.instance.start();  
  修改：this.$refs.demoCountup.instance.update();

<br/>

<h2>API</h2>
<h3><strong>kom-countup</strong>【props】</h3>
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
            <td>start</td>
            <td>是否立即开始动画</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>startnum</td>
            <td>开始数值</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>endnum</td>
            <td>结束数值</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>decimals</td>
            <td>小数的位数</td>
            <td>Number</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>duration</td>
            <td>动画执行时间（秒）</td>
            <td>Number</td>
            <td>-</td>
            <td>2</td>
        </tr>
        <tr>
            <td>use-easing</td>
            <td>是否使用easy动画效果</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>separator</td>
            <td>每隔三位的分隔符</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>prefix</td>
            <td>数字前头标识</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>suffix</td>
            <td>数字末尾标识</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>动画执行完毕调用方法</td>
            <td>Function</td>
            <td>-</td>
            <td>-</td>
        </tr>
        </tbody>
    </table>
</div>
