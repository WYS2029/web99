interface SpecificationTableProps {
  specifications: Record<string, string>;
}

export function SpecificationTable({ specifications }: SpecificationTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full">
        <tbody>
          {Object.entries(specifications).map(([key, value], index) => (
            <tr 
              key={key} 
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="px-6 py-4 text-left font-medium text-gray-700 w-1/2">
                {key}
              </td>
              <td className="px-6 py-4 text-left text-gray-600">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}