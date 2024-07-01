import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

export const AdminRecipesNav = () => {
  return (
    <nav className={style.container}>
      <ul className={style.container__list}>
        <li className={style.container__list__link}>
          <NavLink className={({isActive}) => isActive ? style.active : ''} to={'list'}>Liste des recettes</NavLink>
        </li>
        <li className={style.container__list__link}>
          <NavLink className={({isActive}) => isActive ? style.active : ''} to={'new'}>Ajouter une recette</NavLink>
        </li>
      </ul>
    </nav>
  );
};
