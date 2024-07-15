import { RecipeInterface } from '../types/types';

class ApiRecipes {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async postRecipes(data: { title: string; image: string; liked?: boolean } | { title: string; image: string; liked?: boolean }[]) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  async updateRecipe(data: Partial<RecipeInterface>, id: string) {
    await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getRecipes(): Promise<RecipeInterface[]> {
    const response = await fetch(`${this.url}?sort=createdAt:-1`);
    const recipes = await response.json();
    return Array.isArray(recipes) ? recipes : [recipes];
  }

  async getRecipe(id: string): Promise<RecipeInterface> {
    const response = await fetch(`${this.url}/${id}`);
    const recipe = await response.json();
    return recipe;
  }

  async deleteRecipe(id: string) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    console.log(response);
  }
}

export default new ApiRecipes('https://restapi.fr/api/recettes');
