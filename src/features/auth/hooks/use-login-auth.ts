import { useState } from "react";
import { login } from "../auth.service";
import type { Login, AuthResponse } from "../utils/types";

export const useLogin = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [user, setUser] = useState<AuthResponse | null>(null);

  const submit = async (data: Login) => {
    setPending(true);
    try {
      const user = await login(data);
      setUser(user);
      return user;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setPending(false);
    }
  };

  return { user, error, pending, submit };
};
