<template>
    <router-link v-if="type === 'link'" :to="link" class="kom-tabbar-item" :class="classes"
            :style="styles" :exact="$parent.exact" :active-class="$parent.activeClass" :tag="tag">
        <span class="kom-tabbar-icon">
            <slot name="icon"></slot>
            <span class="kom-tabbar-badge">
                <slot name="badge"></slot>
            </span>
            <span class="kom-tabbar-dot" v-if="dot"></span>
        </span>
        <span class="kom-tabbar-txt" v-if="!!title">{{title}}</span>
    </router-link>
    <a :href="link" class="kom-tabbar-item" :class="classes" :style="styles" v-else>
        <span class="kom-tabbar-icon">
            <slot name="icon"></slot>
            <span class="kom-tabbar-badge">
                <slot name="badge"></slot>
            </span>
            <span class="kom-tabbar-dot" v-if="dot"></span>
        </span>
        <span class="kom-tabbar-txt" v-if="!!title">{{title}}</span>
    </a>
</template>

<script type="text/babel">
    export default {
        name: 'kom-tabbar-item',
        data() {
            return {
                isCurrent: false
            }
        },
        props: {
            type: {
                validator (value) {
                    return ['link', 'a'].indexOf(value) > -1;
                },
                default: 'link'
            },
            tag: String,
            link: {
                type: [String, Object],
                default: ''
            },
            title: String,
            active: Boolean,
            dot: Boolean
        },
        computed: {
            classes() {
                return this.active || this.isCurrent ? 'kom-tabbar-active' : '';
            },
            styles() {
                return {
                    color: !this.active && !this.isCurrent ? this.$parent.color : this.$parent.activeColor
                }
            }
        }
    }
</script>
