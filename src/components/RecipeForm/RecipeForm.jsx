import style from './style.module.scss';

export const RecipeForm = () => {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <h2 className={style.form__title}>Ajouter une recette</h2>
        <div className={style.form__recipe}>
            <label htmlFor="title">Titre de la Recette</label>
            <input type="text" id='title' name='title' />
            {/* <p className={style.form_error}>Erreur</p> */}
        </div>
        <div className={style.form__recipe}>
            <label htmlFor="title">Image de la Recette</label>
            <input type="text" id='title' name='title' />
            {/* <p className={style.form_error}>Erreur</p> */}
        </div>
        <div className={style.form__action}>
          <button className="btn btn-primary">Sauvegarder</button>
        </div>
      </form>
    </div>
  );
};
