### 时间组件

> 常规

```
<template>
    <kom-datetime style="border:1px solid #000;height: 50px;line-height: 50px;text-align: center;" v-model="datetime0"></kom-datetime>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                datetime0: ''
            }
        }
    }
</script>
```

<br/>

> 结合Cell组件

```
<template>
    <kom-cell-group>
        <kom-cell-item arrow>
            <span slot="left">Time：</span>
            <kom-datetime type="time" v-model="datetime1" slot="right"></kom-datetime>
        </kom-cell-item>
        <kom-cell-item arrow>
            <span slot="left">Day：</span>
            <kom-datetime type="day" v-model="datetime2" slot="right"></kom-datetime>
        </kom-cell-item>
        <kom-cell-item arrow>
            <span slot="left">Month：</span>
            <kom-datetime type="month" v-model="datetime3" slot="right"></kom-datetime>
        </kom-cell-item>
        <kom-cell-item arrow>
            <span slot="left">Date：</span>
            <kom-datetime type="date" v-model="datetime4" slot="right"></kom-datetime>
        </kom-cell-item>
        <kom-cell-item arrow>
            <span slot="left">DateTime：</span>
            <kom-datetime type="datetime" v-model="datetime5" slot="right"></kom-datetime>
        </kom-cell-item>
        <kom-cell-item arrow>
            <span slot="left">自定义模板：</span>
            <kom-datetime v-model="datetime6" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right"></kom-datetime>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                datetime1: '05:21',
                datetime2: '03-29',
                datetime3: '2016-06',
                datetime4: '2017-05-11',
                datetime5: '2017-05-11 06:06',
                datetime6: '2017-05-11',
                yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
                monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
                dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
            }
        }
    }
</script>
```

- 设置 type 为 datetime/date/month/day/time 即可自定义显示时间类型；
  
  通过设置 year-format/month-format/day-format 可自定义弹窗模板。模板须为一个包含了 {value} 的字符串，{value} 会被解析为相应选项的值。

<br/>

> 限制时间

```
<template>
    <kom-cell-group>
        <kom-cell-item arrow>
            <span slot="left">时间段范围：</span>
            <kom-datetime start-date="2012-03-16 15:13" end-date="2019-10-21 22:21" v-model="datetime7" slot="right"></kom-datetime>
        </kom-cell-item>
    </kom-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                datetime7: ''
            }
        }
    }
</script>
```

<br/>

> 手动打开

```
<template>
    <div>
        <kom-cell-group>
            <kom-cell-item arrow>
                <span slot="left">时间：</span>
                <kom-datetime ref="datetime" v-model="datetime8" slot="right"></kom-datetime>
            </kom-cell-item>
        </kom-cell-group>
        <kom-button-group>
            <kom-button size="large" @click.native="open">手动打开</kom-button>
        </kom-button-group>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                datetime8: ''
            }
        },
        methods: {
            open() {
                this.$refs.datetime.open();
            }
        }
    }
</script>
```

- 提供了两个供外部调用的方法：open 和 close，分别用于打开和关闭选择器；设置属性 ref="datetime"，通过 this.$refs.datetime.open();即可手动开启时间弹窗。

<br/>

<h2>API</h2>
<h3><strong>kom-datetime</strong>【props】</h3>
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
            <td>init-emit</td>
            <td>是否初始化修正值</td>
            <td>Boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
        </tr>
        <tr>
            <td>type</td>
            <td>时间类型</td>
            <td>String</td>
            <td><span>datetime</span>, <span>date</span>, <span>time</span>, <span>month</span>, <span>day</span></td>
            <td>datetime</td>
        </tr>
        <tr>
            <td>start-date</td>
            <td>限制开始时间，格式为：【2008-08-08 08:08】或【2008/08/08 08:08】<br>或【2008-08-08】或【2008/08/08】或【08:08】</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>end-date</td>
            <td>限制结束时间，格式为：同上</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>start-year</td>
            <td>可选“年”的开始值</td>
            <td>Number</td>
            <td>-</td>
            <td>0（不限制）</td>
        </tr>
        <tr>
            <td>end-year</td>
            <td>可选“年”的结束值</td>
            <td>Number</td>
            <td>-</td>
            <td>0（不限制）</td>
        </tr>
        <tr>
            <td>start-hour</td>
            <td>可选“小时”的开始值（取值0-23）</td>
            <td>Number</td>
            <td>-</td>
            <td>0</td>
        </tr>
        <tr>
            <td>end-hour</td>
            <td>可选“小时”的结束值（取值1-23）</td>
            <td>Number</td>
            <td>-</td>
            <td>23</td>
        </tr>
        <tr>
            <td>year-format</td>
            <td>“年”模板【需包含 {value} 字符串，支持HTML】</td>
            <td>String</td>
            <td>-</td>
            <td>{value}年</td>
        </tr>
        <tr>
            <td>month-format</td>
            <td>“月”模板【需包含 {value} 字符串，支持HTML】</td>
            <td>String</td>
            <td>-</td>
            <td>{value}月</td>
        </tr>
        <tr>
            <td>day-format</td>
            <td>“日”模板【需包含 {value} 字符串，支持HTML】</td>
            <td>String</td>
            <td>-</td>
            <td>{value}日</td>
        </tr>
        <tr>
            <td>hour-format</td>
            <td>“小时”模板【需包含 {value} 字符串，支持HTML】</td>
            <td>String</td>
            <td>-</td>
            <td>{value}时</td>
        </tr>
        <tr>
            <td>minute-format</td>
            <td>“分钟”模板【需包含 {value} 字符串，支持HTML】</td>
            <td>String</td>
            <td>-</td>
            <td>{value}分</td>
        </tr>
        <tr>
            <td>value</td>
            <td>值，格式为：【2008-08-08 08:08】或【2008/08/08 08:08】<br>或【2008-08-08】或【2008/08/08】或【08:08】</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>cancel-text</td>
            <td>取消文字</td>
            <td>String</td>
            <td>-</td>
            <td>取消</td>
        </tr>
        <tr>
            <td>confirm-text</td>
            <td>确定文字</td>
            <td>String</td>
            <td>-</td>
            <td>确定</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>没有内容提示的文字（:init-emit="false"时生效）</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>callback</td>
            <td>点击确定后回调</td>
            <td>Function</td>
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
