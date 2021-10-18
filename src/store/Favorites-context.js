import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetup) => {},
  itemIsFavorite: (meetup) => {}
});

export function FavoritesContextProvider(props) {
  const [UserFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup){
    setUserFavorites((prevUserFavorites) => {
    return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoritesHandler(meetupId){
    setUserFavorites((prevUserFavorites) => {
    return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }
  
  function itemIsFavoriteHandler(meetupId){
    return UserFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: UserFavorites,
    totalFavorites: UserFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;