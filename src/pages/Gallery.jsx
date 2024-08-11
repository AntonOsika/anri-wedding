import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [images] = useState([
    { src: "/placeholder.svg", alt: "Anton and Dori at Fisherman's Bastion" },
    { src: "/placeholder.svg", alt: "Couple enjoying street food at the Christmas Market" },
    { src: "/placeholder.svg", alt: "Sunset view from Gellért Hill" },
    { src: "/placeholder.svg", alt: "Laser tag action shot" },
    { src: "/placeholder.svg", alt: "Romantic dinner at a ruin bar" },
    { src: "/placeholder.svg", alt: "Engagement photo at the Széchenyi Thermal Bath" },
  ]);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Budapest Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index}>
            <CardContent className="p-2">
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded" />
              <p className="mt-2 text-sm text-center">{image.alt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
