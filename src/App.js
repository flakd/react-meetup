import {Routes, Route} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetups'
import MainNavigation from './components/layout/MainNavigation'

function App() {
	return (
		<div>
			<MainNavigation />
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
