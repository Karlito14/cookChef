import { useEffect, useState } from 'react';
import apiRecipes from '../api/api-recipes';

export const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await apiRecipes.getRecipes();
        setRecipes(response);
        setResponse(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getRecipes();
  }, []);

  return [recipes, response, loading, setRecipes];
};
