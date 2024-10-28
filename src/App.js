import React, { useState } from 'react';
import SellerInputForm from './Components/SellerInputForm/SellerInputForm';
import CandyList from './Components/CandyList/CandyList';
import Cart from './Components/Cart/Cart';
import CartDetails from './Components/CartDetails/CartDetails';


function App() {
  const [candies, setCandies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddCandy = (candy) => {
    setCandies([...candies, candy]);
  };

  const handleAddToCart = (candy, quantity) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.candy.name === candy.name);
      if (itemIndex > -1) {
        prevItems[itemIndex].quantity += quantity;
        return [...prevItems];
      } else {
        return [...prevItems, { candy, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (candy, quantityChange) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.candy.name === candy.name);
      if (itemIndex > -1) {
        const updatedQuantity = prevItems[itemIndex].quantity + quantityChange;

        if (updatedQuantity <= 0) {
          return prevItems.filter((_, index) => index !== itemIndex);
        } else {
          const updatedItems = [...prevItems];
          updatedItems[itemIndex].quantity = updatedQuantity;
          return updatedItems;
        }
      }
      return prevItems; 
    });
  };

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div>
      <h1>Candy Store</h1>
      <div className="form-cart-container">
        <SellerInputForm onAddCandy={handleAddCandy} />
        <Cart cartItems={cartItems} onToggleCart={toggleCart} />
      </div>
      <CandyList candies={candies} onAddToCart={handleAddToCart} />
      {showCart && <CartDetails cartItems={cartItems} onClose={toggleCart} onUpdateQuantity={handleUpdateQuantity} />}
    </div>
  );
}

export default App;