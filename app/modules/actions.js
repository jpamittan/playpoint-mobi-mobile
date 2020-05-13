import { fetchData } from "./fetch";
import { postData } from "./fetch";

export function SPOTLIGHTS ({ commit, dispatch }) {
  commit('SET_IS_LOADING');
  return new Promise((resolve, reject) => {
    fetchData("game?limit=8&type=new")
    .then(spotlights => {
      commit('SET_SPOTLIGHTS', { spotlights });
      resolve(spotlights);
    });
  });
}

export function CATEGORIES ({ commit, dispatch }) {
  return new Promise((resolve, reject) => {
    fetchData("game/tags")
    .then(categories => {
      commit('SET_CATEGORIES', { categories });
      resolve(categories);
    });
  });
}

export function SELECTED_CATEGORY ({ commit, dispatch }, category) {
  return new Promise((resolve, reject) => {
    commit('SET_SELECTED_CATEGORY', category);
    resolve(category);
  });
}

export function GAMES_CATEGORY ({ commit, dispatch }, category) {
  commit('SET_IS_LOADING');
  return new Promise((resolve, reject) => {
    fetchData(`game?tag=${category}`)
    .then(games => {
      commit('SET_GAMES_PER_CATEGORY', { games });
      resolve(games);
    });
  });
}

export function SEARCH_GAMES ({ commit, dispatch }, search) {
  commit('SET_IS_LOADING');
  return new Promise((resolve, reject) => {
    fetchData(`game?search=${search}`)
    .then(games => {
      commit('SET_SEARCH_GAMES', { games });
      resolve(games);
    });
  });
}

export function SELECTED_GAME ({ commit, dispatch }, gameUrl) {
  return commit('SET_SELECTED_GAME_URL', gameUrl);
}

export function SELECTED_GAME_NAME ({ commit, dispatch }, gameName) {
  return commit('SET_SELECTED_GAME_NAME', gameName);
}

export function SEARCH_QUERY ({ commit, dispatch }, searchQuery) {
  return commit('SET_SEARCH_QUERY', searchQuery);
}