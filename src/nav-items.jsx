import { Home, Calendar, MapPin, Heart, Camera, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Schedule from "./pages/Schedule.jsx";
import Location from "./pages/Location.jsx";
import OurStory from "./pages/OurStory.jsx";
import Gallery from "./pages/Gallery.jsx";
import Guestbook from "./pages/Guestbook.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Schedule",
    to: "/schedule",
    icon: <Calendar className="h-4 w-4" />,
    page: <Schedule />,
  },
  {
    title: "Location",
    to: "/location",
    icon: <MapPin className="h-4 w-4" />,
    page: <Location />,
  },
  {
    title: "Our Story",
    to: "/our-story",
    icon: <Heart className="h-4 w-4" />,
    page: <OurStory />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Camera className="h-4 w-4" />,
    page: <Gallery />,
  },
  {
    title: "Guestbook",
    to: "/guestbook",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Guestbook />,
  },
];
