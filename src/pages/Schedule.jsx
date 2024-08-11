import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Schedule = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Event Schedule</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" /> Laser Tag Adventure
            </CardTitle>
            <CardDescription>
              <Clock className="inline-block mr-1" /> 13:30
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Get ready for an exciting laser tag battle to kick off our celebration! Bring your A-game and prepare for an unforgettable urban adventure.</p>
            <p className="mt-2"><strong>Location:</strong> Budapest Laser Tag Arena, 1052 Budapest, Váci utca 10</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" /> Wedding Dinner
            </CardTitle>
            <CardDescription>
              <Clock className="inline-block mr-1" /> 17:00
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Join us for a cozy and delicious dinner to celebrate our union. We'll enjoy local Hungarian cuisine and toast to new beginnings.</p>
            <p className="mt-2"><strong>Location:</strong> Kőleves Kert, 1075 Budapest, Kazinczy u. 41</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
