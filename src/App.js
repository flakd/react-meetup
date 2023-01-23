import {Routes, Route} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetups'

function App() {
	return (
		<div>
			<Routes>
				<Route
					exact
					path='/'
					element={<AllMeetupsPage />}
				/>
				<Route
					exact
					path='/favorites'
					element={<FavoritesPage />}
				/>
				<Route
					exact
					path='/new-meetups'
					element={<NewMeetupsPage />}
				/>
			</Routes>
		</div>
	)
}

export default App
