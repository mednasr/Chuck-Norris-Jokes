import React from "react";

import HeartSVG from "../../assets/img/svg/HeartSVG";
import FilledHeartSVG from "../../assets/img/svg/FilledHeartSVG";
import MainJokecardBodyIconSVG from "../../assets/img/svg/MainJokecardBodyIconSVG";
import FavoriteJokecardBodyIconSVG from "../../assets/img/svg/FavoriteJokecardBodyIconSVG";
import LinkSVG from "../../assets/img/svg/LinkSVG";
import './JokeCard.scss'
//Joke card component to manage each joke related actions

export default function JokeCard({
                                     isMain,
                                     isFavorite,
                                     jokeItem,
                                     handleChangeFavorite,
                                 }) {
    const {  id, url, value, updated_at, categories } = jokeItem;
    const localeUpdatedAtDate = new Date(updated_at).toLocaleString();

    //styles
    const blockClassName = isMain ? "main" : "aside";

    //elements
    const heart = isFavorite ? <FilledHeartSVG /> : <HeartSVG />;
    const bodyIcon = isMain ? (
        <MainJokecardBodyIconSVG />
    ) : (
        <FavoriteJokecardBodyIconSVG />
    );

    const categoriesElements = isMain
        ? categories.map((category, index) => (
            <p
                className={`${blockClassName}-jokecard-body-content-info-category`}
                key={index}
            >
                {category}
            </p>
        ))
        : null;

    return (
        <div
            className={`${blockClassName}-jokecard`}
            onDoubleClick={() => handleChangeFavorite(jokeItem)}
        >
            <p
                className={`${blockClassName}-jokecard-like`}
                onClick={() => handleChangeFavorite(jokeItem)}
            >
                {heart}
            </p>
            <div className={`${blockClassName}-jokecard-body`}>
                <p className={`${blockClassName}-jokecard-body-icon`}>{bodyIcon}</p>
                <div className={`${blockClassName}-jokecard-body-content`}>
                    <p className={`${blockClassName}-jokecard-body-content-id`}>
                        ID:&nbsp;
                        <a href={url}  rel="noreferrer" target="_blank">
                            {id} &nbsp;
                            <LinkSVG />
                        </a>
                    </p>
                    <p className={`${blockClassName}-jokecard-body-content-text`}>
                        {value}
                    </p>
                    <div className={`${blockClassName}-jokecard-body-content-info`}>
                        <p
                            className={`${blockClassName}-jokecard-body-content-info-update`}
                        >
                            Last update: {localeUpdatedAtDate}
                        </p>

                        {categoriesElements}
                    </div>
                </div>
            </div>
        </div>
    );
}
