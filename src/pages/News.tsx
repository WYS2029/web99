import { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { latestNews } from '@/mocks/newsData';

export default function News() {
  // 按日期排序新闻（最新在前）
  const sortedNews = [...latestNews].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // 模拟分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  
  // 计算当前页显示的新闻
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(sortedNews.length / newsPerPage);
  
  // 格式化日期显示
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };
  
  return (
    <div className="bg-gray-50">
      {/* News Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">新闻动态</h1>
            <p className="text-xl text-blue-100">
              了解公司最新动态、行业资讯和技术前沿
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full"></div>
        </div>
      </section>
      
      {/* Latest News Section */}
      {sortedNews.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="最新资讯" 
              subtitle="及时了解公司动态和行业信息" 
              center={true} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {currentNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                      {formatDate(news.date)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      阅读全文
                      <i class="fa-solid fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                        currentPage === i + 1
                          ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </section>
      )}
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">订阅新闻资讯</h2>
            <p className="text-lg text-gray-600 mb-8">
              订阅我们的新闻通讯，及时获取公司最新动态和行业资讯
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="您的电子邮箱"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                立即订阅
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              我们尊重您的隐私，不会向第三方分享您的信息
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}