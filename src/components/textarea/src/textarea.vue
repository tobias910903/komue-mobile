<template>
    <div class="kom-textarea" :class="readonly ? 'kom-textarea-readonly' : ''">
        <textarea v-model="mlstr"
                  :placeholder="placeholder"
                  :maxlength="maxlength"
                  :readonly="readonly"
        ></textarea>
        <div class="kom-textarea-counter" v-if="showCounter && maxlength">{{num}}/{{maxlength}}</div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-textarea',
        data() {
            return {
                num: 0,
                mlstr: ''
            }
        },
        props: {
            maxlength: {
                validator(val) {
                    if (!val) return true;
                    return /^(([1-9]\d*)|0)$/.test(val);
                }
            },
            placeholder: {
                type: String
            },
            readonly: {
                type: Boolean,
                default: false
            },
            value: {
                type: String
            },
            showCounter: {
                type: Boolean,
                default: true
            },
            change: {
                type: Function
            },
            callback: {
                type: Function
            }
        },
        watch: {
            mlstr(val) {
                this.$emit('input', val);
                this.callback && this.change();
                if (this.showCounter) this.num = val.length;
            },
            value(val) {
                this.mlstr = val;
            }
        },
        mounted() {
            this.$nextTick(() => {
                const v = this.value;
                if (!v) return;
                this.mlstr = v.length > this.maxlength ? v.substr(v, this.maxlength) : v;
            });
        }
    }
</script>

<style lang="less">
    @import '../../../assets/styles/components/textarea.less';
</style>
