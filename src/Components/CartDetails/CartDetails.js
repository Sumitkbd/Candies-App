import React from 'react';

function CartDetails({ cartItems, onClose, onUpdateQuantity }) {
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.candy.price, 0);

  return (
    <div className="modal">
      <h2>Cart Items</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.candy.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ₹{item.quantity * item.candy.price}</p>
          <button onClick={() => onUpdateQuantity(item.candy, 1)}>+</button>
          <button onClick={() => onUpdateQuantity(item.candy, -1)}>-</button>
        </div>
      ))}
      <h3>Total Amount: ₹{totalAmount}</h3>
      <button onClick={onClose}>Close</button>
      <button>Order</button>
    </div>
  );
}

export default CartDetails;
