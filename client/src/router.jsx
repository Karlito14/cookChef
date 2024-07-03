import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { Admin } from './pages/Admin/Admin';
import { AdminRecipes } from './pages/Admin/pages/AdminRecipes/AdminRecipes';
import { AdminUsers } from './pages/Admin/pages/AdminUsers/AdminUsers';
import { AdminRecipesList } from './pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList';
import { AdminRecipesForm } from './pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm';
import apiRecipes from './api/api-recipes';
import { Signup } from './pages/Signup/Signup';
import { Signin } from './pages/Signin/Signin';

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
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
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
                element: <AdminRecipesList />,
              },
              {
                path: 'new',
                element: <AdminRecipesForm />,
              },
              {
                path: 'edit/:id',
                loader: async ({ params: { id } }) => apiRecipes.getRecipe(id),
                element: <AdminRecipesForm />,
              },
            ],
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
