// /api/fetchProducts.js

export async function fetchProducts() {
    // Simulating fetching products from an API or database
    const products = [
      { 
        id: '1',
        slug: 'product-1', 
        name: 'Product 1', 
        description: 'Elevate your wardrobe with Enigma Full-Sleeve Tees, designed for both comfort and style. Made from premium, soft fabric, these tees offer a perfect blend of breathability and warmth, making them ideal for year-round wear', 
        price: 29.99, 
        image: 'https://thehangerpakistan.com/cdn/shop/files/52C8CA93-09A4-4A0B-9FAC-4153A16F13F5.jpg?v=1732476980&width=500' 
      },
      { 
        slug: 'product-2', 
        name: 'Product 2', 
        description: 'Elevate your wardrobe with Enigma Full-Sleeve Tees, designed for both comfort and style. Made from premium, soft fabric, these tees offer a perfect blend of breathability and warmth, making them ideal for year-round wear', 
        price: 39.99, 
        image: 'https://thehangerpakistan.com/cdn/shop/files/IMG-1561.jpg?v=1733239379&width=500' 
      },
      // Add more products as needed
    ];
  
    // You could replace this with an API call like:
    // const response = await fetch('https://api.example.com/products');
    // const products = await response.json();
  
    return products;
  }
  