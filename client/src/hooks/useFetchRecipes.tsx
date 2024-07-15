import { useEffect, useState } from 'react';
import apiRecipes from '../api/api-recipes';
import { RecipeInterface } from '../types/types';

export const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeInterface[]>();
  const [response, setResponse] = useState<RecipeInterface[]>();
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

  return [[recipes && recipes, setRecipes ], response, loading];
};
