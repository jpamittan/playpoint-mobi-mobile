import Vue from "vue-native-core";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
	actions,
	mutations,
	state: {
		isLoading: false,
		isLogged: false,
		token: "",
		selected_category: "",
		selected_game_url: "",
		spotlights: [],
		categories: [],
		gamesPerCategory: [],
		searchGames: []
	}
});

export default store;