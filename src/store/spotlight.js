import { fetchData } from "./fetch";

const initialState = () => ({
    isLoading: false,
    spotlights: []
})

const state = initialState()

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, initialState())
    },
    SET_IS_LOADING (state) {
        state.isLoading = true;
    },
    SET_SPOTLIGHTS (state, spotlights) {
        state.spotlights = spotlights;
        state.isLoading = false;
    }
}

const actions = {
    SPOTLIGHTS ({ commit, dispatch }) {
        commit('SET_IS_LOADING');
        return fetchData("games/new")
            .then(spotlights => {
            return commit('SET_SPOTLIGHTS', spotlights);
            }
        );
    }
}

const getters = {
    isLoading: state => state.isLoading,
    spotlights: state => state.spotlights
}

export default { namespaced: true, state, mutations, actions, getters }