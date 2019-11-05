```
<template>
	<div>
        <kom-list>
            <kom-item navigate @click="itemClick">111</kom-item>
            <kom-item @click="itemClick">222</kom-item>
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
