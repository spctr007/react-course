import {Link} from "react-router-dom";
import React, {useContext} from "react";
import navStyles from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {

    const favoritesContextObject = useContext(FavoritesContext);
    return (
        <header className={navStyles.header}>
            <div className={navStyles.logo}>React Meetups</div>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetups">Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites">
                        Favorites
                        <span className={classes.badge}>{favoritesContextObject.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}