import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-section">
      <div className="container empty">
        <h1>404</h1>
        <p>Halaman yang kamu cari tidak ditemukan.</p>
        <Link to="/" className="button">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
