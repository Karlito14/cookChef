import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const schema = yup.object({
  email: yup
    .string()
    .email('Veuillez renseigner une adresse mail valide')
    .required('Veuillez renseigner votre email'),
  password: yup.string().required('Veuillez renseigner votre mot de passe'),
});

export const FormSignin = () => {
  const { login } = useContext(AuthContext);

  const defaultValues = {
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

  const onSubmit = async (data) => {
    clearErrors();

    try {
      await login(data);
    } catch (message) {
      setError('generic', { type: 'generic', message });
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.form__title}>Connexion</h2>
        <div className={style.form__content}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
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
            name="password"
            id="password"
            {...register('password')}
          />
          {errors.password && (
            <p className={style.form_error}>{errors.password.message}</p>
          )}
        </div>
        {errors.generic && (
          <p className={style.form_error}>{errors.generic.message}</p>
        )}
        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.form_button}`}
        >
          Connexion
        </button>
      </form>
    </div>
  );
};
