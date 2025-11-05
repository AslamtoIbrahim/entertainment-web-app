import { useState } from "react";
import { logout } from "../auth.service";

export const useLogout = () => {
  const [pending, setPending] = useState(false);
  const [isLogedOut, setisLogedOut] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<unknown | null>(null);

  const signout = async () => {
    setPending(true);
    try {
      const result = await logout();
      if (result) {
        setMessage(result.message);
        setisLogedOut(true);
      }
      return result;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setPending(false);
    }
  };

  return { signout, pending, isLogedOut, message, error };
};
