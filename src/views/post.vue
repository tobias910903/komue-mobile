<template>
	<div class="kom-transition-box">
		<button @click="goAction(3)">查看详情</button>
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

<style scoped>
	
</style>
