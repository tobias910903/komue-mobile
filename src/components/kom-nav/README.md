```
<template>
    <kom-nav title="顶部标题" backIcon @backFun="$store.commit('backAction')" leftText="返回"></kom-nav>
    <kom-nav title="话题" backIcon @backFun="$store.commit('backAction')" @prevFun="alert(213)" rightText="右侧标题" rightIcon="kiconadd"></kom-nav>
</template>
```
