import { fetchData } from "./fetch";

const initialState = () => ({
    selected_game_url: ""
})

const state = initialState()

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, initialState())
    },
    SET_SELECTED_GAME_URL (state, gameUrl) {
        state.selected_game_url = gameUrl;
    }
}

const actions = {
    SELECTED_GAME ({ commit, dispatch }, gameUrl) {
        return commit('SET_SELECTED_GAME_URL', gameUrl);
    }
}

const getters = {
    selected_game_url: state => state.selected_game_url
}

export default { namespaced: true, state, mutations, actions, getters }