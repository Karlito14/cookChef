import style from './style.module.scss';
import recette from '../../assets/images/recette.jpg';

export const Recipe = () => {
  return (
    <li>
      <figure className={style.recipe}>
        <img className={style.recipe__img} src={recette} alt='recette' />
        <figcaption className={style.recipe__title}>
          <h3>Boulette de viande aux champignons</h3>
        </figcaption>
      </figure>
    </li>
  );
};
