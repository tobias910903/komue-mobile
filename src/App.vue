<template>
	<div id="app">
		<transition :name="$store.state.anistates">
			<router-view/>
		</transition>
	</div>
</template>

<script>
export default {
	name: "app",
  	data(){
		return {

		}
	},
	computed:{

	},
	methods: {

	},
	watch:{
		$route(to, from){ // 监听路由
			console.log("当前路由", to.name + ", 上一级路由", from.name);
		}
	},
	mounted(){
		// 监听history
		var _this = this;
    	window.addEventListener("popstate", function(e) {
			_this.$store.commit("setTransition", "turn-off");
		}, false);

		// 入口页...

	}
}
</script>
