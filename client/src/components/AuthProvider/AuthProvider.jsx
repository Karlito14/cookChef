import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/context/AuthContext';
import apiUsers from 'src/api/api-users';

export const AuthProvider = ({ children }) => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const login = async (data) => {
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
      {children}
    </AuthContext.Provider>
  );
};
