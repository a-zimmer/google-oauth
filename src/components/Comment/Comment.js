import React from 'react';

export default function Comment(props) {
  const {
    userName,
    email,
    expires_in,
    profilePic
  } = props;

  return (
      <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            <h3 className="welcome">Bem vindo, {userName}!</h3>
            <h4 className="welcome">E-mail: {email}.</h4>
            <h4 className="welcome">Sessão expira em {parseInt(expires_in / 60)} minutos.</h4>
          </div>
          <img className="Avatar"
            src={profilePic}
            alt={userName}
          />
        </div>
      </div>
  )
}