interface ApplicationTagProps {
  name: string;
}

export function ApplicationTag({ name }: ApplicationTagProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mr-2 mb-2">
      <i class="fa-solid fa-industry mr-1.5"></i>
      {name}
    </span>
  );
}