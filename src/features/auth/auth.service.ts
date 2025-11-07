import axios from "axios";
import type { AuthResponse, Login, Session, SignUp } from "./utils/types";
import { BACKEND_URL } from "@/shared/lib/utils";



export const signUp = async (data: SignUp) => {
  const res = await axios.post<AuthResponse>(`${BACKEND_URL}/auth/signup`, data, {
    withCredentials: true,
  });
  return res.data;
};

export const login = async (data: Login) => {
  const res = await axios.post<AuthResponse>(`${BACKEND_URL}/auth/login`, data, {
    withCredentials: true,
  });
  return res.data;
};

export const logout = async () => {
  const res = await axios.post<{ message: string }>(
    `${BACKEND_URL}/auth/logout`,
    {},
    {
      withCredentials: true,
    },
  );
  return res.data;
};

export const getSession = async () => {
  const res = await axios.get<Session>(`${BACKEND_URL}/auth/profile`, {
    withCredentials: true,
  });
  return res.data;
};

export const loginWithGoogle = () => {
  window.location.href = `${BACKEND_URL}/auth/google`;
};
