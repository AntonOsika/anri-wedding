import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
      <img src="/placeholder.svg" alt="Map of Budapest" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <MapPin className="text-red-500 w-8 h-8" />
        <span className="bg-white px-2 py-1 rounded text-sm">Laser Tag</span>
      </div>
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
        <MapPin className="text-blue-500 w-8 h-8" />
        <span className="bg-white px-2 py-1 rounded text-sm">Dinner Venue</span>
      </div>
    </div>
  );
};

export default InteractiveMap;
