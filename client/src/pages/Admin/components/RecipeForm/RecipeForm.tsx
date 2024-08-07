import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoaderData, useNavigate } from 'react-router-dom';
import apiRecipes from '../../../../api/api-recipes';
import { RecipeInterface } from '../../../../types/types';

const schema = yup.object({
  title: yup
    .string()
    .required('Veuillez renseigner un titre')
    .min(5, 'Le titre doit comporter au moins 5 caractères')
    .max(30, 'Le titre doit comporter moins de 30 caractères'),
  image: yup
    .string()
    .url('Veuillez renseigner un lien valide')
    .required("Veuillez mettre le lien d'une image"),
});

export const RecipeForm = () => {
  const recipe: RecipeInterface = useLoaderData();
  const navigate = useNavigate()

  const defaultValues = {
    title: recipe?.title || '',
    image: recipe?.image || '',
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: {title: string, image: string}) => {
    clearErrors();

    const title = values.title.trim();
    const object = {
      ...values,
      title: title[0].toUpperCase() + title.slice(1),
    };

    try {
      if (recipe._id) {
        await apiRecipes.updateRecipe({ ...object }, recipe._id);
        navigate('../list')
      } else {
        const response = await apiRecipes.postRecipes(object);
        if (response.ok) {
          reset(defaultValues);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.form__title}>
          {recipe ? 'Modifier' : 'Ajouter'} une recette
        </h2>
        <div className={style.form__recipe}>
          <label htmlFor="title">Titre de la Recette</label>
          <input
            type="text"
            id="title"
            {...register('title')}
          />
          {errors.title && (
            <p className={style.form_error}>{errors.title.message}</p>
          )}
        </div>
        <div className={style.form__recipe}>
          <label htmlFor="image">Image de la Recette</label>
          <input
            type="text"
            id="image"
            {...register('image')}
          />
          {errors.image && (
            <p className={style.form_error}>{errors.image.message}</p>
          )}
        </div>
        <div className={style.form__action}>
          <button disabled={isSubmitting} className="btn btn-primary">
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
};
