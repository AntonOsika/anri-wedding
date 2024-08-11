import InteractiveMap from '../components/InteractiveMap';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Location = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Event Locations</h1>
      <InteractiveMap />
      <div className="grid gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Laser Tag Venue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Budapest Laser Tag Arena</p>
            <p>1052 Budapest, Váci utca 10</p>
            <p className="mt-2">How to get there: Take the M1 metro line to Deák Ferenc tér, then walk 5 minutes south on Váci utca.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dinner Venue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Kőleves Kert</p>
            <p>1075 Budapest, Kazinczy u. 41</p>
            <p className="mt-2">How to get there: Take the M2 metro line to Blaha Lujza tér, then walk 10 minutes northeast through the vibrant Jewish Quarter.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Location;
