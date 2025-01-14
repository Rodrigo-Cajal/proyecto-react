import React, { useState } from 'react';
import { ProductsData } from '../../data/products';
import CardProducts from './cardProducts';
import Categories from '../../components/categories/categories';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');


  const filteredProducts =
    selectedCategory === 'Todos'
      ? ProductsData
      : ProductsData.filter(product => product.category === selectedCategory);

  return (
    <div className='py-10 px-6'>
      <h2 className='text-3xl font-bold text-center py-14'>Productos</h2>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5'>
        {filteredProducts.map(producto => (
          <CardProducts {...producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};
