import React, { useState } from 'react';

const SellerInputForm = ({ onAddCandy }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the function to add candy (you'll implement this)
        onAddCandy({ name, description, price });
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Candy Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Add Candy</button>
        </form>
    );
};

export default SellerInputForm;
