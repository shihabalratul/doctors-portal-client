import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import loginBg from '../../../images/loginBg.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';

// if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
// }
const Login = () => {
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const provider = new firebase.auth.GoogleAuthProvider();

	const handleGoogleSignIn = () => {
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				const userInfo = {
					name: user.displayName,
					email: user.email
				}
				setLoggedInUser(userInfo);


				history.replace(from);
				// ...
			}).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	}

	return (
		<div className="row px-5 pt-5 w-100">
			<div className="col-md-6 px-5">
				<div className="m-3 px-4 py-5 card w-75 border-0 shadow rounded-3">
					<h3 className="fw-light text-center mb-5 pb-2">Login</h3>
					<label htmlFor="userName"><small className="text-secondary ms-2">User Name</small></label>
					<input className="border-0 m-2 border-bottom border-secondary" type="text" name="userName" id="" />
					<label htmlFor="password"><small className="text-secondary ms-2">Password</small></label>
					<input className="border-0 m-2 border-bottom border-secondary" type="password" name="password" id="" />
					<p className="text-danger">Forgot your password?</p>
					<button onClick={handleGoogleSignIn} className="btn back-gradient form-control my-5">Sign in</button>
				</div>
			</div>
			<div className="col-md-6 px-5">
				<div className="px-5">
					<img className="img-fluid" src={loginBg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Login;