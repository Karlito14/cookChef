import { useContext } from 'react';
import { AuthContext } from 'src/context/AuthContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to={'/signin'}></Navigate>;
};
