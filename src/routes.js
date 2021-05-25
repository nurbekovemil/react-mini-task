import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'

const useRoutes = () => {
		return (
			<Switch>
				<Route path='/' component={HomePage} exact />
				<Route path='/:id' component={ServicePage} />
			</Switch>
		)

}
export default useRoutes