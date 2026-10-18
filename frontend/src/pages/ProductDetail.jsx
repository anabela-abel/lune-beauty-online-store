import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api";

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Produk tidak ditemukan.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <p className="status">Memuat detail produk...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-section">
        <div className="container">
          <p className="error">{error}</p>
          <Link to="/products" className="button">
            Kembali ke Produk
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <Link to="/products" className="back-link">
          ← Kembali ke Daftar Produk
        </Link>

        <div className="detail-card">
          <img
            src={product.image}
            alt={product.name}
            className="detail-image"
          />

          <div className="detail-info">
            <p className="eyebrow">PRODUCT DETAIL</p>
            <h1>{product.name}</h1>
            <p className="detail-price">{formatRupiah(product.price)}</p>
            <p className="detail-description">{product.description}</p>

            <div className="stock-box">
              <strong>Stok tersedia</strong>
              <span>{product.stock} unit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
