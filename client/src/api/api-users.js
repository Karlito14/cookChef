class ApiUsers {
  constructor(url) {
    this.url = url;
  }

  async createUser(newUser) {
    const response = await fetch(`${this.url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const body = await response.json();
    if (response.ok) {
      return body;
    } else {
      if (body) {
        throw body;
      } else {
        throw new Error("Erreur lors de la création de l'utilisateur");
      }
    }
  }

  async getUser() {
    const response = await fetch(`${this.url}/auth/current`);
    return response.json();
  }

  async signin(user) {
    const response = await fetch(`${this.url}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const body = await response.json();
    if (response.ok) {
      return body;
    } else {
      if (body) {
        throw body;
      } else {
        throw new Error('Erreur lors de la connexion');
      }
    }
  }

  async signout() {
    await fetch(`${this.url}/auth`, {
      method: 'DELETE',
    });
  }
}

export default new ApiUsers('/api');
