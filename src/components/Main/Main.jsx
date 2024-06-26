import { Recipe } from '../Recipe/Recipe';
import style from './style.module.scss';
import { data } from '../../data/data';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import apiRecipes from '../../api/api-recipes';
import { Spinning } from '../Spinning/Spinning';

export const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await apiRecipes.getRecipes();
        setRecipes(response);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, []);

  const handleInput = (event) => {
    const value = event.target.value.trim().toLowerCase();
    const recipesUpdated = data.filter((recipe) =>
      recipe.title.toLowerCase().includes(value)
    );
    setRecipes(recipesUpdated);
  };

  return (
    <div className={style.container}>
      <h1 className={style.container__title}>Découvrez nos recettes</h1>
      <div className={style.container__divInput}>
        <FaSearch className={style.container__divInput__icon} />
        <input
          type="text"
          placeholder="Rechercher"
          className={style.container__divInput__input}
          onInput={handleInput}
        />
      </div>
      <main className={style.container__main}>
        {loading && <Spinning />}
        <ul className={style.container__main__list}>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe._id}
              recipe={recipe}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};
