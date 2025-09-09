import { useState } from 'react';
import { productCategories } from '@/mocks/productData';

interface ProductFilterProps {
  onCategoryChange: (categoryId: number | null) => void;
}

export function ProductFilter({ onCategoryChange }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
  const handleCategoryClick = (categoryId: number) => {
    const newCategory = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">产品分类</h3>
      
      <div className="flex flex-wrap gap-3">
        <button
          key="all"
          onClick={() => {
            setSelectedCategory(null);
            onCategoryChange(null);
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          全部产品
        </button>
        
        {productCategories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                
            }`}
          >
            <i class={`fa-solid ${category.icon} mr-2`}></i>
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索产品..." 
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>
    </div>
  );
}