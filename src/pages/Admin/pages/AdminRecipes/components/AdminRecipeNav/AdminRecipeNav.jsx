import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

export const AdminRecipesNav = () => {
  return (
    <nav className={style.container}>
      <ul className={style.container__list}>
        <li className={style.container__list__link}>
          <NavLink>Créer une recette</NavLink>
        </li>
        <li className={style.container__list__link}>
          <NavLink>Liste des recettes</NavLink>
        </li>
      </ul>
    </nav>
  );
};
