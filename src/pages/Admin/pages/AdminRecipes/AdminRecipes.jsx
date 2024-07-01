import { Outlet } from 'react-router-dom';
import style from './style.module.scss';
import { AdminRecipesNav } from './components/AdminRecipeNav/AdminRecipeNav';

export const AdminRecipes = () => {
  return (
    <div className={style.container}>
      <h3 className={style.container__title}>Gestion des recettes</h3>
      <div className={style.container__content}>
        <AdminRecipesNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
