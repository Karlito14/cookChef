import { useState } from 'react';
import apiRecipes from '../../api/api-recipes';
import style from './style.module.scss';
import { FaHeart, FaTimes } from 'react-icons/fa';

export const Recipe = ({ recipe, deleteRecipe }) => {
  const [like, setLike] = useState(recipe.liked);

  const handleClickLiked = async (e) => {
    e.stopPropagation();
    setLike(!like);
    try {
      apiRecipes.updateRecipe({ liked: !recipe.liked }, recipe._id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickDelete = (e) => {
    e.stopPropagation();
    deleteRecipe(recipe._id);
  };

  return (
    <li>
      <figure className={style.recipe}>
        <FaTimes className={style.recipe__delete} onClick={handleClickDelete} />
        <img className={style.recipe__img} src={recipe.image} alt="recette" />
        <figcaption className={style.recipe__title}>
          <h3>{recipe.title}</h3>
          <FaHeart
            onClick={handleClickLiked}
            className={style.recipe__title__icon}
            style={{ color: like && '#ff6348' }}
          />
        </figcaption>
      </figure>
    </li>
  );
};
