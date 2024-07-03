class ApiUsers {
  constructor(url) {
    this.url = url;
  }

  async createUser(newUser) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const body = await response.json();
    // if (response.ok) {
    //   return body;
    // } else {
    //   if (body) {
    //     throw body;
    //   } else {
    //     throw new Error("Erreur lors de la création de l'utilisateur");
    //   }
    // }
  }
}

export default new ApiUsers('/api/users');
