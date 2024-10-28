import React from 'react';

function CandyList({ candies, onAddToCart }) {
  return (
    <div>
      {candies.map((candy, index) => (
      <div key={index} className="candy-item"> {/* Apply class here */}
        <h3>{candy.name}</h3>
        <p>{candy.description}</p>
        <p>Price: ₹{candy.price}</p>
        <button onClick={() => onAddToCart(candy, 1)}>Buy 1</button>
        <button onClick={() => onAddToCart(candy, 2)}>Buy 2</button>
        <button onClick={() => onAddToCart(candy, 3)}>Buy 3</button>
      </div>
      ))}
    </div>
  );
}

export default CandyList;
