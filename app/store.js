import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from "./modules/actions";
import * as mutations from "./modules/mutations";
import gamesCategoryStore from './modules/games-category'
import gameSelectedStore from './modules/game-selected'
import searchStore from './modules/search'
import spotlightStore from './modules/spotlight'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLoading: false,
		selected_category: "",
		selected_game_url: "",
		spotlights: [],
		categories: [],
		gamesPerCategory: [],
		searchGames: []
	},
	actions,
	mutations
	// modules: {
	// 	gamesCategoryStore,
	// 	gameSelectedStore,
	// 	searchStore,
	// 	spotlightStore
	// }
});
