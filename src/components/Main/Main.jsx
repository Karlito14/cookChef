import { Recipe } from '../Recipe/Recipe';
import style from './style.module.scss';

export const Main = () => {
  return (
    <div className={style.container}>
      <h1 className={style.container__title}>Découvrez nos recettes</h1>
      <main className={style.container__main}>
        <ul className={style.container__main__list}>
          <Recipe />
        </ul>
      </main>
    </div>
  );
};
