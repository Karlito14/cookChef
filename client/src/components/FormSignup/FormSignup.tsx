import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import apiUsers from '../../api/api-users';
import { UserInterface } from '../../types/types';

const schema = yup.object({
  name: yup
    .string()
    .required('Veuillez renseigner votre nom')
    .min(3, 'Le nom doit contenir au moins 3 caractères'),
  email: yup
    .string()
    .email('Veuillez renseigner une adresse mail valide')
    .required('Veuillez renseigner votre email'),
  password: yup
    .string()
    .required('Veuillez renseigner un mot de passe')
    .min(5, 'Le nom doit contenir au moins 5 caractères'),
});

export const FormSignup = () => {
  const navigate = useNavigate();

  const defaultValues = {
    name: '',
    email: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: UserInterface) => {
    clearErrors();
    try {
      await apiUsers.createUser(data);
      navigate('../signin');
    } catch (message: any) {
      setError('root', { type: 'generic', message });
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.form__title}>Inscription</h2>
        <div className={style.form__content}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            {...register('name')}
          />
          {errors.name && (
            <p className={style.form_error}>{errors.name.message}</p>
          )}
        </div>
        <div className={style.form__content}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            {...register('email')}
          />
          {errors.email && (
            <p className={style.form_error}>{errors.email.message}</p>
          )}
        </div>
        <div className={style.form__content}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            {...register('password')}
          />
          {errors.password && (
            <p className={style.form_error}>{errors.password.message}</p>
          )}
        </div>
        {errors.root && (
          <p className={style.form_error}>{errors.root.message}</p>
        )}
        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.form_button}`}
        >
          Valider
        </button>
      </form>
    </div>
  );
};
