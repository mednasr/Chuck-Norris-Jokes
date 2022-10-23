import { RECEIVE_JOKES, JOKES_ERROR } from "./jokesAction";

const initialState = {
    receivedJokes: [],
    error: null,
};

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_JOKES: {
            return { ...state, receivedJokes: action.payload };
        }
        case JOKES_ERROR: {
            return { ...state, error: action.payload };
        }
        default: {
            return state;
        }
    }
};
