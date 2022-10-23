export const RECEIVE_JOKES = "RECEIVE_JOKES";
export const JOKES_ERROR = " JOKES_ERROR";

export const setReceivedJokes = (fetchResponse = {}) => {
    return {
        type: RECEIVE_JOKES,
        payload: fetchResponse
    };
};

export const catchTheJokesError = (error) => {
    return {
        type: JOKES_ERROR,
        payload: error
    };
};
