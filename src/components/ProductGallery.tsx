import { useState } from 'react';

interface ProductGalleryProps {
  mainImage: string;
  thumbnailImages?: string[];
}

export function ProductGallery({ mainImage, thumbnailImages = [] }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(mainImage);
  
  // Use main image as fallback if no thumbnails provided
  const imagesToDisplay = thumbnailImages.length > 0 ? thumbnailImages : [mainImage];
  
  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="bg-gray-50 rounded-xl overflow-hidden">
        <img 
          src={activeImage} 
          alt="Product main view" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      {imagesToDisplay.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {imagesToDisplay.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                activeImage === image ? 'border-blue-600 ring-2 ring-blue-200' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img 
                src={image} 
                alt={`Product view ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}