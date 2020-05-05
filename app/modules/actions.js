import { fetchData } from "./fetch";
import { postData } from "./fetch";

export function SPOTLIGHTS ({ commit, dispatch }) {
  commit('SET_IS_LOADING');
  return fetchData("game?limit=8&type=new")
    .then(spotlights => {
      return commit('SET_SPOTLIGHTS', { spotlights });
    });
}

export function CATEGORIES ({ commit, dispatch }) {
  return fetchData("game/tags")
    .then(categories => {
      return commit('SET_CATEGORIES', { categories });
    });
}

export function SELECTED_CATEGORIES ({ commit, dispatch }, category) {
  return commit('SET_SELECTED_CATEGORY', category);
}

export function GAMES_CATEGORY ({ commit, dispatch }, category) {
  commit('SET_IS_LOADING');
  return fetchData(`game?tag=${category}`)
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

export function SELECTED_GAME ({ commit, dispatch }, gameUrl) {
  return commit('SET_SELECTED_GAME_URL', gameUrl);
}