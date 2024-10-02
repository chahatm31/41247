import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bookmark, Share2, X } from "lucide-react";

// Placeholder for event data
const eventData = {
  meetups: [
    {
      id: "meet001",
      title: "Tech Conference",
      eventStartTime: "2024-10-13T07:00:00",
      eventEndTime: "2024-10-13T17:00:00",
      location: "Tech Hub",
      address: "123 Main Street, City",
      eventThumbnail: "https://i.postimg.cc/SKrZhNpS/pexels-photo-1181403.jpg",
      eventDescription:
        "Join us for a day of technology insights and networking at the Tech Conference, organized by the Tech Community. This offline event will take place on August 1st from 9:00 AM to 5:00 PM at Tech Hub, located at 123 Main Street, City. The conference will feature renowned speakers including John Smith, CTO, and Jane Doe, Software Engineer. With a focus on technology and networking, this event offers a great opportunity to learn, connect, and stay up-to-date with the latest trends in the industry. The event is paid, and the ticket price is ₹7,500. Please adhere to the business casual dress code, and note that the event is open to individuals aged 18 and above.",
      hostedBy: "Tech Community",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["technology", "networking"],
      speakers: [
        {
          name: "John Smith",
          image: "https://i.postimg.cc/J7xjYLnc/pexels-photo-5384445.jpg",
          designation: "CTO",
        },
        {
          name: "Jane Doe",
          image: "https://i.postimg.cc/tC5yVBBg/pexels-photo-1130626.jpg",
          designation: "Software Engineer",
        },
      ],
      price: "7,500",
      additionalInformation: {
        dressCode: "Business casual",
        ageRestrictions: "18 and above",
      },
    },
    {
      id: "meet002",
      title: "Design Workshop",
      eventStartTime: "2024-11-10T14:00:00",
      eventEndTime: "2024-11-10T16:00:00",
      location: "Creative Studio",
      address: "456 Elm Street, City",
      eventThumbnail: "https://i.postimg.cc/vT1XfrxT/pexels-photo-7256897.jpg",
      eventDescription:
        "Enhance your design skills and learn the fundamentals of design at the Design Workshop hosted by the Design Association. Taking place on August 10th from 2:00 PM to 4:00 PM at the Creative Studio, located at 456 Elm Street, City, this offline workshop offers an opportunity to learn from industry experts. Emily Johnson, Design Director, and Alex Brown, Graphic Designer, will share their insights and knowledge. The workshop is suitable for individuals aged 16 and above and follows a casual dress code. The ticket price for this paid event is ₹4,500.",
      hostedBy: "Design Association",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["design", "workshop"],
      speakers: [
        {
          name: "Emily Johnson",
          image: "https://i.postimg.cc/d3wpsYPj/pexels-photo-1181686.jpg",
          designation: "Design Director",
        },
        {
          name: "Alex Brown",
          image: "https://i.postimg.cc/zBm4QhxM/pexels-photo-1516680.jpg",
          designation: "Graphic Designer",
        },
      ],
      price: "4,500",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "16 and above",
      },
    },
    {
      id: "meet003",
      title: "Marketing Seminar",
      eventStartTime: "2024-10-15T10:00:00",
      eventEndTime: "2024-10-15T12:00:00",
      location: "Marketing City",
      address: "789 Marketing Avenue, City",
      eventThumbnail: "https://i.postimg.cc/L8FvgZ94/pexels-photo-6476776.jpg",
      eventDescription:
        "Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by Marketing Experts. This offline seminar will be held on August 15th from 10:00 AM to 12:00 PM at Marketing City, situated at 789 Marketing Avenue, City. Join industry leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, as they delve into the latest trends and strategies in digital marketing. The seminar is open to individuals aged 18 and above and requires a ticket priced at ₹3,000. The dress code for the event is smart casual.",
      hostedBy: "Marketing Experts",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["marketing", "digital"],
      speakers: [
        {
          name: "Sarah Johnson",
          image: "https://i.postimg.cc/yxTqcNXG/pexels-photo-1239288.jpg",
          designation: "Marketing Manager",
        },
        {
          name: "Michael Brown",
          image: "https://i.postimg.cc/nL96T2GB/pexels-photo-2182970.jpg",
          designation: "SEO Specialist",
        },
      ],
      price: "3,000",
      additionalInformation: {
        dressCode: "Smart casual",
        ageRestrictions: "18 and above",
      },
    },
    {
      id: "meet004",
      title: "Startup Pitch Night",
      eventStartTime: "2024-10-20T18:00:00",
      eventEndTime: "2024-10-20T20:00:00",
      location: "Zoom",
      address: "",
      eventThumbnail: "https://i.postimg.cc/k59jzRzY/event-492280317.jpg",
      eventDescription:
        "If you're interested in entrepreneurship and innovation, don't miss the Startup Pitch Night hosted by Startup Hub. This online event, taking place on August 20th from 6:00 PM to 8:00 PM, offers a platform for aspiring entrepreneurs to pitch their innovative ideas. Join David Anderson, a Startup Coach, and Emma Roberts, an Investor, as they provide valuable insights and feedback. The event is free and has a business attire dress code. It is open to individuals aged 16 and above.",
      hostedBy: "Startup Hub",
      eventType: "Online",
      isPaid: false,
      eventTags: ["startup", "entrepreneurship"],
      speakers: [
        {
          name: "David Anderson",
          image: "https://i.postimg.cc/5yW18TcX/pexels-photo-220453.jpg",
          designation: "Startup Coach",
        },
        {
          name: "Emma Roberts",
          image: "https://i.postimg.cc/vZYYPJ49/pexels-photo-3796217.jpg",
          designation: "Investor",
        },
      ],
      price: "Free",
      additionalInformation: {
        dressCode: "Business attire",
        ageRestrictions: "16 and above",
      },
    },
    {
      id: "meet005",
      title: "Data Science Workshop",
      eventStartTime: "2024-10-25T14:00:00",
      eventEndTime: "2024-10-25T16:00:00",
      location: "Data City",
      address: "456 Data Avenue, City",
      eventThumbnail: "https://i.postimg.cc/dVGH5jHT/600-498146586.webp",
      eventDescription:
        "Learn the essentials of data science and its applications at the Data Science Workshop organized by the Data Analytics Society. This offline workshop will be held on August 25th from 2:00 PM to 4:00 PM at Data City, located at 456 Data Avenue, City. Join Robert Wilson, Data Scientist, and Linda Thompson, Machine Learning Engineer, as they share their expertise. The workshop is open to individuals aged 18 and above, with a casual dress code. The ticket price for this event is ₹5,500.",
      hostedBy: "Data Analytics Society",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["data science", "analytics"],
      speakers: [
        {
          name: "Robert Wilson",
          image: "https://i.postimg.cc/yYBsdMX5/pexels-photo-2379004.jpg",
          designation: "Data Scientist",
        },
        {
          name: "Linda Thompson",
          image: "https://i.postimg.cc/RFhTx7Rd/pexels-photo-3756679.jpg",
          designation: "Machine Learning Engineer",
        },
      ],
      price: "5,500",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "18 and above",
      },
    },
    {
      id: "meet006",
      title: "Photography Workshop",
      eventStartTime: "2024-11-01T11:00:00",
      eventEndTime: "2024-11-01T13:00:00",
      location: "Google Meet",
      address: "",
      eventThumbnail: "https://i.postimg.cc/HxN9Yrvg/event-511954422.jpg",
      eventDescription:
        "Discover the art of photography and enhance your skills at the Photography Workshop organized by the Photography Society. This online workshop, taking place on September 1st from 11:00 AM to 1:00 PM, offers insights from Christopher Davis, a Professional Photographer, and Olivia Walker, a Photography Instructor. The workshop is free and open to individuals aged 16 and above. The dress code is casual.",
      hostedBy: "Photography Society",
      eventType: "Online",
      isPaid: false,
      eventTags: ["photography", "art"],
      speakers: [
        {
          name: "Christopher Davis",
          image: "https://i.postimg.cc/Nfpq0509/pexels-photo-2379005.jpg",
          designation: "Professional Photographer",
        },
        {
          name: "Olivia Walker",
          image: "https://i.postimg.cc/PJbHyyh2/pexels-photo-774909.jpg",
          designation: "Photography Instructor",
        },
      ],
      price: "Free",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "16 and above",
      },
    },
    {
      id: "meet007",
      title: "Finance Conference",
      eventStartTime: "2024-11-05T09:00:00",
      eventEndTime: "2024-11-05T18:00:00",
      location: "Financial City",
      address: "987 Finance Boulevard, City",
      eventThumbnail: "https://i.postimg.cc/WtLmZQPY/pexels-photo-6694543.jpg",
      eventDescription:
        "Gain valuable insights into the world of finance and investment strategies by attending the Finance Conference hosted by Financial Experts. This offline conference will take place on September 5th from 9:00 AM to 6:00 PM at Financial City, situated at 987 Finance Boulevard, City. Join William Adams, Financial Analyst, and Sophia Miller, Investment Advisor, as they share their knowledge and expertise. The conference is open to individuals aged 18 and above, with a business formal dress code. The ticket price for this event is ₹9,000.",
      hostedBy: "Financial Experts",
      eventType: "Offline",
      isPaid: true,
      eventTags: ["finance", "investment"],
      speakers: [
        {
          name: "William Adams",
          image: "https://i.postimg.cc/7LcqZbmM/pexels-photo-5792641.jpg",
          designation: "Financial Analyst",
        },
        {
          name: "Sophia Miller",
          image: "https://i.postimg.cc/0yBTpFD9/pexels-photo-762020.jpg",
          designation: "Investment Advisor",
        },
      ],
      price: "9,000",
      additionalInformation: {
        dressCode: "Business formal",
        ageRestrictions: "18 and above",
      },
    },
    {
      id: "meet008",
      title: "Fitness Workshop",
      eventStartTime: "2024-11-10T15:00:00",
      eventEndTime: "2024-11-10T17:00:00",
      location: "Zoom",
      address: "",
      eventThumbnail: "https://i.postimg.cc/kMkLwGJz/event-495951818.jpg",
      eventDescription:
        "Get fit and learn effective workout techniques from fitness experts at the Fitness Workshop organized by the Fitness Club. This online workshop, taking place on September 10th from 3:00 PM to 5:00 PM, offers valuable insights from Jennifer Wilson, a Fitness Instructor, and Daniel Thompson, a Personal Trainer. The workshop is free and open to individuals aged 16 and above. The dress code is athletic wear.",
      hostedBy: "Fitness Club",
      eventType: "Online",
      isPaid: false,
      eventTags: ["fitness", "workout"],
      speakers: [
        {
          name: "Jennifer Wilson",
          image: "https://i.postimg.cc/XvXVW9cY/pexels-photo-5876695.jpg",
          designation: "Fitness Instructor",
        },
        {
          name: "Daniel Thompson",
          image: "https://i.postimg.cc/sxWL4gPz/pexels-photo-1681010.jpg",
          designation: "Personal Trainer",
        },
      ],
      price: "Free",
      additionalInformation: {
        dressCode: "Athletic wear",
        ageRestrictions: "16 and above",
      },
    },
    {
      id: "meet009",
      title: "Art Exhibition",
      eventStartTime: "2024-11-15T12:00:00",
      eventEndTime: "2024-11-15T20:00:00",
      location: "Zoom Call",
      address: "",
      eventThumbnail: "https://i.postimg.cc/nhxgbWQ1/pexels-photo-3004909.jpg",
      eventDescription:
        "Explore a diverse collection of artworks by renowned artists at the Art Exhibition hosted by the Art Gallery. This online exhibition, taking place on September 15th from 12:00 PM to 8:00 PM, offers an opportunity to appreciate various art forms. The event is free and open to all ages. The dress code is casual.",
      hostedBy: "Art Gallery",
      eventType: "Online",
      isPaid: false,
      eventTags: ["art", "exhibition"],
      speakers: [],
      price: "Free",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "All ages",
      },
    },
    {
      id: "meet010",
      title: "Music Festival",
      eventStartTime: "2024-11-20T16:00:00",
      eventEndTime: "2024-11-20T23:00:00",
      location: "Zoom Event",
      address: "",
      eventThumbnail: "https://i.postimg.cc/VNLh5bgr/event-492294898.jpg",
      eventDescription:
        "Immerse yourself in a day filled with live music performances from various genres at the Music Festival hosted by the Music Society. This online festival, taking place on September 20th from 4:00 PM to 11:00 PM, promises a memorable experience for music enthusiasts. The event is free and open to individuals aged 16 and above. The dress code is casual.",
      hostedBy: "Music Society",
      eventType: "Online",
      isPaid: false,
      eventTags: ["music", "festival"],
      speakers: [],
      price: "Free",
      additionalInformation: {
        dressCode: "Casual",
        ageRestrictions: "16 and above",
      },
    },
  ],
};

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

function EventCard({
  event,
  onRSVP,
  onViewDetails,
  onToggleFavorite,
  isFavorite,
  isRSVPd,
}) {
  const isPastEvent = new Date(event.eventEndTime) < new Date();

  return (
    <Card className="w-full sm:w-64 m-2">
      <CardHeader className="p-0">
        <img
          src={event.eventThumbnail}
          alt={event.title}
          className="w-full h-32 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
        <CardDescription>{formatDate(event.eventStartTime)}</CardDescription>
        <p className="mt-2">{event.eventType} Event</p>
        <p>{event.isPaid ? `Price: ₹${event.price}` : "Free"}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => onViewDetails(event)}>
          View Details
        </Button>
        {!isPastEvent && (
          <Button
            onClick={() => onRSVP(event)}
            className={isRSVPd ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"}
          >
            {isRSVPd ? "RSVP'd" : "RSVP"}
          </Button>
        )}
        <Button variant="ghost" onClick={() => onToggleFavorite(event.id)}>
          <Bookmark className={isFavorite ? "fill-current" : ""} />
        </Button>
      </CardFooter>
    </Card>
  );
}

function EventDetails({
  event,
  onClose,
  onRSVP,
  onToggleFavorite,
  isFavorite,
  onShare,
  isRSVPd,
}) {
  const isPastEvent = new Date(event.eventEndTime) < new Date();

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-screen flex flex-col p-0">
        <DialogHeader className="px-6 py-4 bg-white z-10 flex justify-between items-center">
          <div>
            <DialogTitle className="text-2xl">{event.title}</DialogTitle>
            <DialogDescription>
              {formatDate(event.eventStartTime)} -{" "}
              {formatDate(event.eventEndTime)}
            </DialogDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" onClick={() => onToggleFavorite(event.id)}>
              <Bookmark className={isFavorite ? "fill-current" : ""} />
            </Button>
            <Button variant="ghost" onClick={() => onShare(event)}>
              <Share2 />
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-grow flex overflow-hidden">
          <div className="w-2/3 p-6 overflow-auto">
            <img
              src={event.eventThumbnail}
              alt={event.title}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="mb-4">{event.eventDescription}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold">Event Details</h3>
                <p>
                  <strong>Hosted by:</strong> {event.hostedBy}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                {event.address && (
                  <p>
                    <strong>Address:</strong> {event.address}
                  </p>
                )}
                <p>
                  <strong>Event Type:</strong> {event.eventType}
                </p>
                <p>
                  <strong>Price:</strong>{" "}
                  {event.isPaid ? `₹${event.price}` : "Free"}
                </p>
              </div>
              <div>
                <h3 className="font-bold">Additional Information</h3>
                <p>
                  <strong>Dress Code:</strong>{" "}
                  {event.additionalInformation.dressCode}
                </p>
                <p>
                  <strong>Age Restrictions:</strong>{" "}
                  {event.additionalInformation.ageRestrictions}
                </p>
              </div>
            </div>
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-4">
                <h3 className="font-bold">Speakers:</h3>
                <div className="flex flex-wrap">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center mr-4 mb-2">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      <div>
                        <p className="font-semibold">{speaker.name}</p>
                        <p>{speaker.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-1/3 p-6 bg-gray-100">
            <h3 className="font-bold mb-2">Event Tags:</h3>
            <div className="flex flex-wrap mb-4">
              {event.eventTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button
              className="w-full mb-4"
              onClick={() => onRSVP(event)}
              disabled={isRSVPd || isPastEvent}
              style={{
                backgroundColor: isRSVPd ? "#9CA3AF" : "#EF4444",
                color: "white",
              }}
            >
              {isRSVPd ? "Already RSVP'd" : "RSVP for This Event"}
            </Button>
            <Alert>
              <AlertTitle>Event Information</AlertTitle>
              <AlertDescription>
                This {event.eventType.toLowerCase()} event is{" "}
                {event.isPaid ? "paid" : "free"}.
                {event.isPaid && ` The ticket price is ₹${event.price}.`}
                <br />
                Suitable for: {event.additionalInformation.ageRestrictions}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function RSVPModal({ event, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(event.id, { name, email });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>RSVP for {event.title}</DialogTitle>
          <DialogDescription>
            {event.isPaid
              ? `You will need to make a payment of ₹${event.price} at the venue.`
              : "This is a free event."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2"
            required
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
            required
          />
          <DialogFooter>
            <Button type="submit">Submit RSVP</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Notification({ message, onClose }) {
  return (
    <Alert className="fixed bottom-4 right-4 w-64 bg-white shadow-lg">
      <AlertTitle className="flex justify-between items-center">
        Notification
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={16} />
        </Button>
      </AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

export default function App() {
  const [events, setEvents] = useState(eventData.meetups);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpEvent, setRsvpEvent] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [rsvps, setRSVPs] = useState({});
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.eventTags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesType = eventType === "All" || event.eventType === eventType;
      return matchesSearch && matchesType;
    });
    setFilteredEvents(filtered);
  }, [searchTerm, eventType, events]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleRSVP = (event) => {
    if (rsvps[event.id]) {
      showNotification("You have already RSVP'd for this event.");
    } else {
      setRsvpEvent(event);
    }
  };

  const handleToggleFavorite = (eventId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(eventId)
        ? prevFavorites.filter((id) => id !== eventId)
        : [...prevFavorites, eventId]
    );
    showNotification(
      favorites.includes(eventId)
        ? "Removed from favorites"
        : "Added to favorites"
    );
  };

  const handleShare = (event) => {
    const shareText = `Check out this event: ${event.title} on ${formatDate(
      event.eventStartTime
    )}`;
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: shareText,
          url: window.location.href,
        })
        .then(() => showNotification("Shared successfully"))
        .catch((error) => showNotification("Error sharing"));
    } else {
      navigator.clipboard
        .writeText(shareText + " " + window.location.href)
        .then(() => showNotification("Link copied to clipboard"))
        .catch(() => showNotification("Failed to copy link"));
    }
  };

  const handleRSVPSubmit = (eventId, userData) => {
    setRSVPs((prevRSVPs) => ({
      ...prevRSVPs,
      [eventId]: userData,
    }));
    showNotification("RSVP submitted successfully");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meetup Events</h1>
      <div className="mb-4 flex flex-col sm:flex-row gap-2">
        <Input
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={eventType} onValueChange={setEventType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Online">Online</SelectItem>
            <SelectItem value="Offline">Offline</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onRSVP={handleRSVP}
            onViewDetails={handleViewDetails}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.includes(event.id)}
            isRSVPd={!!rsvps[event.id]}
          />
        ))}
      </div>
      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRSVP={handleRSVP}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={favorites.includes(selectedEvent.id)}
          onShare={handleShare}
          isRSVPd={!!rsvps[selectedEvent.id]}
        />
      )}
      {rsvpEvent && (
        <RSVPModal
          event={rsvpEvent}
          onClose={() => setRsvpEvent(null)}
          onSubmit={handleRSVPSubmit}
        />
      )}
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}
