import axios from "axios";
import { BASE_API } from "../../shared/baseAPI";

const signIn = async (usernameOrEmail: string, password: string) => {
  const response = await axios.post(`${BASE_API}/auth/signin`, {
    usernameOrEmail,
    password,
  });
  return response.data;
};

export { signIn };
