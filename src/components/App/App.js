import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Comment from '../Comment/Comment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.userData = {
      userName: null,
      email: null,
      profilePic: null,
      access_token: null,
      expires_in: null
    }
  }
  render() {
    return (
      <div align="center">
      <div className={!this.state.isLoggedIn ? "App form" : "App form logged"}>

        {!this.state.isLoggedIn ? (
          <GoogleLogin
            className="GoogButton"
            clientId="211058580479-ng02d6bfs70l1ivihr2070448nr3n9sl.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={response => {
              this.setState(() => {
                return { isLoggedIn: true };
              });

              this.userData.userName = response.profileObj?.name;
              this.userData.email = response.profileObj?.email;
              this.userData.profilePic = response.profileObj?.imageUrl;
              this.userData.access_token = response.tokenObj?.access_token;
              this.userData.expires_in = response.tokenObj?.expires_in;

              console.table(this.userData);
            }}
            onFailure={response => {
              this.setState(() => {
                return { isLoggedIn: false };
              });
            }}
          />
        ) : (
          <div>
            <Comment
              userName={this.userData.userName}
              email={this.userData.email}
              expires_in={this.userData.expires_in}
              profilePic={this.userData.profilePic}
            />
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={response => {
                this.setState(() => {
                  return { isLoggedIn: false };
                });
              }}
            />
          </div>
        )}
      </div>
      </div>
    );
  }
}
export default App;