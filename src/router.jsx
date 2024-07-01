import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import {  Admin } from './pages/Admin/Admin';
import { AdminRecipes } from './pages/Admin/pages/AdminRecipes/AdminRecipes';
import { AdminUsers } from './pages/Admin/pages/AdminUsers/AdminUsers';
import { AdminRecipesList } from './pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList';
import { AdminRecipesForm } from './pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/admin',
        element: <Admin />,
        children: [
          {
            path: 'recipes',
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect('list'),
              },
              {
                path: 'list',
                element: <AdminRecipesList />
              },
              {
                path: 'new',
                element: <AdminRecipesForm />
              },
              {
                path: 'edit/:id',
                element: <AdminRecipesForm />
              }
            ]
          },
          {
            path: 'users',
            element: <AdminUsers />,
          },
          {
            index: true,
            loader: async () => redirect('recipes'),
          },
        ],
      },
    ],
  },
]);
