// Archivo: CartModal.js

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useCart } from "../../../Context/CartContext";
import "./cartModal.css"; // ⬅️ Importa los estilos separados

// Función utilitaria para formatear montos
const formatCurrency = (value) =>
  value.toLocaleString("es-AR", { minimumFractionDigits: 0 });

export default function CartModal({ show, handleClose }) {
  const { cart = [], removeFromCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("efectivo");

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    const items = cart
      .map(
        (item) =>
          `- ${item.title}: ${item.quantity} x $${formatCurrency(
            item.price
          )} = $${formatCurrency(item.price * item.quantity)}`
      )
      .join("\n");

    const message = `*Pedido:* ${name}\n*Contacto:* ${phone}\n*Método de pago:* ${payment}\n\n-------------------------------\n\n*Productos*\n${items}\n\nART.: ${
      cart.length
    }   TOTAL: $${formatCurrency(
      total
    )}\n\n-------------------------------\n\n*FINAL A ABONAR:* $${formatCurrency(
      total
    )}`;

    const url = `https://wa.me/541150381057?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {/* Usamos las props */}
      <Modal.Header closeButton>
        <Modal.Title>Tu carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span className="cart-item-title">
                    {item.title} x {item.quantity}
                  </span>
                  <span className="cart-item-subtotal">
                    <strong>
                      ${formatCurrency(item.price * item.quantity)}
                    </strong>
                  </span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Quitar
                  </Button>
                </div>
              ))}
            </div>

            <hr />

            {/* Total */}
            <div className="cart-total">Total: ${formatCurrency(total)}</div>

            {/* Formulario */}
            <div className="mt-3">
              <label className="form-label">Tu nombre</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresá tu nombre"
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Número de contacto</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej: 1123456789"
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Método de pago</label>
              <select
                className="form-select"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="Efectivo">Efectivo</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Tarjeta">Tarjeta de crédito/débito</option>
              </select>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        {cart.length > 0 && (
          <Button
            variant="success"
            onClick={handleOrder}
            disabled={!name || !phone}
          >
            Realizar pedido
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
