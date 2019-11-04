```
<template>
    <div>
        <kom-tab :list="tablist1" @click="cellClick"></kom-tab>
        <br/><br/>
        <kom-tab :list="tablist2" @click="cellClick"></kom-tab>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tablist1: [
                    {icon: "kiconfont kiconfenlei", title: "菜单1", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "菜单2", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "菜单3", href: "/post"}
                ],
                tablist2: [
                    {icon: "kiconfont kiconfenlei", title: "菜单1", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "菜单2", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "菜单3", href: "/post"},
                    {icon: "kiconfont kiconfenlei", title: "菜单4", href: "/post"}
                ]
            }
        },
        methods: {
            cellClick(item) {
                console.log(item)
            }
        },
    }
</script>
```
