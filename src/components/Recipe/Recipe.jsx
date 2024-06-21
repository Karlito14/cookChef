import { useState } from 'react';
import style from './style.module.scss';
import { FaHeart } from 'react-icons/fa';

export const Recipe = ({ title, image }) => {
  const [like, setLike] = useState(false);

  const handleClickHeart = (e) => {
    e.stopPropagation();
    setLike(!like);
  };

  return (
    <li onClick={handleClickHeart}>
      <figure className={style.recipe}>
        <img className={style.recipe__img} src={image} alt="recette" />
        <figcaption className={style.recipe__title}>
          <h3>{title}</h3>
          <FaHeart
            className={style.recipe__title__icon}
            style={{ color: like && '#ff6348' }}
          />
        </figcaption>
      </figure>
    </li>
  );
};
