import React, {useContext} from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Comment from '../Comment/Comment';
import {UserContext} from '../../contexts/UserContext';

const Login = () => {
	const {state: user, dispatch: userDispatch} = useContext(UserContext);
  return (
    <div align="center">
      <div className={!user.isLoggedIn ? "App form" : "App form logged"}>

        {!user.isLoggedIn ? (
          <GoogleLogin
            className="GoogButton"
            clientId="211058580479-ng02d6bfs70l1ivihr2070448nr3n9sl.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={response => {
              console.log(response);
              userDispatch({
                type: 'setLoggedIn',
                payload: {
                  userName: response.profileObj?.name,
                  email: response.profileObj?.email,
                  profilePic: response.profileObj?.imageUrl,
                  access_token: response.tokenObj?.access_token,
                  expires_in: response.tokenObj?.expires_in
                }
              });
            }}
            onFailure={response => {
              userDispatch({type: 'setLoggedOut'});
            }}
          />
        ) : (
          <div>
            <Comment/>
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={response => {
                userDispatch({type: 'setLoggedOut'});
              }}
            />
          </div>
        )}
      </div>
      </div>
  );
}

export default Login;