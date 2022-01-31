import { AuthContext } from '../auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

export const PrivateRoutes = ({children}) => {

    //Usar datos del usuario
    const {user} = useContext(AuthContext);

    //Datos de las rutas
    const {pathname, search} = useLocation();

    //Guardar datos de las
    localStorage.setItem('lastPath', `${pathname}${search}`);

    return user.logged
        ? children
        : <Navigate to="/login" />
};
