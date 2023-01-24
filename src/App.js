import {Routes, Route} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetups'
import Layout from './components/layout/Layout'

function App() {
	return (
		<Layout>
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
		</Layout>
	)
}

export default App
