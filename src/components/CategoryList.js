import React from 'react';

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mb-4">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded hover:bg-orange-400 ${selectedCategory === category ? 'bg-orange-400 text-white' : 'bg-yellow-200 text-white-500'} mt-2 mb-2`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
