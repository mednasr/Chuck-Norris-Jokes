import {ADD_FAVORITE} from "./favoritesAction";
import {REMOVE_FAVORITE} from "./favoritesAction";

//get favoritesReducer FromLocal Storage to initial state
const key = "favorites";
const favoritesFromLocalStorageJSON = localStorage.getItem(key);
// console.log(
//   "favoritesFromLS to initial state ==>",
//   favoritesFromLocalStorageJSON
// );
const initialState = favoritesFromLocalStorageJSON
    ? JSON.parse(favoritesFromLocalStorageJSON)
    : [];

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE: {
            return [...state, action.payload];
        }
        case REMOVE_FAVORITE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
