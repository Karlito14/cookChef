import { AdminNav } from './components/AdminNav/AdminNav';
import style from './style.module.scss';
import { Outlet } from 'react-router-dom';

export const Admin = () => {
  return (
    <div className={style.container}>
      <AdminNav />
      <Outlet />
    </div>
  );
};
