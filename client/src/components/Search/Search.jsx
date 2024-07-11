import { FaSearch } from 'react-icons/fa';
import style from './style.module.scss';

export const Search = ({ setRecipes, recipes }) => {
  const handleInput = (event) => {
    const value = event.target.value.trim().toLowerCase();
    const recipesUpdated = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(value)
    );
    setRecipes(recipesUpdated);
  };

  return (
    <div className={style.divInput}>
      <FaSearch className={style.divInput__icon} />
      <input
        type="text"
        placeholder="Rechercher"
        className={style.divInput__input}
        onInput={handleInput}
      />
    </div>
  );
};
