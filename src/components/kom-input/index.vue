<template>
    <div>
        <input :value="currentValue" @input="inputload"/>
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
    input,
    textarea,
    select {
        -webkit-tap-highlight-color: transparent;
    }
    
    input:focus,
    select:focus,
    textarea:focus {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-modify: read-write-plaintext-only;
    }
    
    input,
    select,
    textarea,
    input[type='text'],
    input[type='search'],
    input[type='password'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='date'],
    input[type='month'],
    input[type='time'],
    input[type='week'],
    input[type='number'],
    input[type='email'],
    input[type='url'],
    input[type='tel'],
    input[type='color'] {
        padding: 0 12px;
        width: 100%;
        line-height: 38px;
        height: 38px;
        outline: none;
        border: 1px solid rgba(0, 0, 0, .2);
        background-color: #ffffff;
        -webkit-user-select: text;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: 2px;
        border-radius: 2px;
    }
    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }
    
    textarea {
        height: auto;
        resize: none;
    }
    
    select {
        font-size: 14px;
        height: auto;
        margin-top: 1px;
        border: 0 !important;
        background-color: #ffffff;
        
        &:focus {
            -webkit-user-modify: read-only;
        }
    }
</style>
