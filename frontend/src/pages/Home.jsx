import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <p className="eyebrow">LUNÉ BEAUTY</p>

          <h1>
            Beauty made
            <br />
            for you.
          </h1>

          <p className="hero-description">
            Temukan produk kecantikan pilihan untuk melengkapi
            rutinitas dan gaya kamu.
          </p>

          <Link to="/products" className="hero-button">
            Lihat Produk
          </Link>
        </div>

        <div className="hero-card">
          <div className="hero-icon">♡</div>

          <p className="hero-card-title">LUNÉ BEAUTY</p>

          <p className="hero-card-text">
            Beauty essentials for your everyday glow.
          </p>
        </div>
      </div>
    </main>
  );
}