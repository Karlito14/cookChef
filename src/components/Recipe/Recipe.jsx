import style from './style.module.scss';

export const Recipe = ({ title, image }) => {
  return (
    <li>
      <figure className={style.recipe}>
        <img className={style.recipe__img} src={image} alt="recette" />
        <figcaption className={style.recipe__title}>
          <h3>{title}</h3>
        </figcaption>
      </figure>
    </li>
  );
};
