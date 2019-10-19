<template>
    <div class="kom-slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <div class="slider-item" v-for="(item, index) in list" :key="index" @click="itemClick(item)">
                <img :src="item.picUrl" :alt="item.linkUrl" :style="`width: ${width}`" ref="sliderItemImg">
            </div>
        </div>
        <div class="dots" v-if="this.dots">
            <span :class="`dot ${index === currentPageIndex ? 'active' :'' }`" v-for="(item,index) in list.length" :key="index"></span>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    
    export default {
        props: {
            // 图片宽度
            width: {
                type: String,
                default: "100%"
            },
            // 数据列表 对象数组，格式 [{linkUrl:'url',picUrl:'url'}]
            list: {
                type: Array,
                default: []
            },
            // 循环轮播
            loop: {
                type: Boolean,
                default: true
            },
            // 是否自动轮播
            autoPlay: {
                type: Boolean,
                default: true
            },
            // 轮播间隔
            speed: {
                type: Number,
                default: 3000
            },
            // 是否需要 dots
            dots: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                currentPageIndex: 0,
                _slider: null,
                _timer: null
            };
        },
        mounted() {
            const _this = this;
            _this.tmpTimer = setTimeout(() => {
                _this._initSliderWidth();
                _this._initSlider();
                if (_this.autoPlay) {
                    _this._play();
                }
            }, 20);
        },
        beforeDestroy() {
            clearInterval(this._timer);
            clearTimeout(this.tmpTimer);
        },
        methods: {
            _initSliderWidth() { // 初始化slider容器Width
                const imgWidth = this.$refs.sliderItemImg[0].clientWidth;
                let sliderWidth = imgWidth * this.list.length;
                if (this.loop) {
                    sliderWidth += imgWidth * 2; // 循环轮播需要添加两个img DOM 的宽度
                }
                this.$refs.sliderGroup.style.width = sliderWidth + "px";
                this.$refs.sliderItemImg.forEach(item => {
                    item.style.width = imgWidth + "px";
                });
            },
            _initSlider() { // 初始化 better-scroll
                const _this = this;
                _this._slider = new BScroll(_this.$refs.slider, {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: {
                        loop: this.loop,
                        threshold: 0.1
                    }
                });
                _this._getCurrentPageIndex();
                _this._slider.on("beforeScrollStart", () => {
                    clearInterval(_this._timer);
                });
            },
            _getCurrentPageIndex() { // 获取当前的 pageIndex
                const _this = this;
                _this._slider.on("scrollEnd", () => {
                    _this.currentPageIndex = _this._slider.getCurrentPage().pageX;
                    if (_this.autoPlay) { // 如果自动播放 则开启
                        _this._play();
                    }
                });
            },
            _play() { // 自动轮播
                const _this = this;
                let pageIndex = _this.currentPageIndex;
                _this._timer = setInterval(() => {
                    pageIndex++;
                    if (pageIndex >= _this.list.length) {
                        pageIndex = 0;
                    }
                    _this.currentPageIndex = pageIndex;
                    _this._slider.goToPage(pageIndex);
                }, this.speed);
            },
            itemClick(item){ // 触发父组件回调
                this.$emit("handleClick", item);
            }
        }
    };
</script>
<style lang="less" scoped>
    .kom-slider {
        position: relative;
        min-height: 1px;
        
        .slider-group {
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            
            .slider-item {
                float: left;
                overflow: hidden;
                text-align: center;
                
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
        
        .dots {
            position: absolute;
            right: 0;
            left: 0;
            bottom: 12px;
            text-align: center;
            font-size: 0;
            
            .dot {
                display: inline-block;
                margin: 0 4px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #ffffff;
                
                &.active {
                    width: 8px;
                    border-radius: 50%;
                    background: #007aff;
                }
            }
        }
    }
</style>
