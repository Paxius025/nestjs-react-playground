import { useState } from "react";
import { useSignIn } from "../useSignIn";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const { handleSignIn, loading, error } = useSignIn();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignIn(usernameOrEmail, password);
      navigate("/dashboard");
    } catch {
      // error handled ใน hook แล้ว
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="usernameOrEmail">Username or Email</label>
        <input
          id="usernameOrEmail"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          type="text"
          placeholder="Username or email"
          title="Username or email"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          title="Password"
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
