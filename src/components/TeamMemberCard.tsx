interface TeamMemberCardProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export function TeamMemberCard({ name, position, bio, image }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <p className="text-sm">{bio}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium">{position}</p>
      </div>
    </div>
  );
}