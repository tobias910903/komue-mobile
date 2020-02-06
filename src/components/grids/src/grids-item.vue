<template>
    <router-link class="kom-grids-item" :to="link || ''" :style="styles" :class="$parent.itemHeight != 0 ? 'kom-grids-item-center' : ''" v-if="type == 'link'">
        <div class="kom-grids-icon" v-if="checkIcon">
            <slot name="icon"></slot>
        </div>
        <div class="kom-grids-txt" v-if="checkText">
            <slot name="text"></slot>
        </div>
        <slot name="else"></slot>
    </router-link>
    <a class="kom-grids-item" :href="link || ''" :style="styles" :class="$parent.itemHeight != 0 ? 'kom-grids-item-center' : ''" v-else>
        <div class="kom-grids-icon" v-if="checkIcon">
            <slot name="icon"></slot>
        </div>
        <div class="kom-grids-txt" v-if="checkText">
            <slot name="text"></slot>
        </div>
        <slot name="else"></slot>
    </a>
</template>

<script type="text/babel">
    export default {
        name: "kom-grids-item",
        props: {
            type: {
                validator(value) {
                    return ["link", "a"].indexOf(value) > -1;
                },
                default: "link"
            },
            link: [String, Object]
        },
        computed: {
            checkIcon() {
                return !!this.$slots.icon;
            },
            checkText() {
                return !!this.$slots.text;
            },
            styles() {
                if (this.$parent.itemHeight != 0) {
                    return {
                        height: this.$parent.itemHeight,
                        padding: 0
                    };
                }
            }
        }
    };
</script>

<style lang="less">
    @import "../../../assets/styles/components/grids.less";
</style>
