<template>
    <label role="checkbox" :class="['kom-switch', { toggled }]">
        <input type="checkbox" class="switch-input" @change="toggle"/>
        <div class="switch-core" :style="{backgroundColor: toggled ? colorChecked  : colorUnchecked}">
            <div class="switch-button"
                 :style="{transition: `transform ${speed}ms`, transform: toggled ? null: `translate3d(32px, 0, 0)`}"></div>
        </div>
        <span class="switch-label label-right" v-if="toggled" v-html="labelChecked"></span>
        <span class="switch-label label-left" v-else v-html="labelUnchecked"></span>
    </label>
</template>

<script>
    export default {
        name: 'KomToggleSwitch',
        data() {
            return {
                toggled: this.value,
                colorChecked: '#25b9e9',
                colorUnchecked: '#db572e',
                labelChecked: '开',
                labelUnchecked: '关'
            }
        },
        props: {
            value: {
                type: Boolean,
                default: true
            },
            speed: {
                type: Number,
                default: 100
            }
        },
        methods: {
            toggle() {
                this.toggled = !this.toggled;
                this.$emit('change', this.toggled);
            }
        }
    }
</script>

<style lang="less" scoped>
    .kom-switch {
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        user-select: none;
        font-size: 10px;
        cursor: pointer;
        border-radius: 4px;
        
        .switch-input {
            display: none;
        }
        
        .switch-label {
            position: absolute;
            top: 0;
            font-weight: 600;
            color: #ffffff;
            z-index: 2;
            
            &.label-left {
                left: 10px;
                line-height: 24px;
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
            }
            
            &.label-right {
                right: 10px;
                line-height: 24px;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
            }
        }
        
        .switch-core {
            display: block;
            position: relative;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            transition: border-color .3s, background-color .3s;
            user-select: none;
            width: 64px;
            height: 24px;
            line-height: 24px;
            border-radius: 8px;
            
            .switch-button {
                width: 32px;
                height: 24px;
                display: block;
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 0;
                z-index: 3;
                transform: translate3d(0, 0, 0);
                background-color: #ecf0f5;
            }
        }
    }
</style>
