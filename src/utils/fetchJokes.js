import { setReceivedJokes, catchTheJokesError } from "../store/Jokes/jokesAction";

export function fetchJokes(url) {

    return (dispatch) => {

        return fetch(url)
            .then((res) => res.json())
            .then(
                (responseResult) => {
                    if (responseResult.result)
                        dispatch(setReceivedJokes(responseResult.result));
                    else dispatch(setReceivedJokes([responseResult]));
                },
                (error) => {
                    dispatch(setReceivedJokes([]));
                    dispatch(catchTheJokesError(error));
                }

            );

    };
}
