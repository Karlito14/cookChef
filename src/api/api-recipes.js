class ApiRecipes {
  constructor(url) {
    this.url = url;
  }

  async postRecipes(data) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  async updateRecipe(data, id) {
    await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getRecipes() {
    const response = await fetch(`${this.url}?sort=createdAt:-1`);
    const recipes = await response.json();
    return Array.isArray(recipes) ? recipes : [recipes];
  }

  async getRecipe(id) {
    const response = await fetch(`${this.url}/${id}`);
    const recipe = await response.json();
    return recipe;
  }

  async deleteRecipe(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    console.log(response);
  }
}

export default new ApiRecipes('https://restapi.fr/api/recettes');
