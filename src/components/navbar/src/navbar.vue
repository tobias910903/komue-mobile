<template>
    <header class="kom-navbar" :class="classes" :style="{backgroundColor: bgcolor, height: height, color: borderColor}">
        <div class="kom-navbar-item">
            <slot name="left"></slot>
        </div>
        <div class="kom-navbar-center-box" :style="{height: height}">
            <div class="kom-navbar-center">
                <slot name="center"><span class="kom-navbar-center-title" :style="{color: color, fontSize: fontsize}">{{title}}</span></slot>
            </div>
        </div>
        <div class="kom-navbar-item">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'kom-navbar',
        props: {
            title: String,
            fixed: Boolean,
            bgcolor: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                },
                default: '#FFF'
            },
            color: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                },
                default: '#5C5C5C'
            },
            borderColor: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                },
                default: '#E4E4E4'
            },
            fontsize: {
                validator(value) {
                    return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
                },
                default: '.3rem'
            },
            height: {
                validator(value) {
                    return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
                },
                default: '1rem'
            }
        },
        computed: {
            classes() {
                return this.fixed ? 'kom-navbar-fixed' : '';
            }
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/navbar.less';
</style>
