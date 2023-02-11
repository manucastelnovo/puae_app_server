type password = string | number;

export interface User {
  userId: number;
  name: string;
  email: string;
  password: password;
}

export interface CreateUser extends Omit<User, 'userId'> {}

export interface UpdateUser extends Partial<User> {}
