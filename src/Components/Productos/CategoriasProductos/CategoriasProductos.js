import { useParams, Link } from "react-router-dom";
import { Button, Nav} from 'react-bootstrap';
import products from "../../../Data/Productos.json";

import './categoriasProductos.css';

function CategoryPage() {
  const { categoria } = useParams();

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoria.toLowerCase()
  );

  // Palabras conocidas que queremos separar
  const knownWords = ["profesionales", "grabados", "madera", "placas", "en"];

  const formatCategory = (word) => {
    let formatted = word;

    knownWords.forEach((kw) => {
      formatted = formatted.replace(
        new RegExp(kw, "gi"),
        (match) => " " + match
      );
    });

    // limpiar espacios extras y transformar
    formatted = formatted.trim().split(" ");

    return (
      formatted[0].charAt(0).toUpperCase() +
      formatted[0].slice(1).toLowerCase() +
      " " +
      formatted
        .slice(1)
        .map((w) => w.toLowerCase())
        .join(" ")
    ).trim();
  };

  return (
    <section className="categoriasProductos">
      <h2 className="titulo">{formatCategory(categoria)}</h2>

      <div className="container">
        {filtered.length > 0 ? (
          filtered.map((prod) => (
            <div className="containerCard" key={prod.id}>
              <div className="card">
                <img
                  src={prod.image}
                  className="img"
                  alt={prod.title}
                />
                <div className="containerData">
                  <h5 className="titulo">{prod.title}</h5>
                  {/* <p className="precio">${prod.price}</p> */}
  
                  <Button
                    as={Link}
                    to={`/producto/${prod.id}`}
                    className="boton-carrito"
                  >
                    Ver detalles
                  </Button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
