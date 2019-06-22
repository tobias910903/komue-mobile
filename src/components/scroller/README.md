```
<template>
    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
        <div v-for="(item, index) in items">
            {{ item }}
        </div>
    </scroller>
</template>
 
<script>
import Scroller from '@/components/scroller'

export default {
    data(){
      return {
        items: []
      }
    },
    components: {
        Scroller
    },
    mounted: function () {
      for (var i = 1; i <= 10; i++) {
        this.items.push(i + ' - 777');
      }


      setTimeout(() => {
        this.$refs.my_scroller.resize();
      })
    },

    methods: {
      refresh: function () {
        setTimeout(() => {
          this.items = [];
          for (var i = 1; i <= 5; i++) {
            this.items.push(i + ' - 555');
          }
          
          this.$refs.my_scroller.finishPullToRefresh();
        }, 1000)
      },

      infinite: function () {
        setTimeout(() => {
          for (var i = 1; i <= 5; i++) {
            this.items.push(i + ' - 666');
          }

          setTimeout(() => {
            this.$refs.my_scroller.finishInfinite();
          })
        }, 1000)
      }
    }
}

</script>
```

> 参考：https://github.com/wangdahoo/vue-scroller