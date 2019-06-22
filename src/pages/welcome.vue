<template>
	<div>{{welcomeMsg}}</div>
</template>

<script>
export default {
	data(){
		return {
			welcomeMsg: "欢迎页，判断页面是否登录，或者其他情况来进行页面跳转"
		}
	},
	mounted(){
		// 测试专用页
		this.$router.push({name: 'test'});
	}
}
</script>

<style scoped>

</style>
