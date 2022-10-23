import React, {useEffect} from "react";

import JokeCard from "../JokeCard";
import './Favorites.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeFavorite} from "../../store/Favorites/favoritesAction";
import {useNavigate} from "react-router-dom";
import {catchTheJokesError} from "../../store/Jokes/jokesAction";
import {fetchJokes} from "../../utils/fetchJokes";
//favorite component to manage favorite related actions


const selectFavorites = (state) => state.favorites;

export default function Favorites({isFavoritesShow, setIsFavoritesShow}) {
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    //styles
    const favoriteWrapperClassName = isFavoritesShow
        ? "favorite--wrapper show"
        : "favorite--wrapper";

    //props
    const favoriteWrapperProps = {
        className: favoriteWrapperClassName,
    };

    const favouriteBtnProps = {
        className: "favourite-btn",
        onClick: () => setIsFavoritesShow(!isFavoritesShow),
    };

    // elements

    const jokeCards = favorites.map((joke) => {
        const props = {
            isFavorite: true,
            key: joke.id,
            jokeItem: joke,
            handleChangeFavorite: handleRemoveFavorite,
        };
        return <JokeCard {...props} />;
    });
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }
    //set favoritesReducer to Local Storage
    useEffect(() => {
        const key = "favorites";
        // console.log("set favoritesReducer to Local Storage =>>", favoritesReducer);
        const favoritesToLocalStorageJSON = JSON.stringify(favorites);
        localStorage.setItem(key, favoritesToLocalStorageJSON);
    }, [favorites]);

    // remove favorite from store
    function handleRemoveFavorite(jokeItem) {
        const filteredFavorites = favorites.filter(
            (favouriteJoke) => favouriteJoke.id !== jokeItem.id
        );
        // console.log("filteredFavorites ===>", filteredFavorites);
        const action = removeFavorite(filteredFavorites);
        dispatch(action);
    }

    const selectJokes = (state) => state.jokes;
    const {receivedJokes, error: jokesError} = useSelector(selectJokes);

//because if used with useEffect in the main component it will cause rerendering ( needs to be rewritten )
    function handleGetJokes(e) {
        let path = `/`;
        navigate(path);

        if (jokesError) dispatch(catchTheJokesError(null));


        const action = fetchJokes("https://api.chucknorris.io/jokes/random");
        // console.log(action);


        var callCount = 0;
        var repeater = setInterval(function () {
            if (callCount < 10) {
                //console.log('test repeater, ', callCount)
                dispatch(action);
                callCount += 1;
            } else {
                clearInterval(repeater);
            }
        }, 1000);

    }

    return (
        <div {...favoriteWrapperProps}>

            <button type="submit" onClick={handleGetJokes}>Jokes</button>


            <aside className="favourite">
                <div {...favouriteBtnProps}>
                    <h3>Favorite</h3>
                </div>
                {jokeCards}
            </aside>

        </div>
    );
}
