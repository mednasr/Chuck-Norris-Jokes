import { combineReducers } from "redux";

import { jokesReducer } from "./Jokes/jokesReducer";
import { favoritesReducer } from "./Favorites/favoritesReducer";
const reducer = combineReducers({
    jokes: jokesReducer,
    favorites: favoritesReducer,
});

export default reducer;
