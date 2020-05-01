import { fetchData } from "./fetch";

const initialState = () => ({
    isLoading: false,
    searchGames: []
})

const state = initialState()

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, initialState())
    },
    SET_IS_LOADING (state) {
        state.isLoading = true;
    },
    SET_SEARCH_GAMES (state, games) {
        state.searchGames = games;
        state.isLoading = false;
    }
}

const actions = {
    SEARCH_GAMES ({ commit, dispatch }, search) {
        commit('SET_IS_LOADING');
        return fetchData(`games/search/${search}`)
            .then(games => {
                return commit('SET_SEARCH_GAMES', games);
            }
        );
    }
}

const getters = {
    isLoading: state => state.isLoading,
    searchGames: state => state.searchGames
}

export default { namespaced: true, state, mutations, actions, getters }