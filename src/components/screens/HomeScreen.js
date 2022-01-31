import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

export const HomeScreen = () => {

  const {user} = useContext(AuthContext);
  return (
      <div>
        <h1>HomeScreen</h1>
        <p>{JSON.stringify(user)}</p>
      </div>
  )
};
