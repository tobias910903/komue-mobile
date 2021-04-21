<template>
	<div class="kom-transition-box">
		<p>详情页</p>
		<button @click="backAction">返回</button>
		<p>传过来的参数：{{this.$route.params}}</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
		
		}
	},
	methods: {
		backAction() {
		  this.$router.go(-1);
		}
	},
	mounted: function(){
		// 获取路由传过来的参数
		console.log(this.$route.params);
	}
}
</script>

<style scoped>

</style>
