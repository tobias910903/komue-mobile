```
<template>
    <div>
        <kom-tab :list="tablist1" :activeTab="activeTab" @click="tabClick"></kom-tab>
        <br/><br/>
        <kom-tab :list="tablist2" :activeTab="activeTab" @click="tabClick"></kom-tab>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: "route1",
                tablist1: [
                    {icon: "kiconfont kiconfenlei", title: "菜单1", name: "route1"},
                    {icon: "kiconfont kiconfenlei", title: "菜单2", name: "route2"},
                    {icon: "kiconfont kiconfenlei", title: "菜单3", name: "route3"}
                ],
                tablist2: [
                    {icon: "kiconfont kiconfenlei", title: "菜单1", name: "route1"},
                    {icon: "kiconfont kiconfenlei", title: "菜单2", name: "route2"},
                    {icon: "kiconfont kiconfenlei", title: "菜单3", name: "route3"},
                    {icon: "kiconfont kiconfenlei", title: "菜单4", name: "route4"}
                ]
            }
        },
        methods: {
            tabClick(item) {
                this.activeTab = item.name;
                console.log(item)
            }
        }
    }
</script>
```
