import { useParams, Link } from "react-router-dom";
import products from "../../../Data/Productos.json";

function CategoryPage() {
  const { categoria } = useParams();

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoria.toLowerCase()
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Productos de {categoria}</h2>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={prod.image}
                alt={prod.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  marginBottom: "10px",
                }}
              />
              <h3>{prod.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {prod.description}
              </p>
              <p style={{ fontWeight: "bold", margin: "10px 0" }}>${prod.price}</p>

              <Link to={`/producto/${prod.id}`}>
                <button
                  style={{
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Ver
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
  