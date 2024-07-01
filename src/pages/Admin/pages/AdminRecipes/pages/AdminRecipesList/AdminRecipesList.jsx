import { useFetchRecipes } from '../../../../../../hooks/useFetchRecipes';
import style from './style.module.scss';

export const AdminRecipesList = () => {
  const [recipes] = useFetchRecipes();

  return (
    <ul className={style.list}>
      {recipes.length > 0 &&
        recipes.map((recipe) => {
          return (
            <div className={style.list__item} key={recipe._id}>
              <li>{recipe.title}</li>
              <div className={style.list__item__action} >
                <button className='btn btn-primary'>Editer</button>
                <button className='btn btn-reverse-primary'>Supprimer</button>
              </div>
            </div>
          );
        })}
    </ul>
  );
};
