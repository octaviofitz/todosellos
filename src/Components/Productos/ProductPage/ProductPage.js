import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import { Button } from "react-bootstrap";
import products from "../../../Data/Productos.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./productPage.css";

export default function ProductPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado.</p>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Producto añadido al carrito", {
      autoClose: 2200,
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      /* theme: "colored", */
      style:{
        backgroundColor: '#eff3f3',
        color: 'black'
      }
    });
  };

  return (
    <article>
      {/* Contenedor del botón atrás */}
      <div className="contenedor-botonatras">
        <Button
          variant="link"
          className="botonatras"
          onClick={() => navigate(-1)}
        >
          ← Volver atrás
        </Button>
      </div>

      <div className="productPage">
        <h2 className="titulo">{product.title}</h2>

        <img src={product.image} alt={product.title} className="img" />

        <p className="precio">${product.price.toLocaleString("es-AR")}</p>

        <p className="formaPago">
          Se puede abonar por transferencia, efectivo y tarjeta
        </p>

        <Button
          variant="secondary"
          size="lg"
          className="boton-carrito"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </Button>

        <p className="caracteristicas">Características:</p>
        <p className="descripcion">{product.description}</p>
      </div>

      {/* Contenedor de toasts (colocado aquí para que el componente sea autosuficiente).
          Si ya tenés uno global en App.jsx, podés quitar este para evitar duplicados. */}
      <ToastContainer />
    </article>
  );
}
