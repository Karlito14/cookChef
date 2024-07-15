import { useState } from 'react';
import style from './style.module.scss';
import { FaHeart, FaTimes } from 'react-icons/fa';
import { RecipeInterface } from '../../types/types';
import apiRecipes from '../../api/api-recipes';

export const Recipe = (props: {
  recipe: RecipeInterface;
  deleteRecipe: (id: string) => void;
}) => {
  const [like, setLike] = useState(props.recipe.liked);

  const handleClickLiked = async () => {
    setLike(!like);
    try {
      if (props.recipe._id) {
        apiRecipes.updateRecipe(
          { liked: !props.recipe.liked },
          props.recipe._id
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <figure className={style.recipe}>
        <FaTimes
          className={style.recipe__delete}
          onClick={() => {
            if (props.recipe._id) return props.deleteRecipe(props.recipe._id);
          }}
        />
        <img
          className={style.recipe__img}
          src={props.recipe.image}
          alt="recette"
        />
        <figcaption className={style.recipe__title}>
          <h3>{props.recipe.title}</h3>
          <FaHeart
            onClick={handleClickLiked}
            className={style.recipe__title__icon}
            style={{ color: like ? '#ff6348' : '' }}
          />
        </figcaption>
      </figure>
    </li>
  );
};
