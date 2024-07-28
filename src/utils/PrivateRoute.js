import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);

    // Si el usuario está autenticado, renderiza los componentes hijos, si no, redirige a /login
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
