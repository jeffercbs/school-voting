import { SessionResponse } from "./session";

export interface LoginInput {
  username: string;
  password: string;
  device: string;
}
export interface LoginResponse {
  session: SessionResponse;
  token: string;
}
