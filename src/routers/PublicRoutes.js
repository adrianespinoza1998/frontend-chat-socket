import { AuthContext } from './../auth/authContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

export const PublicRoutes = ({children}) => {
    //Usar datos del usuario
    const {user} = useContext(AuthContext);

    return user.logged
        ? <Navigate to='/dashboard' />
        : children
};
