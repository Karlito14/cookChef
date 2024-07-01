import { Outlet } from 'react-router-dom';

export const AdminRecipes = () => {
  return (
    <div>
      <h3>Admin recipes</h3>
      <Outlet />
    </div>
  );
};
