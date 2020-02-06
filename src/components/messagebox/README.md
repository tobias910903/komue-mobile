```
// alert
this.$alert('这里是内容')  // 如果传递一个字符串给 this.$alert, 则 标题默认为 '提示', 按钮默认为 '确定'

如果参数为对象, 则可接受如下配置选项:
title: '这里是标题',
content: '这里是内容',
btnText: '这里是按钮',
component: Component // 用于用户自行指明 Alert 组件

比如:
this.$alert({
  title: '我是标题',
  content: '我是内容'
})

// confirm
this.$confirm('这里是内容');

如果参数为对象, 则可接受如下配置选项:
title: '这里是标题',
content: '这里是内容',
yesStyle: {}, // 设置左边按钮样式
yesText: '',  // 左边按钮文本,
noStyle: {},  // 设置右边按钮样式,
noText: '',   // 设置右边按钮文本
component: Component // 可不设置, 适用于用户自定义组件.

比如:
this.$confirm({
    title: '我是标题',
    content: '我是内容',
    yesText: '你好'
})

// toast
this.$toast(text, {
    durtaion: 200,
    location: 'bottom|center|top' // 默认在中间
});

// toast 的图文混合模式
this.$toast(text, {
    path: path,
    location: 'center',
    toastStyle: {
        height: '100px',
        width: '100px'
    },
    imgStyle: {
        width: '40px',
        marginBottom: '15px'
    }
})

// loading
this.$loading.show('自定义文字'); //显示
this.$loading.hide(); //隐藏

// 自定义样式组件
this.$alert({
    title:'微信弹窗',
    content: '内容内容',
    component: wxAlert
}).then(function(){
    console.log("callback");
});

this.$alert({
    title:'微信弹窗',
    content: '内容内容',
    component: wxConfirm
}).then(function(){
    console.log("callback");
});
```
