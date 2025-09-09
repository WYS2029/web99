import { SectionHeader } from '@/components/SectionHeader';
import { HistoryTimeline } from '@/components/HistoryTimeline';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { HonorCard } from '@/components/HonorCard';
import { companyInfo } from '@/mocks/companyData';

export default function CompanyIntroduction() {
  return (
    <div className="bg-gray-50">
      {/* Company Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
           <h1 className="text-4xl md:text-5xl font-bold mb-6">{companyInfo.fullName}<br/><span className="text-xl opacity-80">{companyInfo.englishName}</span></h1>
             <p className="text-xl text-blue-100 mb-8">
              {companyInfo.introduction}
            </p>
            <div className="flex items-center text-blue-100 text-lg">
              <i class="fa-solid fa-globe mr-2"></i>
              {companyInfo.englishName}
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                <i class="fa-solid fa-building mr-3 text-xl"></i>
                <div>
                  <p className="text-sm text-blue-100">成立时间</p>
                  <p className="font-semibold">{companyInfo.established}年</p>
                </div>
              </div>


            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full"></div>
        </div>
      </section>
      
      {/* Vision and Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="企业愿景与使命" center={true} />
          
           <div className="grid grid-cols-1 gap-12 mt-12">
             <div className="bg-gray-50 rounded-2xl p-8 transform transition-transform hover:-translate-y-1 duration-300">
               <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">              
                 <i class="fa-solid fa-bullseye text-gray-700 text-3xl"></i>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">企业使命</h3>
               <p className="text-lg text-gray-700">{companyInfo.mission}</p>
             </div>           
           </div>
        </div>
      </section>
      
      {/* Development History Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="发展历程" 
            subtitle="自成立以来，RudeerTek始终坚持技术创新，不断推动企业发展壮大" 
            center={true} 
          />
          
          <div className="mt-16 max-w-4xl mx-auto">
            <HistoryTimeline items={companyInfo.developmentHistory} />
          </div>
        </div>
      </section>
      


    </div>
  );
}