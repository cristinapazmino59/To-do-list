import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Login from '../Login/Login';
import s from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loggedUser, toggleAuth } = useContext(AuthContext); 
  const [ showLogin, setShowLogin ] = useState(false);

  const loginUser = () => setShowLogin(true);

  const logoutUser = () => {
    toggleAuth(null);
    localStorage.clear();
    navigate("/");
  };

    return (
        <>
            <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
            <div className={s.container}>
                <h1 className={s.title}>{ isAuthenticated 
                    ? `Hi ${loggedUser.user}!` 
                   : "To see your notes, please log in"
                  }
                </h1>
                <button className={s.button} onClick={isAuthenticated ? logoutUser : loginUser}>
                    {isAuthenticated ? 'Logout' : 'Login'}
                </button>
            </div>
        </>
    )
}

export default Header;