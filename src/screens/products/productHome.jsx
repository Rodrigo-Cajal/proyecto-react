import React, { useState, useEffect } from 'react';
import api from '../../api/index';
import CardProducts from './cardProducts';
import Categories from '../../components/categories/categories';

export const ProductsHome = () => {
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
        <div className='py-10 px-6 flex flex-col'>
          <h2 className='text-3xl font-bold text-center py-14'>Productos Destacados</h2>
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-4'>
          {filteredProducts.map(producto => (
          <CardProducts
          key={producto.id}  
            id={producto.id}
            name={producto.name}
            price={producto.price}
            image={producto.image}
          />
          
        ) )}
          </div>
          <a href='/products' className='bg-sky-300 text-black py-2 px-4 mx-[30%] lg:mx-[43%] my-10 flex justify-center items-center text-center rounded-md'>Ver todos los productos</a>
        </div>
      );
      
};
