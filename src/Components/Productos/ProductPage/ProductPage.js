import { useParams } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import products from "../../../Data/Productos.json";

export default function ProductPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
