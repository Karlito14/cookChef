import { FaSearch } from 'react-icons/fa';
import style from './style.module.scss';
import { data } from '../../data/data';

export const Search = ({ setRecipes }) => {
  const handleInput = (event) => {
    const value = event.target.value.trim().toLowerCase();
    const recipesUpdated = data.filter((recipe) =>
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
