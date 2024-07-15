import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
import { RecipeInterface } from '../../../../../../types/types';
import apiRecipes from '../../../../../../api/api-recipes';
import { useFetchRecipes } from '../../../../../../hooks/useFetchRecipes';

export const AdminRecipesList = () => {
  const [[recipes, setRecipes]] = useFetchRecipes();

  const deleteRecipe = async (id: string) => {
    const updateRecipes = recipes.filter((recipe: RecipeInterface) => recipe._id !== id);
    setRecipes(updateRecipes);
    try {
      await apiRecipes.deleteRecipe(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className={style.list}>
      {recipes?.length > 0 &&
        recipes.map((recipe: RecipeInterface) => {
          return (
            <div className={style.list__item} key={recipe._id}>
              <li>{recipe.title}</li>
              <div className={style.list__item__action}>
                <NavLink
                  to={`../edit/${recipe._id}`}
                  className="btn btn-primary"
                >
                  Editer
                </NavLink>
                <button
                  className="btn btn-reverse-primary"
                  onClick={() => {if(recipe._id) return deleteRecipe(recipe._id)}}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
    </ul>
  );
};
