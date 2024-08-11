import { useState, useEffect } from 'react';
import { Heart, MapPin, Calendar, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-09-14T13:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Anton & Dori's Informal Wedding Dinner Celebration</h1>
          <p className="text-xl">Experience the best Anri and Budapest has to offer with fun and food.</p>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Anton and Dori's love story began over burgers and chia pudding at WeWork in Stockholm. Now they are married and are excited to see friends and family to celebrate a future lifetime of fun and silliness.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <p>Get ready for an exciting laser tag battle to kick off our celebration!</p>
                <p className="mt-2">1138 Budapest, Váci út 178 Duna Pláza</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => window.open('https://goo.gl/maps/QZjZX9Z7Y8Xj6ZLGA', '_blank')}>
                  View on Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" /> Wedding Dinner
                </CardTitle>
                <CardDescription>
                  <Clock className="inline-block mr-1" /> 17:00
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Join us for a cozy and delicious dinner to celebrate our union.</p>
                <p className="mt-2">Budapest, Király u. 26, 1061 Hungary</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => window.open('https://goo.gl/maps/8Z8Z8Z8Z8Z8Z8Z8Z8', '_blank')}>
                  View on Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Countdown to Our Big Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <span className="text-3xl font-bold">{timeLeft.days}</span>
                  <p>Days</p>
                </div>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.hours}</span>
                  <p>Hours</p>
                </div>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                  <p>Minutes</p>
                </div>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                  <p>Seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">RSVP Today!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We can't wait to celebrate with you! Please let us know if you can make it.</p>
              <div className="flex space-x-4">
                <Button>RSVP</Button>
                <Button variant="outline">Can't make it</Button>
                <Button variant="outline">Not sure if I can make it...</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2024 Anton & Dori's Urban Love Adventure</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
