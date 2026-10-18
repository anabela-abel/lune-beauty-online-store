
import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { user, logout } = useAuth();

  return (
    <section className="page-section">
      <div className="container">
        <div className="account-card">
          <p className="eyebrow">MY ACCOUNT</p>
          <h1>Selamat datang, {user?.name || "Pengguna"}!</h1>
          <p>
            Kamu berhasil login ke akun LUNÉ BEAUTY.
          </p>

          <div className="account-details">
            <p>
              <strong>Nama:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>

          <button
            className="button"
            onClick={logout}
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
