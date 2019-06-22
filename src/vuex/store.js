import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		anistates: 'turn-on' // animate动画的开关状态
	},
	getters:{

	},
	mutations: {
		setTransition(state, anistates) {
			state.anistates = anistates
		}
	} 
})