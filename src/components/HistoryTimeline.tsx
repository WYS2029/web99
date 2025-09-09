interface TimelineItemProps {
  year: number;
  event: string;
  isLast?: boolean;
}

export function HistoryTimeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:translate-x-px"></div>
      
      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-start">
            {/* Timeline dot */}
            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4 md:absolute md:left-1/2 transform md:-translate-x-px">
              {item.year}
            </div>
            
            {/* Timeline content */}
            <div className={`flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${
              index % 2 === 0 ? 'md:ml-16 md:text-left' : 'md:mr-16 md:ml-auto md:text-right'
            }`}>
              <p className="text-lg text-gray-800">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}