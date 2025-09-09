import { SectionHeader } from '@/components/SectionHeader';
import { companyInfo } from '@/mocks/companyData';

// 技术优势数据
const technicalAdvantages = [
  {
    title: "核心技术研发",
    description: "拥有一支由博士、硕士组成的专业研发团队，专注于光谱分析和工业自动化领域的技术创新与产品开发。",
    icon: "fa-flask",
    features: [
      "自主研发的高精度光谱分析算法",
      "先进的光学系统设计能力",
      "高速数据采集与处理技术",
      "智能化控制软件平台"
    ]
  },
  {
    title: "产品创新能力",
    description: "持续投入研发，不断推出具有市场竞争力的创新产品，满足不同行业客户的个性化需求。",
    icon: "fa-lightbulb",
    features: [
      "紧凑型光谱仪设计技术",
      "高分辨率光学检测技术",
      "快速响应的测量系统",
      "定制化解决方案开发"
    ]
  },
  {
    title: "质量控制体系",
    description: "建立了严格的质量控制体系，从原材料采购到产品出厂的每个环节都进行严格把关。",
    icon: "fa-check-circle",
    features: [
      "ISO9001质量管理体系认证",
      "全流程质量监控",
      "严格的环境测试",
      "完善的售后服务体系"
    ]
  },
  {
    title: "行业应用经验",
    description: "在多个行业积累了丰富的应用经验，能够为客户提供专业的技术支持和解决方案。",
    icon: "fa-industry",
    features: [
      "半导体行业薄膜测量方案",
      "光纤通信测试解决方案",
      "工业过程监控系统",
      "科研实验分析平台"
    ]
  }
];

export default function Technology() {
  return (
    <div className="bg-gray-50">
      {/* Technology Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">技术优势</h1>
            <p className="text-xl text-blue-100">
              我们凭借强大的研发实力和技术创新能力，为客户提供高质量的产品和解决方案
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full"></div>
        </div>
      </section>
      
      {/* Technical Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="核心技术优势" 
            subtitle="我们在多个技术领域拥有核心竞争力，为客户提供专业的解决方案" 
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {technicalAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i class={`fa-solid ${advantage.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-60０ mb-6">{advantage.description}</p>
                <ul className="space-y-2">
                  {advantage.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i class="fa-solid fa-angle-right text-blue-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* R&D Capabilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="研发实力" 
            subtitle="我们注重技术创新和研发投入，拥有一支高素质的研发团队." 
            center={true} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-l00 mb-6">
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i class="fa-solid fa-users text-blue-600 text-xl"></i>
                  </div><div>
                    <h3 className="text-xl font-semibold text-gray-900">专业研发团队</h3>
                    <p className="text-gray-600">由行业资深专家和博士、硕士组成</p></div>
                </div>
                
                <div className="grid grid-cols-l md:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="flex items-center">                    
                    <div className="text-3xl font-bold text-blue-600 mr-3">90%</div>
                    <div>
                      <p className="text-gray-700 font-medium">研发人员占比</p>
                      <p className="text-gray-500 text-sm">高比例研发团队配置</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-600 mr-3">15+</div>
                    <div>
                      <p className="text-gray-700 font-medium">平均行业经验</p>
                      <p className="text-gray-500 text-sm">年技术积累</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-600 mr-3">30+</div>
                    <div>
                      <p className="text-gray-700 font-medium">核心技术专利</p>
                      <p className="text-gray-500 text-sm">自主知识产权</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-600 mr-3">40%</div>
                    <div>
                      <p className="text-gray-700 font-medium">年营收研发投入</p>
                      <p className="text-gray-500 text-sm">持续创新动力</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">研发方向</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">高精度光谱分析技术</span>
                      <span className="text-sm font-medium text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">工业自动化控制系统</span>
                      <span className="text-sm font-medium text-blue-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                    </div>                    
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">智能传感器技术</span>
                      <span className="text-sm font-medium text-blue-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>                    
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">物联网数据平台</span>
                      <span className="text-sm font-medium text-blue-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>                    
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">人工智能算法应用</span>
                      <span className="text-sm font-medium text-blue-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>                    
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="行业解决方案" 
            subtitle="针对不同行业特点，提供定制化的技术解决方案" 
            center={true} 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "半导体行业",
                description: "高精度薄膜厚度测量解决方案，助力半导体器件质量控制",
                icon: "fa-microchip",
                bgColor: "bg-blue-50",
                textColor: "text-blue-600"
              },
              {
                title: "光纤通信",
                description: "光纤特性测试与分析系统，保障通信网络性能稳定",
                icon: "fa-wifi",
                bgColor: "bg-green-50",
                textColor: "text-green-600"
              },
              {
                title: "工业制造",
                description: "智能化生产过程监控方案，提高生产效率和产品质量",
                icon: "fa-industry",
                bgColor: "bg-purple-50",
                textColor: "text-purple-600"
              },
              {
                title: "科研实验",
                description: "高精度光谱分析平台，满足科研机构多样化实验需求",
                icon: "fa-flask",
                bgColor: "bg-yellow-50",
                textColor: "text-yellow-600"
              },
              {
                title: "环境监测",
                description: "实时环境参数监测系统，为环保决策提供数据支持",
                icon: "fa-leaf",
                bgColor: "bg-teal-50",
                textColor: "text-teal-600"
              },
              {
                title: "医疗设备",
                description: "医疗光学检测模块，助力精准医疗诊断设备开发",
                icon: "fa-heartbeat",
                bgColor: "bg-red-50",
                textColor: "text-red-600"
              }
            ].map((solution, index) => (
              <div key={index} className="rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 ${solution.bgColor} rounded-lg flex items-center justify-center mb-4 ${solution.textColor}`}>
                  <i class={`fa-solid ${solution.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}