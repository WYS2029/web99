import { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { ProductFilter } from '@/components/ProductFilter';
import { ProductGrid } from '@/components/ProductGrid';

export default function ProductCenter() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };
  
  return (
    <div className="bg-gray-50 py-12">
      {/* Product Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">产品中心</h1>
            <p className="text-xl text-blue-100">
              探索我们的创新产品系列，为您的业务提供高效、可靠的解决方案
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full"></div>
        </div>
      </section>
      
      {/* Product List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="探索产品" 
            subtitle="我们提供全面的工业自动化产品和解决方案，满足不同行业的需求" 
            center={true} 
          />
          
          <div className="mt-12">
            <ProductFilter onCategoryChange={handleCategoryChange} />
            <ProductGrid categoryId={selectedCategory} />
          </div>
        </div>
      </section>
      
      {/* Product Inquiry Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">对我们的产品感兴趣？</h2>
            <p className="text-lg text-gray-600 mb-8">
              填写咨询表单，我们的专业团队将尽快与您联系，为您提供详细的产品信息和解决方案
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              提交产品咨询
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}