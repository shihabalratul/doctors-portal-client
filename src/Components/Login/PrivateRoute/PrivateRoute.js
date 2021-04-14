import React, { useContext, createContext, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
} from "react-router-dom";
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);


	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedInUser.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;