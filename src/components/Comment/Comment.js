import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

export default function Comment() {
  const {state: user} = useContext(UserContext);
  console.table(user);
  return (
      <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            <h3 className="welcome">Bem vindo, {user.userName}!</h3>
            <h4 className="welcome">E-mail: {user.email}.</h4>
            <h4 className="welcome">Sessão expira em {parseInt(user.expires_in / 60)} minutos.</h4>
          </div>
          <img className="Avatar"
            src={user.profilePic}
            alt={user.userName}
          />
        </div>
      </div>
  )
}