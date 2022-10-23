export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// change the visibility of Favorites
export const addFavorite = (favorite = {}) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    };
};

export const removeFavorite = (favorites = []) => {
    return {
        type: REMOVE_FAVORITE,
        payload: favorites
    };
};
