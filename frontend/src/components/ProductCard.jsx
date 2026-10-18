import { Link } from "react-router-dom";

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{formatRupiah(product.price)}</p>
        <p className="stock">Stok: {product.stock}</p>

        <Link to={`/products/${product._id}`} className="button">
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
