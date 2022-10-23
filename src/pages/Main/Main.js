import React, {useState, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {catchTheJokesError} from "../../store/Jokes/jokesAction";
import {addFavorite, removeFavorite} from "../../store/Favorites/favoritesAction";
import {fetchJokes} from "../../utils/fetchJokes";

import Navigation from "../../components/Navigation";
import JokeCard from "../../components/JokeCard";
import './Main.scss';

const selectJokes = (state) => state.jokes;
const selectFavorites = (state) => state.favorites;


export default function MainComponent() {
    const [listJokes, setListJokes] = useState([])
    const {receivedJokes, error: jokesError} = useSelector(selectJokes);
    // console.log("receivedJokes ===>", receivedJokes);

    const favorites = useSelector(selectFavorites);
    // console.log("favoritesReducer ===>", favoritesReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        let jokes = []
        // setListJokes(prevState => [...prevState, obj1])
        receivedJokes.map(joke => jokes.push(joke))
        setListJokes([...listJokes, jokes[0]])
        if (listJokes.length > 9) {
            listJokes.shift()

            setListJokes([...listJokes, jokes[0]])
        }

    }, [JSON.stringify(receivedJokes)])


    const jokeCards = listJokes.map((joke) => {
        if (joke !== undefined) {
            const props = {
                isMain: true,
                isFavorite: isFavorite(joke),
                key: joke.id,
                jokeItem: joke,
                handleChangeFavorite: handleToggleFavorite,

            };

            return <JokeCard {...props} />;

        }


    })


    function handleToggleFavorite(jokeItem) {
        if (isFavorite(jokeItem)) {
            const filteredFavorites = favorites.filter(
                (favouriteJoke) => favouriteJoke.id !== jokeItem.id
            );
            // console.log("filteredFavorites ===>", filteredFavorites);
            const action = removeFavorite(filteredFavorites);
            dispatch(action);
        } else {
            const action = addFavorite({...jokeItem});
            dispatch(action);
        }
    }

    function handleGetJoke(e) {


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


    function handleNewJoke(e) {
        e.preventDefault();
        if (jokesError) dispatch(catchTheJokesError(null));
        const action = fetchJokes("https://api.chucknorris.io/jokes/random");
        // console.log(action);
        var repeater = setInterval(function () {
            //console.log('test repeater, ', callCount)
            dispatch(action);
        }, 5000);
    }

    function isFavorite(jokeItem) {
        const isFavorite = !!favorites.filter(
            (favouriteJoke) => favouriteJoke.id === jokeItem.id
        ).length;
        return isFavorite;
    }

    //didin't use useEffect to prevent any rerendering
    window.onload = handleGetJoke;

    return (
        <main>
            <div className="main--heading">
                <h2>Print 10 random Jokes:</h2>
            </div>
            <Navigation handleGetJoke={handleGetJoke} handleNewJoke={handleNewJoke}/>
            <div className="main--jokecards__wrapper">
                {jokeCards}
            </div>
        </main>
    );
}
