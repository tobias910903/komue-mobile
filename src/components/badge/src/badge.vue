<template>
    <span class="kom-badge" :class="typesClass"
          :style="{backgroundColor: bgcolor, color: color, transform: 'scale('+scale+')'}">
        <slot></slot>
    </span>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'kom-badge',
        props: {
            type: {
                validator(value) {
                    return ['primary', 'danger', 'warning', 'hollow'].indexOf(value) > -1;
                }
            },
            shape: {
                validator(value) {
                    return ['circle', 'square'].indexOf(value) > -1;
                }
            },
            color: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                }
            },
            bgcolor: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                }
            },
            scale: {
                validator(val) {
                    return /^(\d*(.\d+)?)$/.test(val);
                },
                default: 1
            }
        },
        computed: {
            typesClass() {
                if (this.bgcolor) {
                    if (this.shape === 'square') {
                        return ' kom-badge-radius';
                    }
                    return '';
                }
                return (this.type ? 'kom-badge-' + this.type : '') + (this.shape === 'square' ? ' kom-badge-radius' : '');
            }
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/badge.less';
</style>
