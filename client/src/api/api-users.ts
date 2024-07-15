import { UserInterface } from '../types/types';

class ApiUsers {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async createUser(newUser: UserInterface) {
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
      throw new Error("Erreur lors de la création de l'utilisateur");
    }
  }

  async getUser(): Promise<UserInterface> {
    const response = await fetch(`${this.url}/auth/current`);
    return response.json();
  }

  async signin(user: UserInterface) {
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
      throw new Error('Erreur lors de la connexion');
    }
  }

  async signout() {
    await fetch(`${this.url}/auth`, {
      method: 'DELETE',
    });
  }
}

export default new ApiUsers('/api');
