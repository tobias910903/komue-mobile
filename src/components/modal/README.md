```
<template>
  <div>
    <kom-modal v-show="showModal" :modal-option="modalOption" ref="modal">
      <h5>带有HTML的内容</h5>
    </kom-modal>
  </div>
</template>

<script>
import KomModal from '@/components/modal'

export default {
  data() {
    return {
      showModal:false,
      modalOption:{
        // isHtml: true, // true-获取solt的内容， false-获取text
        text: "内容"
      },
    }
  },
  components: {
    KomModal
  },
  methods: {

  },
  mounted(){
    this.showModal = true;
    this.$refs.modal.confirm().then(() => {
      this.showModal = false;
      console.log("then next");
    }).catch(() => {
        this.showModal = false;
      console.log("catch next");
    });
  }
}
</script>
```

> Modal 模态框
