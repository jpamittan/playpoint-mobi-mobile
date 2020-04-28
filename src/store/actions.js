import { fetchData } from "./fetch";
import { postData } from "./fetch";

export function SPOTLIGHTS ({ commit, dispatch }) {
  return fetchData("games/new")
    .then(spotlights => {
      return commit('SET_SPOTLIGHTS', { spotlights });
    });
}

export function CATEGORIES ({ commit, dispatch }) {
  return fetchData("games/tags")
    .then(categories => {
      return commit('SET_CATEGORIES', { categories });
    });
}

export function SELECTED_CATEGORIES ({ commit, dispatch }, category) {
  return commit('SET_SELECTED_CATEGORY', category);
}

export function GAMES_CATEGORY ({ commit, dispatch }, category) {
  commit('SET_IS_LOADING');
  return fetchData(`games/category/${category}`)
    .then(games => {
      return commit('SET_GAMES_PER_CATEGORY', { games });
    });
}

export function SEARCH_GAMES ({ commit, dispatch }, search) {
  commit('SET_IS_LOADING');
  return fetchData(`games/search/${search}`)
    .then(games => {
      return commit('SET_SEARCH_GAMES', { games });
    });
}

export function LOG_USER ({ commit, dispatch }, req) {
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
}

export function LOGOUT ({ commit, dispatch }) {
  return new Promise((resolve, reject) => {
    commit('LOGOUT_USER');
    resolve();
  })
}

export function SELECTED_GAME ({ commit, dispatch }, gameUrl) {
  return commit('SET_SELECTED_GAME_URL', gameUrl);
}