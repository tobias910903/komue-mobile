<template>
    <button :disabled="disabled || loading" :class="classes" :style="{backgroundColor: bgcolor, color: color}" :type="actionType">
        <span class="kom-btn-loading" v-if="loading">
            <span class="kom-btn-rolling" :class="rollingClasses" :style="{marginRight: loadingTxt ? '8px' : '0'}"><i></i></span>
            <template v-if="size === 'large'">{{loadingTxt}}</template>
        </span>
        <span :style="{visibility: loading ? 'hidden' : ''}"><slot></slot></span>
    </button>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'kom-button',
        props: {
            disabled: Boolean,
            actionType: {
                validator(value) {
                    return ['button', 'submit', 'reset'].indexOf(value) > -1;
                },
                default: 'button'
            },
            type: {
                validator(value) {
                    return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
                },
                default: 'primary'
            },
            size: {
                validator(value) {
                    return ['mini', 'small', 'large'].indexOf(value) > -1;
                }
            },
            bgcolor: {
                validator(value) {
                    if (!value) return true;
                    return isColor(value);
                }
            },
            color: {
                validator(value) {
                    if (!value) return true;
                    return isColor(value);
                }
            },
            shape: {
                validator(value) {
                    return ['square', 'circle', 'angle'].indexOf(value) > -1;
                },
                default: 'square'
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingColor: {
                validator(value) {
                    if (!value) return true;
                    return isColor(value);
                },
                default: '#FFF'
            },
            loadingTxt: String
        },
        computed: {
            rollingClasses() {
                let a = '';
                if (this.size === 'mini') {
                    a = 'kom-btn-rolling-mini';
                } else if (!this.size || this.size === 'small') {
                    a = 'kom-btn-rolling-small';
                } else {
                    a = 'kom-btn-rolling-large';
                }

                return a
            },
            classes() {
                let s = '';
                if(this.size === 'mini') {
                    s = 'kom-btn-mini'
                } else {
                    s = this.size === 'large' ? 'kom-btn-block' : 'kom-btn';
                }

                let t = ' kom-btn-' + this.type;

                if (this.bgcolor) {
                    t = '';
                }

                if (this.disabled) {
                    t = ' kom-btn-disabled';
                }

                let r = '';
                if (this.shape === 'angle') {
                    r = ' kom-btn-angle';
                } else {
                    r = this.shape === 'circle' ? ' kom-btn-circle' : ''
                }

                return s + t + r;
            }
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/button.less';
</style>
