export type UserResponseAPI = {
  id: number;
  nome: string;
  login: string;
  email: string;
};

export type UserLogin = {
  senha: string;
  email: string;
};

export type CreateUserAPI = {
  nome: string;
  login: string;
  email: string;
  senha: string;
};

export type UpdateUserAPI = {
  id: string;
} & CreateUserAPI;

export type CreateUserResponseAPI = {
  id: number;
  status: number;
  menssage: string;
};

export type DeleteUserResponseAPI = CreateUserResponseAPI;
export type UpdateUserResponseAPI = CreateUserResponseAPI;
