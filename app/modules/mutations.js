export function SET_SPOTLIGHTS (state, { spotlights }) {
	state.spotlights = spotlights;
	state.isLoading = false;
}

export function SET_CATEGORIES (state, { categories }) {
	state.categories = categories;
}

export function SET_SELECTED_CATEGORY (state, category) {
	state.selected_category = category;
}

export function SET_GAMES_PER_CATEGORY (state, { games }) {
	state.gamesPerCategory = games;
	state.isLoading = false;
}

export function SET_IS_LOADING (state) {
	state.isLoading = true;
}

export function SET_SEARCH_GAMES (state, { games }) {
	state.searchGames = games;
	state.isLoading = false;
}

export function SET_SELECTED_GAME_URL (state, gameUrl) {
	state.selected_game_url = gameUrl;
}