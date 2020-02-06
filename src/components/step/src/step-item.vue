<template>
    <li class="kom-step-item" :class="currentClass">
        <template v-if="theme == 1">
            <em :class="stepNumber < current ? 'kom-step-checkmark' : ''"><i>{{stepNumber >= current ? stepNumber : ''}}</i></em>
        </template>
        <template v-else>
            <em></em>
        </template>
        <div class="kom-step-item-top">
            <div class="kom-step-item-top-text"><span><slot name="top"></slot></span></div>
        </div>
        <div class="kom-step-item-bottom">
            <slot name="bottom"></slot>
        </div>
    </li>
</template>

<script type="text/babel">
    export default {
        name: 'kom-step-item',
        data() {
            return {
                stepNumber: '',
                current: '',
                theme: '',
                currentClass: ''
            }
        },
        methods: {
            setCurrentClass() {
                if (this.theme == 2) {
                    this.currentClass = this.stepNumber == this.current ? 'kom-step-item-current' : '';
                    return;
                }
                this.currentClass = this.stepNumber <= this.current ? 'kom-step-item-current' : '';
            }
        },
        mounted() {
            this.$nextTick(this.$parent.updateChildStatus);
        }
    }
</script>
