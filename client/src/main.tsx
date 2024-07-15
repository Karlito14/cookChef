import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { router } from './router.js';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
