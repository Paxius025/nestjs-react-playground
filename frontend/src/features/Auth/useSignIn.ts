import { useState } from "react";
import { signIn } from "../Auth/auth.services";
import axios from "axios";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (usernameOrEmail: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await signIn(usernameOrEmail, password);
      return data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An unexpected error occurred");
      } else {
        setError("An unexpected error occurred");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { handleSignIn, loading, error };
};

export { useSignIn };
