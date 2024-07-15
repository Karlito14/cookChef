import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import apiUsers from '../../api/api-users';
import { AuthContext } from '../../context/AuthContext';
import { UserInterface } from '../../types/types';

export const AuthProvider = (props: { children: JSX.Element[] }) => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const login = async (data: UserInterface) => {
    const connectedUser = await apiUsers.signin(data);
    setUser(connectedUser);
    navigate('../admin');
  };

  const logout = async () => {
    await apiUsers.signout();
    setUser(null);
    navigate('../');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
