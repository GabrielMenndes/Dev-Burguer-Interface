import { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem('devburger:userData');
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem('devburger:userData');

    if (userInfoLocalStorage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUserInfo(JSON.parse(userInfoLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userInfo, putUserData, logout, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be a valid context');
  }

  return context;
};
