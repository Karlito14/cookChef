import style from './style.module.scss';
import { FaBars } from 'react-icons/fa6';
import logo from '../../assets/images/cookchef.png';
import { FaHeart } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const [click, setClick] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={style.header}>
        <div className={style.header__containerImg}>
          <Link to={'/'}>
            <img
              src={logo}
              alt="cookchef"
              className={style.header__containerImg__img}
            />
          </Link>
        </div>
        {!user ? (
          <ul
            className={`${style.header__list} ${
              click && windowWidth < 640 ? style.active : ''
            }`}
          >
            <li className={style.header__list__item}>
              <Link to={'/signup'} className="btn btn-primary">
                Inscription
              </Link>
            </li>
            <li className={style.header__list__item}>
              <Link to={'/signin'} className="btn btn-reverse-primary">
                Connexion
              </Link>
            </li>
          </ul>
        ) : (
          <ul
            className={`${style.header__list} ${
              click && windowWidth < 640 ? style.active : ''
            }`}
          >
            <li className={style.header__list__item}>
              <Link to={'/admin'} className="btn btn-primary">
                Profil
              </Link>
            </li>
            <li className={style.header__list__item}>
              <button className="btn btn-reverse-primary">
                {<FaHeart />}WishList
              </button>
            </li>
            <li className={style.header__list__item}>
              <button onClick={logout} className="btn btn-reverse-primary">Déconnexion</button>
            </li>
          </ul>
        )}

        <FaBars
          className={style.header__icon}
          onClick={() => setClick(!click)}
        />
      </header>
      {click && windowWidth < 640 ? (
        <div onClick={() => setClick(false)} className={style.calc}></div>
      ) : null}
    </>
  );
};
