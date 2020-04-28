import Vue from "vue-native-core";
import Vuex from "vuex";
import authStore from './auth'
import gamesCategoryStore from './games-category'
import gameSelectedStore from './game-selected'
import searchStore from './search'
import spotlightStore from './spotlight'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		authStore,
		gamesCategoryStore,
		gameSelectedStore,
        searchStore,
        spotlightStore
    }
});

export default store;