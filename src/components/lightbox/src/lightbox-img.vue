<template>
    <img :src="src" :original="original">
</template>

<script type="text/babel">
    export default {
        name: 'kom-lightbox-img',
        props: {
            src: String,
            original: String
        }
    }
</script>
