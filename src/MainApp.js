import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';

import {AuthContext} from './auth/authContext';
import {authReducer} from './auth/authReducer';

const init = ()=> {
  const user = JSON.parse(localStorage.getItem('user'));

  if(!user){
    return {
      logged: false
    }
  }

  return user;
}

export const MainApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if(!user){
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  

  return (
    <AuthContext.Provider value={{
        user,
        dispatch
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
    );
};  
