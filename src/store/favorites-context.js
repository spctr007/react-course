import React, {createContext, useState} from 'react';

/*
 - CONTEXT => is a JS object that is used as a dynamic global variable
 - The createContext() object returns a React Component
 - The naming convention for a React Component should start with a capital letter.
 */

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    /*
        the 3 functions below do not do anything
        but is only included for better auto-completion
        in the IDE when being called later on.
     */
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

/*
 - component function
 - Tutorial: https://youtu.be/Dorf8i6lCuk?t=12094
 - The FavoritesContextProvider will be used as a wrapper to
 the other components that need to interact with it.

 Components that need the results of FavoritesContextProvider:
    - AllMeetups Page
    - Favorites Page
    - Navigation bar

    This will be added to the index.js in order to wrap the entire app.
 */
export function FavoritesContextProvider(props){

    // constant to store changes in the Favorites item
    const [userFavorites, setUserFavorites] = useState([]);

    // 3 functions to handle changes in the userFavorites
    // function 1
    function addFavoriteHandler(favoriteMeetup){
        /*
         This useState function() that sets the userFavorites.
         The value: stated here is the useState's previous snapshot/value.
         This means that it holds the previous values of the userFavorites
         and now will be updated with the new favoriteMeetup item.
         */
        setUserFavorites((previousUserFavorites) => {
            /* returns the current value of userFavorites with
            the addition of the new Favorite item.
            */
            return previousUserFavorites.concat(favoriteMeetup);
        });
    }

    // function 2
    function removeFavoriteHandler(meetupId){
        setUserFavorites((previousUserFavorites) => {
            /*
            .filter returns a new array
            .filter receives a function as a parameter that loops through
                all the items in the array and returns
                TRUE if WE WANT TO KEEP THE ITEM or
                FALSE if we DO NOT want to keep the item.
            The new array will be SAVING all the items that MEET the condition.
             */
            return previousUserFavorites.filter((meetup) => meetup.id !== meetupId);
        })
    }

    // function 3
    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    /*
    Constant that saves the current values of favorites
        and the totalFavorites.
        These will be passed on later in the props.children of
        <FavoritesContext.Provider>
    */
    const context = {

        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        /*
         - .Provider is a built-in component
         - .Provider component is the one that ties up the
            context constant with the createContext of React.
         */
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;