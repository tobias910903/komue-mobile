```
<template>
	<div>
        <kom-list>
            <kom-item title="123" navigate @click="itemClick">
                <svg class="xicon" aria-hidden="true">
                    <use xlink:href="#xicon-biaoqian"></use>
                </svg>
            </kom-item>
            <kom-item title="456" @click="itemClick"></kom-item>
        </kom-list>
    </div>
</template>

<script>
export default {
    methods:{
        itemClick(){
            console.log('itemClick');
        }
    }
}
</script>
```
