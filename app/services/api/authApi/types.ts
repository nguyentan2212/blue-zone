import { GeneralApiProblem } from '../api-problem'

export interface User {
  id: number,
  username: string,
  email: string,
  fullName: string
}

export interface LoginRequestBody {
  identifer: string,
  password: string
}

export type LoginResponse =
  | {
    kind: 'ok';
    result: User;
  }
  | GeneralApiProblem;