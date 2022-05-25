import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { setUser } from './../../store/actions';
import { setLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { config } from 'dotenv';

config();

export default function GoogleLoginButton() {
	const dispatch = useDispatch();
  const navigate = useNavigate();

	function onSuccess(response) {
		const user = {
			name: response.profileObj.name,
			firstName: response.profileObj.givenName,
			lastName: response.profileObj.familyName,
			email: response.profileObj.email,
			image: response.profileObj.imageUrl,
		};
		setLocalStorage("token", response.tokenObj.access_token);
		dispatch(setUser(user));
		setLocalStorage("profile", user);
		navigate('../dashboard', { replace: true });
	}

	function onFailure(response) {
		console.log(response);
	}

	return (
		<div id="signInButton">
			<GoogleLogin
				clientId={process.env.GOOGLE_CLIENT_ID}
				buttonText="Login com Google"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignUp={true}
			/>
		</div>
	);
}
