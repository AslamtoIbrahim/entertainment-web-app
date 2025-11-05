import { useEffect, useState } from "react";
import { getSession } from "../auth.service";
import type { Session } from "../utils/types";

type SessionProp = {
  onSuccess?: (result: Session) => void;
  onError: (error: unknown) => void;
};
export const useSession = ({ onSuccess, onError }: SessionProp) => {
  const [pending, setpending] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const sess = await getSession();
        setSession(sess);
        onSuccess?.(sess);
      } catch (error: unknown) {
        onError?.(error);
      } finally {
        setpending(false);
      }
    };

    fetch();
  }, []);

  return { session, pending };
};
