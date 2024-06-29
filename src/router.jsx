import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { AddRecipePage } from './pages/AddRecipePage/AddRecipePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/addRecipe',
        element: <AddRecipePage />,
      },
    ],
  },
]);
