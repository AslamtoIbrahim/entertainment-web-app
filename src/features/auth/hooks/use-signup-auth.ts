import { useState } from "react";
import { signUp } from "../auth.service";
import type { SignUp, AuthResponse } from "../utils/types";

export const useSignUp = () => {
  const [pending, setpending] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [user, setUser] = useState<AuthResponse | null>(null);

  const submit = async (data: SignUp) => {
    setpending(true);
    try {
      const result = await signUp(data);
      setUser(result);
      return result;
    } catch (error: unknown) {
      setError(error);
      throw error;
    } finally {
      setpending(false);
    }
  };

  return { submit, user, error, pending };
};
