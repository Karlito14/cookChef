import { NavLink } from 'react-router-dom';
import apiRecipes from 'src/api/api-recipes';
import { useFetchRecipes } from 'src/hooks/useFetchRecipes';
import style from './style.module.scss';

export const AdminRecipesList = () => {
  const [[recipes, setRecipes]] = useFetchRecipes();

  const deleteRecipe = async (id) => {
    const updateRecipes = recipes.filter((recipe) => recipe._id !== id);
    setRecipes(updateRecipes);
    try {
      await apiRecipes.deleteRecipe(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className={style.list}>
      {recipes.length > 0 &&
        recipes.map((recipe) => {
          return (
            <div className={style.list__item} key={recipe._id}>
              <li>{recipe.title}</li>
              <div className={style.list__item__action}>
                <NavLink to={`../edit/${recipe._id}`} className="btn btn-primary">
                  Editer
                </NavLink>
                <button
                  className="btn btn-reverse-primary"
                  onClick={() => deleteRecipe(recipe._id)}
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
