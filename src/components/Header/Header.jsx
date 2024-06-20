import style from './style.module.scss';
import { FaBars, FaBasketShopping } from 'react-icons/fa6';
import logo from '../../assets/images/cookchef.png';

export const Header = () => {
  return (
    <header className={style.header}>
      <FaBars className={style.header__icon} />
      <div className={style.header__containerImg}>
        <img src={logo} alt="cookchef" className={style.header__containerImg__img} />
      </div>
      <ul className={style.header__list}>
        <li className={style.header__list__item}>
            <button className='btn btn-reverse-primary'>{<FaBasketShopping />}Panier</button>
        </li>
        <li className={style.header__list__item}>
            <button className='btn btn-primary'>Connexion</button>
        </li>
      </ul>
    </header>
  );
};
