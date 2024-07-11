import { useState } from 'react';
import apiRecipes from 'src/api/api-recipes';
import style from './style.module.scss';
import { FaHeart, FaTimes } from 'react-icons/fa';

export const Recipe = ({ recipe, deleteRecipe }) => {
  const [like, setLike] = useState(recipe.liked);

  const handleClickLiked = async () => {
    setLike(!like);
    try {
      apiRecipes.updateRecipe({ liked: !recipe.liked }, recipe._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <figure className={style.recipe}>
        <FaTimes className={style.recipe__delete} onClick={() => deleteRecipe(recipe._id)} />
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
