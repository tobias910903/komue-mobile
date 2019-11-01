```
<template>
    <div>
        <kom-slider :list="sliderList" :loop="true" v-if="sliderList.length" @click="sliderClick"></kom-slider>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sliderList: [
                    {
                        linkUrl: '/post',
                        picUrl: 'https://www.lihuyong.com/wp-content/uploads/2019/10/demo.jpg'
                    },
                    {
                        linkUrl: '/post',
                        picUrl: 'https://www.lihuyong.com/wp-content/uploads/2019/10/demo.jpg'
                    },
                    {
                        linkUrl: '/post',
                        picUrl: 'https://www.lihuyong.com/wp-content/uploads/2019/10/demo.jpg'
                    },
                ]
            }
        },
        methods: {
            sliderClick(data) {
                console.log(data)
            }
        },
        mounted() {
            window.addEventListener("resize", () => {
                // 调整网页窗口大小
                location.reload();
            })
        }
    }
</script>
```
