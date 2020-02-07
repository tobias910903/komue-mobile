<template>
    <div class="kom-edit-div"
         v-html="innerText"
         :contenteditable="canEdit"
         @focus="isLocked = true"
         @blur="isLocked = false"
         @input="changeText">
    </div>
</template>

<script>
    export default {
        name: 'KomEditDiv',
        props: {
            value: {
                type: String,
                default: ''
            },
            canEdit: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                innerText: this.value,
                isLocked: false
            }
        },
        watch: {
            'value'() {
                if (!this.isLocked && !this.innerText) {
                    this.innerText = this.value;
                }
            }
        },
        methods: {
            changeText() {
                this.$emit('input', this.$el.innerHTML);
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/styles/components/diveditable.less";
</style>
