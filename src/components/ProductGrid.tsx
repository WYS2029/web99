import { ProductCard } from '@/components/ProductCard';
import { featuredProducts } from '@/mocks/productData';
import { productCategories } from '@/mocks/productData';

interface ProductGridProps {
  categoryId?: number | null;
}

export function ProductGrid({ categoryId = null }: ProductGridProps) {
  // Filter products by category if specified
  const filteredProducts = categoryId 
    ? featuredProducts.filter(product => product.category === productCategories.find(cat => cat.id === categoryId)?.name)
    : featuredProducts;
  
  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-xl">
        <i class="fa-solid fa-box-open text-5xl text-gray-300 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">暂无产品</h3>
        <p className="text-gray-500">该分类下暂无产品数据</p>
      </div>
    );
  }
  
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
}