import { FaSearch } from 'react-icons/fa';
import style from './style.module.scss';
import { RecipeInterface } from '../../types/types';

export const Search = (props : { setRecipes: React.Dispatch<React.SetStateAction<RecipeInterface[]>>, recipes: RecipeInterface[] }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim().toLowerCase();
    const recipesUpdated = props.recipes.filter((recipe: RecipeInterface) =>
      recipe.title.toLowerCase().includes(value)
    );
    props.setRecipes(recipesUpdated);
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
