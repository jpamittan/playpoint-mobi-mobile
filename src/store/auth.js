import { fetchData } from "./fetch";
import { postData } from "./fetch";

const initialState = () => ({
    isLoading: false,
    isLogged: false,
    token: "",
})

const state = initialState()

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, initialState())
    },
    SET_IS_LOADING (state) {
        state.isLoading = true;
    },
    SET_USER (state, res) {
        if(res.state == 200) {
            state.token = res.token;
            state.isLogged = true;
        }
        state.isLoading = false;
    }
}

const actions = {
    LOG_USER ({ commit, dispatch }, req) {
      commit('SET_IS_LOADING');
      return new Promise((resolve, reject) => {
        postData("account/login", req)
          .then(response => {
            commit('SET_USER', response);
            resolve(response);
          }, error => {
            reject(error);
          });
      });
    },
    LOGOUT ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('RESET_STATE');
        resolve();
      });
    }
}

const getters = {
    isLoading: state => state.isLoading,
    isLogged: state => state.isLogged,
    token: state => state.token
}

export default { namespaced: true, state, mutations, actions, getters }