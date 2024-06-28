import { Recipe } from '../Recipe/Recipe';
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import apiRecipes from '../../api/api-recipes';
import { Spinning } from '../Spinning/Spinning';
import { useUpdateIndex } from '../../hooks/useUpdateIndex';
import { Search } from '../Search/Search';

export const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const index = useUpdateIndex(recipes);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await apiRecipes.getRecipes();
        setRecipes(response);
        setResponse(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getRecipes();
  }, []);

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
