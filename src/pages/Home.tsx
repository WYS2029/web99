import { HeroSection } from '@/components/HeroSection';
import { SectionHeader } from '@/components/SectionHeader';
import { productCategories } from '@/mocks/productData';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Product Categories Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="产品中心" 
            subtitle="我们提供全面的工业自动化解决方案，满足不同行业需求" 
            center={true} 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {productCategories.map((category, index) => (
              <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                <div className="relative h-48 overflow-hidden bg-blue-50 flex items-center justify-center">
                  <i class={`fa-solid ${category.icon} text-6xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300`}></i>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <a 
                    href="/products" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-2"
                  >
                    查看产品系列
                    <i class="fa-solid fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/products" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              浏览全部产品
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
      
       {/* Company Strengths Section */}
       <section className="py-16 md:py-20 bg-gray-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader 
             title="公司优势" 
             subtitle="我们凭借专业服务，为客户创造最大价值" 
             center={true} 
           />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
               <div className="flex items-start">
                 <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-5">
                   <i class="fa-solid fa-users text-blue-600 text-2xl"></i>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-3">专业团队</h3>
                   <p className="text-gray-600 mb-4">由行业资深专家和博士、硕士组成的研发团队，平均行业经验10年以上，为客户提供专业的技术支持和解决方案。</p>
                   <a href="/company" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                     认识核心团队
                     <i class="fa-solid fa-arrow-right ml-2 text-sm"></i>
                   </a>
                 </div>
               </div>
             </div>
             
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
               <div className="flex items-start">
                 <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-5">
                   <i class="fa-solid fa-cogs text-blue-600 text-2xl"></i>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-3">定制服务</h3>
                   <p className="text-gray-600 mb-4">根据客户需求提供定制化解决方案，从设计到实施全程专业服务，确保系统完美适配客户应用场景。</p>
                   <a href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                     咨询定制方案
                     <i class="fa-solid fa-arrow-right ml-2 text-sm"></i>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">与我们合作，共创工业未来</h2>
            <p className="text-xl text-blue-100 mb-8">无论您需要产品咨询、技术支持还是定制解决方案，我们都将竭诚为您服务</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                立即联系我们
              </a>
              <a 
                href="/products" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                探索产品中心
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}