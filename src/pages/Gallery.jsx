import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    { src: "/almost_kissing.jpg", alt: "Anton and Dori almost kissing" },
    { src: "/bathrobes.jpg", alt: "Anton and Dori in bathrobes" },
    { src: "/before_first_look.jpg", alt: "Anton and Dori before their first look" },
    { src: "/bicycle.jpg", alt: "Anton and Dori on a bicycle" },
    { src: "/biking.jpg", alt: "Anton and Dori biking together" },
    { src: "/black_n_white_happy.jpg", alt: "Anton and Dori happy in black and white" },
    { src: "/black_n_white_serious (dori).jpg", alt: "Dori looking serious in black and white" },
    { src: "/group.jpg", alt: "Anton and Dori with a group" },
    { src: "/troubled_on_bicycles.jpg", alt: "Anton and Dori looking troubled on bicycles" },
    { src: "/walking_to_water.jpg", alt: "Anton and Dori walking towards water" },
    { src: "/walking_together_looking_back.jpg", alt: "Anton and Dori walking together and looking back" },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Love Story in Pictures</h1>
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
