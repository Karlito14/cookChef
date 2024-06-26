class ApiRecipes {
  constructor(url) {
    this.url = url;
  }

  async postRecipes(data) {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
    const response = await fetch(this.url);
    const recipes = await response.json();
    return Array.isArray(recipes) ? recipes : [recipes];
  }
}

export default new ApiRecipes('https://restapi.fr/api/recettes');
