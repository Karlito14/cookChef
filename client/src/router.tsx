import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import apiUsers from './api/api-users';
import { Signup } from './pages/Signup/Signup';
import { Signin } from './pages/Signin/Signin';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import apiRecipes from './api/api-recipes';
import { AdminRecipesList } from './pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList';
import { AdminRecipesForm } from './pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm';
import { AdminRecipes } from './pages/Admin/pages/AdminRecipes/AdminRecipes';
import { Admin } from './pages/Admin/Admin';
import { AdminUsers } from './pages/Admin/pages/AdminUsers/AdminUsers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: async () => apiUsers.getUser(),
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
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
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
                loader: async ({ params: { id } }) => {if (id) return apiRecipes.getRecipe(id)},
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
