import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

export const AdminNav = () => {
    return (
        <nav className={style.container}>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? style.container__link_active : style.container__link} to={'recipes'}>Recettes</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? style.container__link_active : style.container__link} to={'users'}>Utilisateurs</NavLink>
                </li>
            </ul>
        </nav>
    )
};
