import React from 'react';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['Todos', 'Nike', 'Jordan', 'Adidas', 'Puma'];

  return (
    <div className="flex flex-row justify-center items-center gap-4 pb-6">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`py-1 px-2 rounded-md ${
            selectedCategory === category ? 'bg-sky-300 text-black font-semibold' : 'bg-black text-white font-semibold'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
