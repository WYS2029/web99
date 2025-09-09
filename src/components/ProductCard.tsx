import { Link } from 'react-router-dom';
import { featuredProducts } from '@/mocks/productData';

interface ProductCardProps {
  product: typeof featuredProducts[0];
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
          {product.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        
        <ul className="space-y-1 mb-3 text-xs">
          {product.features.slice(0, Math.min(2, product.features.length)).map((feature, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <i class="fa-solid fa-check text-blue-500 mt-1 mr-2 text-xs"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={`/products/${product.id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
        >
          查看详情
          <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
        </Link>
      </div>
    </div>
  )
}