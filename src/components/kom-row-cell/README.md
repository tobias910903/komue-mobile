```
<template>
    <div>
        <kom-row-cell :list="rowlist" rowNum="3" v-on:cellClick="cellClick"></kom-row-cell>
    </div>
</template>

<script>
    import KomRowCell from '@/components/kom-row-cell'

    export default {
        data() {
            return {
                rowlist: [
                    {icon: "kiconfont kiconfenlei", title: "我的1", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "我的2", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "我的3", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "我的4", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "我的5", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "我的6", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "我的7", href: "/post"}
                ]
            }
        },
        components: {
            KomRowCell
        },
        methods: {
            cellClick(item){
                console.log(item)
            }
        },
    }
</script>
```

> 宫格布局
