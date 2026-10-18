
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="brand">
          LUNÉ BEAUTY
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/products">Produk</NavLink>

          {isAuthenticated ? (
            <>
              <NavLink to="/account">
                {user?.name || "Akun"}
              </NavLink>

              <button
                type="button"
                className="nav-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Daftar</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
