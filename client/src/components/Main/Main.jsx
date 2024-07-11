import style from './style.module.scss';
import apiRecipes from 'src/api/api-recipes';
import { useUpdateIndex } from 'src/hooks/useUpdateIndex';
import { useFetchRecipes } from 'src/hooks/useFetchRecipes';
import { Recipe } from 'src/components/Recipe/Recipe';
import { Spinning } from 'src/components/Spinning/Spinning';
import { Search } from 'src/components/Search/Search';

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
