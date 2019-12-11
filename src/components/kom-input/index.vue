<template>
    <div class="kom-form">
        <div class="kom-label" v-if="label != null">{{label}}</div>
        <textarea v-if="type == 'textarea'" :value="currentValue" @input="inputload"></textarea>
        <input v-else :type="type" :value="currentValue" @input="inputload" :placeholder="placeholder" :readonly="readonly" />
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
            readonly: {
                type: String,
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
        margin-bottom: 10px;
        .kom-label{
            color: #787878;
            padding: 4px 12px;
            font-size: 12px;
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
            font-size: 13px;
            border-top: 1px solid rgba(0, 0, 0, .05);
            border-bottom: 1px solid rgba(0, 0, 0, .05);
            border-right: none;
            border-left: none;
            background-color: #ffffff;
            -webkit-user-select: text;
            -webkit-appearance: none;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            margin: 0;
            -webkit-appearance: none;
        }

        input{
            padding: 0 12px;
            line-height: 40px;
            height: 40px;
            &:read-only{
                cursor: not-allowed;
                background-color: #f5f5f5;
            }
        }

        textarea {
            padding: 6px 12px;
            min-height: 120px;
            height: auto;
            line-height: 1.6;
            resize: none;
        }
    }
</style>
