import React from "react";
import classes from './MeetupItem.module.css'
import Card from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoritesContextObject = useContext(FavoritesContext);

    // .itemIsFavorite returns TRUE or FALSE
    const thisItemIsFavorite = favoritesContextObject.itemIsFavorite(props.id);

    // function to handle favorites
    function toggleFavoriteStatusHandler(){
        if (thisItemIsFavorite){
            favoritesContextObject.removeFavorite(props.id);
        } else {
            favoritesContextObject.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {thisItemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;