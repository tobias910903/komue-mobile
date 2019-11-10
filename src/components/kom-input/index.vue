<template>
    <div class="kom-form" :class="label != null ? 'has-label' : ''">
        <div class="kom-label" v-if="label != null">{{label}}</div>
        <textarea v-if="type == 'textarea'"></textarea>
        <input v-else :type="type" :value="currentValue" @input="inputload" :placeholder="placeholder" />
    </div>
</template>

<script>
    export default {
        name: 'KomInput',
        data() {
            return {
                currentValue: this.value,
            };
        },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder:{
                type: String,
                default: ''
            },
            label:{
                type: String
            }
        },
        watch: {
            value(val) {
                this.setCurrentValue(val);
            }
        },
        methods: {
            setCurrentValue(value) {
                if (value === this.currentValue) {
                    return
                }
                
                this.currentValue = value;
            },
            inputload(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style lang="less" scoped>
    .kom-form{
        position: relative;
        &.has-label{
            margin-top: 10px;
            .kom-label{
                position: absolute;
                top: -12px;
                left: 10px;
                padding: 1px 10px;
                background-color: #ffffff;
                color: #666666;
                border: 1px solid rgba(0, 0, 0, 0.2);
                font-size: 12px;
                -webkit-border-radius: 2px;
                border-radius: 2px;
            }
        }
    }
    
    input:focus,
    textarea:focus {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-modify: read-write-plaintext-only;
    }

    input,
    textarea{
        width: 100%;
        outline: none;
        font-family: inherit;
        border: 1px solid rgba(0, 0, 0, .2);
        background-color: #ffffff;
        -webkit-user-select: text;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -webkit-tap-highlight-color: transparent;
    }
    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }

    input{
        padding: 0 12px;
        line-height: 38px;
        height: 38px;
    }

    textarea {
        padding: 6px 12px;
        height: 80px;
        line-height: 1.8;
        resize: none;
    }
</style>
