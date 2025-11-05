import axios from "axios";
import type { AuthResponse, Login, Session, SignUp } from "./utils/types";

const URL = "http://localhost:3000/auth";

export const signUp = async (data: SignUp) => {
  const res = await axios.post<AuthResponse>(`${URL}/signup`, data, {
    withCredentials: true,
  });
  return res.data;
};

export const login = async (data: Login) => {
  const res = await axios.post<AuthResponse>(`${URL}/login`, data, {
    withCredentials: true,
  });
  return res.data;
};

export const logout = async () => {
  const res = await axios.post<{ message: string }>(
    `${URL}/logout`,
    {},
    {
      withCredentials: true,
    },
  );
  return res.data;
};

export const getSession = async () => {
  const res = await axios.get<Session>(`${URL}/profile`, {
    withCredentials: true,
  });
  return res.data;
};

export const loginWithGoogle = () => {
  window.location.href = `${URL}/google`;
};
