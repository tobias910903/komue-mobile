```
<template>
  <div>
    <button @click="alert">Alert</button>
    <button @click="alert2">自定义按钮样式的Alert</button>
    <button @click="confirm">Confirm</button>
    <button @click="confirm2">自定义按钮样式的Confirm</button>
    <button @click="wxAlert">wxAlert</button>
    <button @click="wxConfirm">wxConfirm</button>
    <button @click="toast">toast</button>
    <button @click="loading">loading</button>
  </div>
</template>

<script>
  import {Alert, Confirm, Toast, Loading} from '@/components/kom-messagebox'
  Vue.use(Alert);
  Vue.use(Confirm);
  Vue.use(Toast);
  Vue.use(Loading);

  // 自定义的样式
  import wxAlert from '@/components/kom-messagebox/wechat/Alert'
  import wxConfirm from '@/components/kom-messagebox/wechat/Confirm'
  import komMessagebox from '@/components/kom-messagebox'
  import Vue from 'vue'
  Vue.use(komMessagebox)

  export default {
    name: 'komMessagebox',

    components: {
      wxAlert,
      wxConfirm
    },

    methods: {
      alert () {
        this.$alert('IOS弹窗').then(function(){
          console.log("callback");
        })
      },
      alert2 () {
        this.$alert({
          title:'IOS弹窗2',
          content: '内容内容2',
          btnText: '4',
          style: {
            'background-color': '#ff0000',
            'font-size': '20px',
            'color': '#ffffff'
          }
        })
      },
      wxAlert () {
        this.$alert({
          title:'微信弹窗',
          content: '内容内容',
          component: wxAlert
        }).then(function(){
          console.log("callback");
        })
      },
      confirm () {
        this.$confirm('IOS弹窗2').then(function(){
          console.log("callback-true");
        }).catch(function(){
          console.log("callback-false");
        })
      },
      confirm2 () {
        this.$confirm({
          title: '标题',
          content: '6666',
          yesText:  '确定11',
          noStyle: {},
          noText: '取消22',
          yesStyle: {
            'background-color': '#333333',
            'font-size': '12px',
            'color': '#cccccc'
          }
        }).then(function(){
          console.log("callback-true");
        }).catch(function(){
          console.log("callback-false");
        })
      },
      wxConfirm () {
        this.$confirm({
          title: '微信弹窗2',
          content: '内容内容',
          component: wxConfirm
        }).then(function(){
          console.log("callback-true");
        }).catch(function(){
          console.log("callback-false");
        })
      },
      toast () {
        this.$toast('笑嘻嘻嘻嘻', {
          location: 'bottom'
        })
      },
      loading () {
        this.$loading.show('自定义文字')
      }
    }
  }
</script>
```

> 参考：https://github.com/helicopters/wc-messagebox
