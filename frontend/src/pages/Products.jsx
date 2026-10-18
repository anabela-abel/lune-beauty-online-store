import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(
          "Data produk tidak dapat dimuat. Pastikan backend dan MongoDB sedang berjalan."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR PRODUCTS</p>
            <h1>Daftar Produk</h1>
          </div>
          <p>{products.length} produk</p>
        </div>

        {loading && <p className="status">Memuat produk...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <div className="empty">
            <h2>Belum ada produk</h2>
            <p>Tambahkan produk melalui endpoint POST API.</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
