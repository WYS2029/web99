import { Routes, Route, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import CompanyIntroduction from "@/pages/CompanyIntroduction";
import ProductCenter from "@/pages/ProductCenter";
import ProductDetail from "@/pages/ProductDetail";
import Contact from "@/pages/Contact";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Layout with common Header and Footer
const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<CompanyIntroduction />} />          
          <Route path="products" element={<ProductCenter />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="technology" element={<div className="container mx-auto py-12">技术优势页面 - 开发中</div>} />
          <Route path="news" element={<div className="container mx-auto py-12">新闻动态页面 - 开发中</div>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}