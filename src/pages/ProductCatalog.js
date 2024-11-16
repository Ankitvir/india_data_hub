import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductCatalog = () => {
    // Sample product data
    const products = [
        { id: 1, name: 'Product 1', price: '$29.99', image: '/path/to/image1.jpg' },
        { id: 2, name: 'Product 2', price: '$39.99', image: '/path/to/image2.jpg' },
        { id: 3, name: 'Product 3', price: '$19.99', image: '/path/to/image3.jpg' },
        { id: 4, name: 'Product 4', price: '$49.99', image: '/path/to/image4.jpg' },
        // Add more products as needed
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Product Catalog</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
