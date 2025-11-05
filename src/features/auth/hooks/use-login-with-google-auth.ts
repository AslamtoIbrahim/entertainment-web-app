import { useState } from "react";
import { loginWithGoogle } from "../auth.service";

export const useLoginWithGoogle = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const googleSubmit = () => {
    setPending(true);
    try {
      setTimeout(() => {
        loginWithGoogle();
        setPending(false);
      }, 500);
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  return { pending, error, googleSubmit };
};
