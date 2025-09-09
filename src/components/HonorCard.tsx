interface HonorCardProps {
  title: string;
  year: number;
}

export function HonorCard({ title, year }: HonorCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">      
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
        <i class="fa-solid fa-award text-blue-600 text-xl"></i>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">
          <i class="fa-solid fa-calendar-alt mr-1"></i>
          {year}年
        </p>
      </div>
    </div>
  );
}