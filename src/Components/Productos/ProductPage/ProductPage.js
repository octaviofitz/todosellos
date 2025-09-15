import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import { Button } from 'react-bootstrap';
import products from "../../../Data/Productos.json";

import './productPage.css';

export default function ProductPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado.</p>;

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
     <img
       src={product.image}
       alt={product.title}
       className="img"
     />
     <p className="precio">
       ${product.price.toLocaleString("es-AR")}
     </p>
    
     <Button 
       variant="secondary" 
       size="lg" 
       className='boton-carrito' 
       onClick={() => addToCart(product)}
     >
       Agregar al carrito
     </Button>

     <p className="formaPago">Se puede abonar por transferencia, efectivo y tarjeta</p>
    
     <p className="descripcion">{product.description}</p>
   </div>
      
    </article>

   
  );
}
