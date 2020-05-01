import { fetchData } from "./fetch";

const initialState = () => ({
    isLoading: false,
    selected_category: "",
    categories: [],
    gamesPerCategory: []
})

const state = initialState()

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, initialState())
    },
    SET_IS_LOADING (state) {
        state.isLoading = true;
    },
    SET_CATEGORIES (state, categories) {
        state.categories = categories;
    },
    SET_SELECTED_CATEGORY (state, category) {
        state.selected_category = category;
    },
    SET_GAMES_PER_CATEGORY (state, games) {
        state.gamesPerCategory = games;
        state.isLoading = false;
    }
}

const actions = {
    CATEGORIES ({ commit, dispatch }) {
        return fetchData("games/tags")
            .then(categories => {
                return commit('SET_CATEGORIES', categories);
            }
        );
    },
    SELECTED_CATEGORIES ({ commit, dispatch }, category) {
        return commit('SET_SELECTED_CATEGORY', category);
    },
    GAMES_CATEGORY ({ commit, dispatch }, category) {
        commit('SET_IS_LOADING');
        return fetchData(`games/category/${category}`)
            .then(games => {
                return commit('SET_GAMES_PER_CATEGORY', games);
            }
        );
    }
}

const getters = {
    isLoading: state => state.isLoading,
    selected_category: state => state.selected_category,
    categories: state => state.categories,
    gamesPerCategory: state => state.gamesPerCategory
}

export default { namespaced: true, state, mutations, actions, getters }