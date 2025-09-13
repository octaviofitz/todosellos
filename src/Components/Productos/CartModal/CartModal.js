// Archivo: CartModal.js

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useCart } from "../../../Context/CartContext";

// 1. AHORA RECIBIMOS 'show' Y 'handleClose' COMO PROPS
export default function CartModal({ show, handleClose }) {
  const { cart = [], removeFromCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("efectivo");
  
  // 2. HEMOS ELIMINADO EL 'useState' LOCAL PARA LA VISIBILIDAD

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    // ... (tu lógica para enviar el pedido a WhatsApp se mantiene igual)
    const items = cart.map(
        (item) => `- ${item.title}: ${item.quantity} x $${item.price.toFixed(2)} = $${(item.price * item.quantity).toFixed(2)}`
      ).join("\n");

    const message = `*Pedido:* ${name}\n*Contacto:* ${phone}\n*Método de pago:* ${payment}\n\n-------------------------------\n\n*Productos*\n${items}\n\nART.: ${cart.length}   TOTAL: $${total}\n\n-------------------------------\n\n*FINAL A ABONAR:* $${total}`;

    const url = `https://wa.me/5491159300042?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    // 3. HEMOS QUITADO EL BOTÓN VERDE DE AQUÍ
    <Modal show={show} onHide={handleClose}> {/* Usamos las props */}
      <Modal.Header closeButton>
        <Modal.Title>Tu carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            {/* ... (todo el cuerpo del modal se mantiene exactamente igual) ... */}
             {/* Lista de productos */}
             <div className="space-y-3">
               {cart.map((item) => (
                 <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", }}>
                   <span style={{ flex: 1, wordBreak: "break-word" }}>
                     {item.title} x {item.quantity}
                   </span>
                   <span>
                     <strong>${item.price * item.quantity}</strong>
                   </span>
                   <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                     Quitar
                   </Button>
                 </div>
               ))}
             </div>
             <hr />
             {/* Total */}
             <div style={{ textAlign: "right", fontWeight: "bold" }}>
               Total: ${total}
             </div>
             {/* Formulario */}
             <div className="mt-3">
               <label className="form-label">Tu nombre</label>
               <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresá tu nombre" />
             </div>
             <div className="mt-3">
               <label className="form-label">Número de contacto</label>
               <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ej: 1123456789" />
             </div>
             <div className="mt-3">
               <label className="form-label">Método de pago</label>
               <select className="form-select" value={payment} onChange={(e) => setPayment(e.target.value)}>
                 <option value="efectivo">Efectivo</option>
                 <option value="transferencia">Transferencia</option>
                 <option value="tarjeta">Tarjeta de crédito/débito</option>
               </select>
             </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> {/* Usamos la prop */}
          Cerrar
        </Button>
        {cart.length > 0 && (
          <Button variant="success" onClick={handleOrder} disabled={!name || !phone}>
            Realizar pedido
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}