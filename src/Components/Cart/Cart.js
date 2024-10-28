import React from 'react';

function Cart({ cartItems, onToggleCart }) {
  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <button onClick={onToggleCart}>Cart ({cartTotal})</button>
    </div>
  );
}

export default Cart;
