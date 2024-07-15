import { AdminNav } from './components/AdminNav/AdminNav';
import style from './style.module.scss';
import { Outlet, useLocation } from 'react-router-dom';

export const Admin = () => {
  const { key } = useLocation();

  return (
    <div className={style.container}>
      <AdminNav />
      <Outlet key={key} />
    </div>
  );
};
