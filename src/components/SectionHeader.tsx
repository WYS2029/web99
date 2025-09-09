interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : "text-left"} mb-12>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 ${center ? "mx-auto" : "mx-0"} w-20 h-1 bg-blue-600 rounded-full`}></div>
    </div>
  );
}