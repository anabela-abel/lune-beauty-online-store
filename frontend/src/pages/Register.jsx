
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    try {
      setLoading(true);

      await register(name, email, password);

      setSuccess("Registrasi berhasil. Silakan login.");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registrasi gagal. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section">
      <div className="container auth-container">
        <div className="auth-card">
          <p className="eyebrow">JOIN LUNÉ BEAUTY</p>
          <h1>Buat Akun</h1>
          <p className="auth-description">
            Daftar untuk membuat akun LUNÉ BEAUTY.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="name">Nama</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              required
            />

            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />

            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete="new-password"
              minLength={8}
              required
            />

            {error && <p className="auth-error">{error}</p>}
            {success && (
              <p className="auth-success">{success}</p>
            )}

            <button
              className="button auth-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </form>

          <p className="auth-switch">
            Sudah punya akun? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
