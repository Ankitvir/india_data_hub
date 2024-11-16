import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center' }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>{product.price}</p>
            <button style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
