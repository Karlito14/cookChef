import { useState } from 'react';
import apiRecipes from '../../api/api-recipes';
import style from './style.module.scss';
import { FaHeart } from 'react-icons/fa';

export const Recipe = ({ recipe }) => {
  const [like, setLike] = useState(recipe.liked);

  const handleClick = async (e) => {
    e.stopPropagation();
    setLike(!like);
    try {
      apiRecipes.updateRecipe({liked: !recipe.liked}, recipe._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li onClick={handleClick}>
      <figure className={style.recipe}>
        <img className={style.recipe__img} src={recipe.image} alt="recette" />
        <figcaption className={style.recipe__title}>
          <h3>{recipe.title}</h3>
          <FaHeart
            className={style.recipe__title__icon}
            style={{ color: like && '#ff6348' }}
          />
        </figcaption>
      </figure>
    </li>
  );
};
