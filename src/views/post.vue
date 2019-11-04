<template>
	<div class="kom-transition-box">
		<button @click="goAction(3)">查看详情</button>
		<i class="iconfont icon-search"></i>
	</div>
</template>

<script>
export default {
	data(){
		return {
		
		}
	},
	methods: {
		goAction: function(id){
			// 路由跳转传参数
			this.$router.push({
			  name: 'postDetail',
			  params: {
				id: id
			  }
			});

			this.$store.commit("setTransition", "turn-on");
		}
	},
	mounted(){

	}
}
</script>

<!-- 引入的外部CSS只在当前域有效 -->
<style scoped src="../assets/iconfonts/iconfont.css"></style>
<style scoped>
	
</style>
