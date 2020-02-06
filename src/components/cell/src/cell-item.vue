<template>
    <label class="kom-cell-item" v-if="type == 'label' || type == 'checkbox' || type == 'radio'">
        <span class="kom-cell-left" v-if="checkLeft">
            <span class="kom-cell-icon" v-if="$slots.icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </span>
        <label class="kom-cell-right" :class="classes">
            <slot name="right"></slot>
            <i v-if="type == 'checkbox'" class="kom-cell-checkbox-icon"></i>
            <i v-if="type == 'radio'" class="kom-cell-radio-icon"></i>
        </label>
    </label>
    <router-link class="kom-cell-item" :to="href" v-else-if="type == 'link'">
        <div class="kom-cell-left" v-if="checkLeft">
            <span class="kom-cell-icon" v-if="$slots.icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </div>
        <div class="kom-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </router-link>
    <a class="kom-cell-item" :href="href" v-else-if="type == 'a'">
        <div class="kom-cell-left" v-if="checkLeft">
            <span class="kom-cell-icon" v-if="$slots.icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </div>
        <div class="kom-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </a>
    <div class="kom-cell-item" v-else>
        <div class="kom-cell-left" v-if="checkLeft">
            <span class="kom-cell-icon" v-if="$slots.icon"><slot name="icon"></slot></span>
            <slot name="left"></slot>
        </div>
        <div class="kom-cell-right" :class="classes">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-cell-item',
        props: {
            type: {
                validator (value) {
                    return ['link', 'a', 'label', 'div', 'checkbox', 'radio'].indexOf(value) > -1;
                },
                default: 'div'
            },
            arrow: {
                type: Boolean,
                default: false
            },
            href: {
                type: [String, Object]
            }
        },
        computed: {
            checkLeft() {
                return !!this.$slots.left || !!this.$slots.icon;
            },
            classes() {
                return this.arrow ? 'kom-cell-arrow' : '';
            }
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/cell.less';
</style>
