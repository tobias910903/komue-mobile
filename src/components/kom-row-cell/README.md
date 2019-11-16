```
<template>
    <div>
        <kom-row-cell :list="rowlist" rowNum="3" @click="cellClick"></kom-row-cell>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rowlist: [
                    {icon: "kiconfenlei", title: "我的1", href: "/post"},
                    {icon: "kiconfenlei", title: "我的2", href: "/post"},
                    {icon: "kiconfenlei", title: "我的3", href: "/post"},
                    {icon: "kiconfenlei", title: "我的4", href: "/post"},
                    {icon: "kiconfenlei", title: "我的5", href: "/post"},
                    {icon: "kiconfenlei", title: "我的6", href: "/post"},
                    {icon: "kiconfenlei", title: "我的7", href: "/post"}
                ]
            }
        },
        methods: {
            cellClick(item){
                console.log(item)
            }
        },
    }
</script>
```
