import {createContext, useState} from 'react';

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([]);

	function handleAddFavorite(newFavorite) {
		setUserFavorites((previousUserFavorites) => {
			return userFavorites.concat(newFavorite);
		});
	}

	function handleRemoveFavorite(meetupId) {
		setUserFavorites((previousUserFavorites) => {
			return userFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	}

	function handleItemIsFavorite(meetupId) {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: handleAddFavorite,
		removeFavorite: handleRemoveFavorite,
		itemIsFavorite: handleItemIsFavorite,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
