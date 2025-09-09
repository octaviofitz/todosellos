import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useCart } from "../../../Context/CartContext";

export default function CartModal() {
  const { cart = [], removeFromCart } = useCart();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("transferencia");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    const items = cart
      .map((item) => `${item.title} x ${item.quantity} - $${item.price * item.quantity}`)
      .join("\n");
    const message = `Hola! Quiero realizar un pedido:\n\n${items}\n\nTotal: $${total}\n\nNombre: ${name}\nMétodo de pago: ${payment}`;
    const url = `https://wa.me/5491159300042?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Botón de abrir carrito */}
      <Button variant="success" onClick={handleShow}>
        🛒 Carrito ({cart.length})
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              {/* Productos */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ flex: 1, wordBreak: "break-word" }}>
                      {item.title} x {item.quantity}
                    </span>
                    <span>
                      <strong>${item.price * item.quantity}</strong>
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
              <div style={{ textAlign: "right", fontWeight: "bold" }}>
                Total: ${total}
              </div>

              {/* Nombre */}
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

              {/* Método de pago */}
              <div className="mt-3">
                <label className="form-label">Método de pago</label>
                <select
                  className="form-select"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                >
                  <option value="transferencia">Transferencia</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta de crédito/débito</option>
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
            <Button variant="success" onClick={handleOrder}>
              Realizar pedido
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
