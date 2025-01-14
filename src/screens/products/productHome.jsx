import React, { useState } from 'react';
import { ProductsData } from '../../data/products';
import CardProducts from './cardProducts';
import Categories from '../../components/categories/categories';

export const ProductsHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');


  const filteredProducts =
    selectedCategory === 'Todos'
      ? ProductsData
      : ProductsData.filter(product => product.category === selectedCategory);

      return (
        <div className='py-10 px-6 flex flex-col'>
          <h2 className='text-3xl font-bold text-center py-14'>Productos Destacados</h2>
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-4'>
            {filteredProducts.slice(0, 5).map(producto => (
              <CardProducts {...producto} key={producto.id} />
            ))}
          </div>
          <a href='/productos' className='bg-sky-300 text-black py-2 px-4 mx-[43%] my-10 flex justify-center items-center text-center rounded-md'>Ver todos los productos</a>
        </div>
      );
      
};
