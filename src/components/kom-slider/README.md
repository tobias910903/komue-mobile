```
<template>
    <div>
        <kom-slider :list="sliderList" :loop="true" v-if="sliderList.length" v-on:handleClick="sliderClick"></kom-slider>
    </div>
</template>

<script>
    import KomSlider from '@/components/kom-slider';
    
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
        components: {
            KomSlider
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

> 基于better-scroll的轮播图
