import { Recipe } from '../Recipe/Recipe';
import style from './style.module.scss';
import { data } from '../../data/data';

export const Main = () => {
  return (
    <div className={style.container}>
      <h1 className={style.container__title}>Découvrez nos recettes</h1>
      <main className={style.container__main}>
        <ul className={style.container__main__list}>
          {data.map((recipe, index) => (
            <Recipe key={index} title={recipe.title} image={recipe.image} />
          ))}
        </ul>
      </main>
    </div>
  );
};
