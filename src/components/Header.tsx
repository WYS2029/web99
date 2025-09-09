import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '公司简介', path: '/company' },
  { label: '产品中心', path: '/products' },
  { label: '技术优势', path: '/technology' },
  { label: '新闻动态', path: '/news' },
  { label: '联系方式', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RT</span>
            </div>
           <span className="ml-2 text-xl font-semibold text-gray-900">新公司名称待确认</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
              className={cn(
                 "text-sm font-medium transition-all hover:text-blue-600 hover:border-b border-blue-600 pb-0.5",
                 location.pathname === item.path 
                   ? "text-blue-600 border-b border-blue-600 pb-0.5" 
                   : "text-gray-600 border-b border-transparent pb-0.5"                 
               )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
           {/* Mobile menu button */}
           <div className="md:hidden">
             <button 
               type="button" 
               className="text-gray-600 hover:text-gray-900"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               <i class={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
             </button>
           </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Hidden by default */}
       <div className={`md:hidden bg-white border-t border-gray-100 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
               className={cn(
                 "block py-2 text-sm font-medium transition-colors hover:text-blue-600",
                 location.pathname === item.path 
                   ? "text-blue-600 font-semibold" 
                   : "text-gray-600"                 
               )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
