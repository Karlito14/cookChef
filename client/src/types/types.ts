export interface RecipeInterface {
  title: string;
  image: string;
  liked: boolean;
  _id?: string;
}

export interface UserInterface {
  email: string;
  password: string;
  name?: string;
}

export interface ProviderInterface {
  user: UserInterface |unknown;
  login: (data: UserInterface) => Promise<void>;
  logout: () => Promise<void>;
}
