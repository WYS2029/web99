import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RT</span>
              </div>
             <span className="ml-2 text-xl font-semibold text-white">山科智控传感有限公司</span>
            </div>
            <p className="text-gray-400 mb-4">
              专注于提供高质量的技术解决方案和产品，为客户创造最大价值。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/company" className="text-gray-400 hover:text-white transition-colors">公司简介</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">产品中心</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-white transition-colors">技术优势</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">新闻动态</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">联系方式</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品系列</h3>
  <ul className="space-y-2">
    <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">光谱分析仪器</a></li>
    <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">光纤光谱膜厚检测仪</a></li>
  </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i class="fa-solid fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
        <span className="text-gray-400">山东省济南市历下区经十路17923号创新大厦</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-phone text-blue-400 mr-3"></i>
        <span className="text-gray-400">18121215738</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-envelope text-blue-400 mr-3"></i>
                <span className="text-gray-400">info@rudeertek.com</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-clock text-blue-400 mr-3"></i>
                <span className="text-gray-400">周一至周五: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} 山科智控传感有限公司 Shanke Intellisensing Co., Ltd. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}