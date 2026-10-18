
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/account" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      setLoading(true);

      await login(email, password);

      navigate(location.state?.from?.pathname || "/account", {
        replace: true
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login gagal. Periksa email dan password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section">
      <div className="container auth-container">
        <div className="auth-card">
          <p className="eyebrow">WELCOME BACK</p>
          <h1>Login</h1>
          <p className="auth-description">
            Masuk ke akun LUNÉ BEAUTY kamu.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete="current-password"
              required
            />

            {error && <p className="auth-error">{error}</p>}

            <button
              className="button auth-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </form>

          <p className="auth-switch">
            Belum punya akun? <Link to="/register">Daftar</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
