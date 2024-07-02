import style from './style.module.scss';
import apiRecipes from '../../api/api-recipes';
import { useUpdateIndex } from '../../hooks/useUpdateIndex';
import { useFetchRecipes } from '../../hooks/useFetchRecipes';
import { Recipe } from '../Recipe/Recipe';
import { Spinning } from '../Spinning/Spinning';
import { Search } from '../Search/Search';

export const Main = () => {
  const [[recipes, setRecipes], response, loading] = useFetchRecipes();
  const index = useUpdateIndex(recipes);

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
    <div className={style.container}>
      <h1 className={style.container__title}>Découvrez nos recettes</h1>
      <Search setRecipes={setRecipes} recipes={response} />
      <main className={style.container__main}>
        {loading && <Spinning />}
        <ul className={style.container__main__list}>
          {recipes.slice(0, index).map((recipe) => (
            <Recipe
              key={recipe._id}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};
