import { User } from "../entities/User";

interface IUserFormData {
  name: string;
  email: string;
}

export interface IUserRepository {
  find(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<void>;
  update(user: User, payload: IUserFormData): Promise<User>;
  delete(user: User): Promise<void>;
}
