import React, { useState, useEffect } from 'react';
import api from '../../api/index';
import CardProducts from './cardProducts';
import Categories from '../../components/categories/categories';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div className='py-10 px-6'>
      <h2 className='text-3xl font-bold text-center py-14'>Productos</h2>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5'>
        {filteredProducts.map(producto => (
          <CardProducts
            id={producto.id}
            name={producto.name}
            price={producto.price}
            image={producto.image}
          />
        ))}
      </div>
    </div>
  );
};
