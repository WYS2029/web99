import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Contact Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-blue-100">
              无论您有任何问题或需求，我们的团队都将竭诚为您提供帮助和支持
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full"></div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center transform transition-transform hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-map-marker-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">公司地址</h3>
              <p className="text-gray-600">山东省济南市历下区经十路17923号创新大厦</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 text-center transform transition-transform hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-phone text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">联系电话</h3>
               <p className="text-gray-600">18121215738</p>
              <p className="text-gray-600 mt-1">周一至周五: 9:00 - 18:00</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 text-center transform transition-transform hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-envelope text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">电子邮箱</h3>
              <p className="text-gray-600">info@rudeertek.com</p>
              <p className="text-gray-600 mt-1">support@rudeertek.com</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="发送留言" 
            subtitle="请填写以下表单，我们的团队将尽快与您联系" 
            center={true} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <ContactForm />
            </div>
            
            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-80">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=company%20location%20map%20view&sign=4889a0780070e0061915cabc818ebeb1" 
                  alt="Company location map"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Business Hours */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">营业时间</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between text-gray-600">
                    <span>周一至周五</span>
                    <span>9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between text-gray-600">
                    <span>周六</span>
                    <span>10:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between text-gray-600">
                    <span>周日及法定节假日</span>
                    <span>休息</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                    <i class="fa-brands fa-weixin text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                    <i class="fa-brands fa-weibo text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                    <i class="fa-brands fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                    <i class="fa-brands fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}