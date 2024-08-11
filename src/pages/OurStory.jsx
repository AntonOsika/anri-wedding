import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OurStory = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Urban Love Story</h1>
      <Card>
        <CardHeader>
          <CardTitle>How We Met</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Anton and Dori's paths crossed on a crisp autumn day in Budapest's City Park. Both were out for a jog, and a chance collision over a runaway frisbee led to laughter, apologies, and an impromptu coffee date.</p>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Our Adventures</CardTitle>
        </CardHeader>
        <CardContent>
          <p>From exploring hidden ruin bars to competing in city-wide scavenger hunts, our love for Budapest and each other grew with every urban adventure. We've climbed Gellért Hill at sunrise, paddled on the Danube at sunset, and found romance in the most unexpected corners of this beautiful city.</p>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>The Proposal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Anton proposed during a midnight laser tag battle - because why not? As the lights came up after the final round, Dori found Anton on one knee, ring in hand, surrounded by their cheering friends. It was unconventional, surprising, and perfectly us.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurStory;
