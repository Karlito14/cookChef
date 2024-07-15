import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const ProtectedRoute = (props: { children: JSX.Element }) => {
  const provider = useContext(AuthContext);

  const user = provider?.user;

  return user ? props.children : <Navigate to={'/signin'}></Navigate>;
};
