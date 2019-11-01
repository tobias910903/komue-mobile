```
<template>
    <div>
        <kom-modal v-show="modalOption.showModal" :modal-option="modalOption" ref="modal"></kom-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalOption:{
                    showModal: false,
                    text: "内容"
                }
            }
        },
        mounted(){
            this.modalOption.showModal = true;
            this.$refs.modal.confirm().then(() => {
                this.modalOption.showModal = false;
                console.log("then next");
            }).catch(() => {
                this.modalOption.showModal = false;
                console.log("catch next");
            });
        }
    }
</script>
```
