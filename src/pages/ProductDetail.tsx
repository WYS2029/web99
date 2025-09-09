import { useParams, Link } from 'react-router-dom';
import { featuredProducts } from '@/mocks/productData';
import { ProductGallery } from '@/components/ProductGallery';
import { SpecificationTable } from '@/components/SpecificationTable';
import { ApplicationTag } from '@/components/ApplicationTag';
import { ProductCard } from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Find product by ID (in a real app, this would come from an API)
  const productId = id ? parseInt(id, 10) : 0;
  const product = featuredProducts.find(p => p.id === productId);
  
  // 由于只有一个产品，不显示相关产品
  const relatedProducts: any[] = []
    .slice(0, 3);
  
  // Show loading state if product not found
  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <i className="fa-solid fa-spinner fa-spin text-5xl text-blue-600 mb-4"></i>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">产品加载中...</h2>
        <p className="text-gray-600 mb-6">请稍候，我们正在加载产品信息</p>
        <Link to="/products" className="inline-flex items-center text-blue-600 font-medium">
          <i className="fa-solid fa-arrow-left mr-2"></i>
          返回产品列表
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">首页</Link>
            <i className="fa-solid fa-chevron-right mx-2 text-xs"></i>
            <Link to="/products" className="hover:text-blue-600">产品中心</Link>
            <i className="fa-solid fa-chevron-right mx-2 text-xs"></i>
            <Link to={`/products/${product.id}`} className="text-gray-900 font-medium">{product.name}</Link>
          </div>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div>
               <ProductGallery 
                mainImage={product.image}
                thumbnailImages={[
                  product.image,
                  product.technicalDrawing as string
                ]}
              />
            </div>
            
            {/* Product Information */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                {product.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <span className="text-sm text-gray-500">(12 条评价)</span>
              </div>
              
               <div className="mb-8">
                 <p className="text-sm text-gray-500">联系我们获取报价</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">产品特点</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">应用场景</h3>
                <div className="flex flex-wrap">
                  {product.applicationScenarios.map((scenario, index) => (
                    <ApplicationTag key={index} name={scenario} />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  <i className="fa-solid fa-shopping-cart mr-2"></i>
                  加入购物车
                </button>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-sm border border-blue-600 hover:bg-blue-50 transition-colors duration-300 flex items-center">
                  <i className="fa-solid fa-file-pdf mr-2"></i>
                  下载手册
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">技术参数</h2>
          <SpecificationTable specifications={product.specifications} />
        </div>
      </section>
      
      {/* 技术参数文档下载 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <i className="fa-solid fa-file-pdf text-4xl text-red-500 mb-4"></i> 
            <h2 className="text-2xl font-bold text-gray-900 mb-2">产品技术参数手册</h2>
            <p className="text-gray-600 mb-6">下载完整的产品技术参数手册，了解更多详细信息</p>
            <a 
              href={product.technicalDrawing} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
            >
              <i className="fa-solid fa-download mr-2"></i>
              下载PDF手册
            </a>
          </div>
        </div>
      </section>
      
       {/* Manual Section */}
       {product.manualImage && (
         <section className="py-12 bg-gray-50">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">产品说明书</h2>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
               <img 
                 src={product.manualImage} 
                 alt={`${product.name}说明书`}
                 className="w-full h-auto rounded-lg"
               />
             </div>
           </div>
         </section>
       )}

       {/* Inquiry Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">需要更多产品信息？</h2>
            <p className="text-xl text-blue-100 mb-8">
              填写咨询表单，我们的技术专家将为您提供详细的产品资料和解决方案建议
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              联系技术顾问
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}