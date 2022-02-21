import React, {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {

    const favoritesContextObject = useContext(FavoritesContext);

    let content;

    if (favoritesContextObject.totalFavorites === 0) {
        content = <p>You have no favorites yet. Add some?</p>
    } else {
        content = <MeetupList meetups={favoritesContextObject.favorites}/>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}