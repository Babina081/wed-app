import {
  FaThumbsUp,
  FaStar,
  FaRocket,
  FaTags,
  FaDollarSign,
  FaSmile,
} from "react-icons/fa"; // Example icons from react-icons

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const eventServices = [
  {
    name: "Photographers",
    imageUrl: "https://picsum.photos/200/200?random=1",
  },
  {
    name: "Videographers",
    imageUrl: "https://picsum.photos/200/200?random=2",
  },
  {
    name: "Hair and Beauty",
    imageUrl: "https://picsum.photos/200/200?random=3",
  },
  {
    name: "Boutiques",
    imageUrl: "https://picsum.photos/200/200?random=4",
  },
  {
    name: "Florists",
    imageUrl: "https://picsum.photos/200/200?random=5",
  },
  {
    name: "Cakes and Bakeries",
    imageUrl: "https://picsum.photos/200/200?random=6",
  },
  {
    name: "Venues",
    imageUrl: "https://picsum.photos/200/200?random=7",
  },
  {
    name: "Event Planners",
    imageUrl: "https://picsum.photos/200/200?random=8",
  },
  {
    name: "Travel Experts",
    imageUrl: "https://picsum.photos/200/200?random=9",
  },
];

export const spotlightServices = [
  {
    name: "Fotos Factory",
    category: "Photographers",
    location: "Dhalku, Kathmandu",
    tags: [
      { label: "BEST PRICE", icon: FaDollarSign },
      { label: "WELL LIKED", icon: FaThumbsUp },
      { label: "FAST REPLIES", icon: FaRocket },
    ],
    image: "https://picsum.photos/300/200?random=1",
    rank: 1,
  },
  {
    name: "Glamorous Events",
    category: "Event Planners",
    location: "Lalitpur, Kathmandu",
    tags: [
      { label: "EXPERIENCED", icon: FaStar },
      { label: "CREATIVE", icon: FaSmile },
      { label: "WELL ORGANIZED", icon: FaTags },
    ],
    image: "https://picsum.photos/300/200?random=2",
    rank: 2,
  },
  {
    name: "Floral Creations",
    category: "Florists",
    location: "Thamel, Kathmandu",
    tags: [
      { label: "BEAUTIFUL DESIGNS", icon: FaSmile },
      { label: "AFFORDABLE", icon: FaDollarSign },
      { label: "FAST DELIVERY", icon: FaRocket },
    ],
    image: "https://picsum.photos/300/200?random=3",
    rank: 3,
  },
  {
    name: "Dream Cakes & Bakery",
    category: "Cakes and Bakeries",
    location: "Pulchowk, Lalitpur",
    tags: [
      { label: "DELICIOUS", icon: FaSmile },
      { label: "CUSTOM DESIGNS", icon: FaTags },
      { label: "TRENDING", icon: FaStar },
    ],
    image: "https://picsum.photos/300/200?random=4",
    rank: 4,
  },
];

export const socialMediaLinks = [
  { platform: "Facebook", icon: FaFacebook, url: "https://facebook.com" },
  { platform: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
  { platform: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com" },
];

export const eventCompanies = [
  {
    name: "LensCraft Studios",
    category: "Photographers",
    location: "Pokhara",
    isFeatured: true,
  },
  {
    name: "MotionFrame Films",
    category: "Videographers",
    location: "Kathmandu",
    isFeatured: false,
  },
  {
    name: "GlamourWave Salon",
    category: "Hair and Beauty",
    location: "Butwal",
    isFeatured: true,
  },
  {
    name: "Elegance Couture",
    category: "Boutiques",
    location: "Kathmandu",
    isFeatured: false,
  },
  {
    name: "PetalBloom Designs",
    category: "Florists",
    location: "Pokhara",
    isFeatured: true,
  },
  {
    name: "SweetCrave Bakery",
    category: "Cakes and Bakeries",
    location: "Butwal",
    isFeatured: false,
  },
  {
    name: "Serenity Halls",
    category: "Venues",
    location: "Kathmandu",
    isFeatured: true,
  },
  {
    name: "Elite Events Co.",
    category: "Event Planners",
    location: "Pokhara",
    isFeatured: false,
  },
  {
    name: "JourneyMasters Travel",
    category: "Travel Experts",
    location: "Butwal",
    isFeatured: true,
  },
  {
    name: "JourneyMasters Travel",
    category: "Photographers",
    location: "Butwal",
    isFeatured: false,
  },
];

export const eventCompaniesDetails = [
  {
    name: "LensCraft Studios",
    category: "Photographers",
    description:
      "Weddings are special. Of all the days in your life, your wedding day is the day that symbolizes new beginnings... We are a group of young minds who believe in giving all our efforts into making your wedding: A Dream That Came True.",
    reviews: [
      {
        user: "John Doe",
        comment: "Amazing work! Captured our wedding perfectly.",
        rating: 5,
      },
      {
        user: "Jane Smith",
        comment: "Professional and creative team. Highly recommend!",
        rating: 4.8,
      },
    ],
    isFav: true,
    missionDescription:
      "To capture life's most cherished moments with creativity and precision.",
    services: ["Wedding Photography", "Cinematography", "Photoshoot Packages"],
    images: [
      "https://picsum.photos/300/200?random=1",
      "https://picsum.photos/300/200?random=2",
      "https://picsum.photos/300/200?random=3",
    ],
    location: "Pokhara",
    website: "https://lenscraftstudios.com",
    email: "info@lenscraftstudios.com",
    phoneNumber: "+977-9800000001",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/lenscraftstudios",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/lenscraftstudios",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "MotionFrame Films",
    category: "Videographers",
    description:
      "MotionFrame Films specializes in cinematic wedding videos, event highlights, and promotional films. Our team delivers visually stunning and emotionally moving content.",
    reviews: [
      {
        user: "Emily Clark",
        comment:
          "The cinematography was breathtaking. We relive our wedding every time we watch it.",
        rating: 5,
      },
      {
        user: "Michael Lee",
        comment:
          "Excellent attention to detail and story. Highly professional.",
        rating: 4.9,
      },
    ],
    isFav: false,
    missionDescription: "Creating cinematic memories that last a lifetime.",
    services: [
      "Wedding Cinematography",
      "Event Highlights",
      "Promotional Films",
    ],
    images: [
      "https://picsum.photos/300/200?random=1",
      "https://picsum.photos/300/200?random=2",
      "https://picsum.photos/300/200?random=3",
    ],
    location: "Kathmandu",
    website: "https://motionframefilms.com",
    email: "contact@motionframefilms.com",
    phoneNumber: "+977-9800000002",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/motionframefilms",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/motionframefilms",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "GlamourWave Salon",
    category: "Hair and Beauty",
    description:
      "GlamourWave Salon offers premium hair and beauty services tailored to make you look your best for any occasion. Specializing in bridal makeovers and event styling.",
    reviews: [
      {
        user: "Sophia Verma",
        comment:
          "Loved the bridal look they created for my wedding. Highly skilled team.",
        rating: 5,
      },
      {
        user: "Anna Rai",
        comment: "Amazing hair and makeup. I felt like a queen!",
        rating: 4.7,
      },
    ],
    isFav: true,
    missionDescription: "Empowering clients to feel confident and beautiful.",
    services: ["Bridal Makeup", "Event Hair Styling", "Makeover Packages"],
    images: [
      "https://picsum.photos/300/200?random=1",
      "https://picsum.photos/300/200?random=2",
      "https://picsum.photos/300/200?random=3",
    ],
    location: "Butwal",
    website: "https://glamourwavesalon.com",
    email: "info@glamourwavesalon.com",
    phoneNumber: "+977-9800000003",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/glamourwavesalon",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/glamourwavesalon",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "PetalBloom Designs",
    category: "Florists",
    description:
      "PetalBloom Designs is a floral design studio known for its elegant and artistic flower arrangements. We specialize in weddings and corporate events.",
    reviews: [
      {
        user: "Olivia Shaw",
        comment:
          "The flower arrangements were beautiful and added magic to our wedding day.",
        rating: 5,
      },
      {
        user: "Avery Singh",
        comment: "Unique designs and fresh flowers. A pleasure to work with.",
        rating: 4.6,
      },
    ],
    isFav: false,
    missionDescription:
      "Crafting beautiful floral experiences for every event.",
    services: [
      "Wedding Flower Arrangements",
      "Corporate Event Flowers",
      "Custom Bouquets",
    ],
    images: [
      "https://picsum.photos/300/200?random=1",
      "https://picsum.photos/300/200?random=2",
      "https://picsum.photos/300/200?random=3",
    ],
    location: "Pokhara",
    website: "https://petalbloomdesigns.com",
    email: "contact@petalbloomdesigns.com",
    phoneNumber: "+977-9800000004",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/petalbloomdesigns",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/petalbloomdesigns",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "SweetCrave Bakery",
    category: "Cakes and Bakeries",
    description:
      "SweetCrave Bakery is your go-to destination for delicious cakes and pastries. Specializing in custom wedding cakes and dessert catering for events.",
    reviews: [
      {
        user: "Daniel Wright",
        comment:
          "The wedding cake was both stunning and delicious! Exceeded our expectations.",
        rating: 5,
      },
      {
        user: "Elena Johnson",
        comment: "Best bakery in town. Their pastries are to die for!",
        rating: 4.9,
      },
    ],
    isFav: true,
    missionDescription: "Baking love into every bite.",
    services: [
      "Wedding Cakes",
      "Event Dessert Catering",
      "Custom Pastry Orders",
    ],
    images: [
      "https://picsum.photos/300/200?random=1",
      "https://picsum.photos/300/200?random=2",
      "https://picsum.photos/300/200?random=3",
    ],
    location: "Butwal",
    website: "https://sweetcravebakery.com",
    email: "orders@sweetcravebakery.com",
    phoneNumber: "+977-9800000005",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/sweetcravebakery",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/sweetcravebakery",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Fotos Factory",
    category: "Photographers",
    location: "Dhalku, Kathmandu",
    description:
      "Fotos Factory offers professional photography services specializing in capturing memorable moments with creative and artistic flair.",
    reviews: [
      {
        user: "Ravi Sharma",
        comment: "Incredible service and fantastic photos. Highly recommended!",
        rating: 4.8,
      },
      {
        user: "Priya Thapa",
        comment: "Great experience and very professional team.",
        rating: 4.7,
      },
    ],
    isFav: false,
    missionDescription:
      "To provide high-quality photography services that capture the essence of every moment.",
    services: [
      "Event Photography",
      "Portrait Photography",
      "Commercial Photography",
    ],
    images: [
      "https://picsum.photos/300/200?random=4",
      "https://picsum.photos/300/200?random=5",
      "https://picsum.photos/300/200?random=6",
    ],
    website: "https://fotosfactory.com",
    email: "info@fotosfactory.com",
    phoneNumber: "+977-9800000006",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/fotosfactory",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/fotosfactory",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Glamour Touch Studio",
    category: "Hair and Beauty",
    location: "Chabahil, Kathmandu",
    description:
      "Glamour Touch Studio offers a range of beauty and grooming services with a focus on elegance and style. Ideal for special occasions and everyday beauty needs.",
    reviews: [
      {
        user: "Suman Shrestha",
        comment: "Excellent service and very skilled staff.",
        rating: 4.9,
      },
      {
        user: "Nisha Kumari",
        comment: "Love the personalized attention and results!",
        rating: 4.8,
      },
    ],
    isFav: true,
    missionDescription: "Enhancing your beauty with a touch of glamour.",
    services: ["Bridal Makeup", "Hair Styling", "Skincare Treatments"],
    images: [
      "https://picsum.photos/300/200?random=7",
      "https://picsum.photos/300/200?random=8",
      "https://picsum.photos/300/200?random=9",
    ],
    website: "https://glamourtouchstudio.com",
    email: "contact@glamourtouchstudio.com",
    phoneNumber: "+977-9800000007",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/glamourtouchstudio",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/glamourtouchstudio",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Glamorous Events",
    category: "Event Planners",
    location: "Lalitpur, Kathmandu",
    description:
      "Magic Moments Decor specializes in creating stunning decor for weddings and events. From floral arrangements to complete event setups, we bring your vision to life.",
    reviews: [
      {
        user: "Deepak Gupta",
        comment: "Transformative decor and exceptional service.",
        rating: 4.9,
      },
      {
        user: "Anjali Rathi",
        comment: "Amazing decor that made our event unforgettable!",
        rating: 4.8,
      },
    ],
    isFav: false,
    missionDescription:
      "Turning events into magical moments with beautiful decor.",
    services: ["Wedding Decor", "Event Setup", "Custom Designs"],
    images: [
      "https://picsum.photos/300/200?random=10",
      "https://picsum.photos/300/200?random=11",
      "https://picsum.photos/300/200?random=12",
    ],
    website: "https://magicmomentsdecor.com",
    email: "info@magicmomentsdecor.com",
    phoneNumber: "+977-9800000008",
    socials: [
      {
        type: "facebook",
        link: "https://facebook.com/magicmomentsdecor",
        icon: FaFacebook,
      },
      {
        type: "instagram",
        link: "https://instagram.com/magicmomentsdecor",
        icon: FaInstagram,
      },
    ],
  },
];

// testimonials
export const testimonials = [
  {
    clientName: "Sita Rai",
    companyName: "Himalaya Weddings",
    testimonial:
      "Babina’s event management app made our wedding planning stress-free. From guest list management to vendor coordination, everything was perfectly organized through the platform. Our big day went smoothly, and we couldn’t have asked for a better experience.",
    image: "https://picsum.photos/200?random=1",
  },
  {
    clientName: "Rajesh Kumar",
    companyName: "Nepal Event Planners",
    testimonial:
      "The web app Babina built for us played a vital role in organizing our corporate party. We were able to manage RSVPs, seating arrangements, and even live updates on the day of the event. It was a major success thanks to her work!",
    image: "https://picsum.photos/200?random=2",
  },
  {
    clientName: "Anita Sharma",
    companyName: "Everest Design Studio",
    testimonial:
      "Our annual seminar went off without a hitch thanks to the event app Babina developed. It allowed us to streamline registrations, provide real-time schedules, and facilitate Q&A sessions. Both the attendees and speakers were impressed with the seamless experience.",
    image: "https://picsum.photos/200?random=3",
  },
  {
    clientName: "Binod Thapa",
    companyName: "Kathmandu Innovations",
    testimonial:
      "The commercial expo we organized was a huge success, largely due to Babina’s web platform. It handled exhibitor registrations, ticketing, and attendee engagement flawlessly. We’re grateful for her expertise in making the event a success.",
    image: "https://picsum.photos/200?random=4",
  },
  {
    clientName: "Pratik Shrestha",
    companyName: "Nepal Wedding Events",
    testimonial:
      "The wedding app Babina developed was a game-changer. We could manage everything from guest lists to catering services in one place. Our clients loved how easy it was to stay on top of things, and the wedding day went off perfectly!",
    image: "https://picsum.photos/200?random=5",
  },
  {
    clientName: "Manisha Tamang",
    companyName: "Party & Event Creations",
    testimonial:
      "Our New Year's Eve party was a hit, thanks to the web app Babina built. It allowed guests to RSVP, view event details, and check-in seamlessly. It made the whole event much easier to manage and enjoy.",
    image: "https://picsum.photos/200?random=6",
  },
];

export const blogs = [
  {
    imageUrl: "https://picsum.photos/201",
    altText: "hairstyle",
    title: "Trending Hair Colors for 2024",
    description:
      "Discover the latest trends in hair colors for this year! From bold reds to subtle pastels, find out what shades are in style...",
    publishedDate: "2024-01-15",
    likeCount: 0,
  },
  {
    imageUrl: "https://picsum.photos/202",
    altText: "bob hairstyle",
    title: "The Classic Bob: A Timeless Choice",
    description:
      "The bob hairstyle is a classic that never goes out of style. Learn how to choose the right bob for your face shape...",
    publishedDate: "2024-02-05",
    likeCount: 0,
  },
  {
    imageUrl: "https://picsum.photos/203",
    altText: "wavy hairstyle",
    title: "Embracing Your Natural Waves",
    description:
      "Learn how to enhance and embrace your natural waves with these expert tips and product recommendations...",
    publishedDate: "2024-03-10",
    likeCount: 0,
  },
  {
    imageUrl: "https://picsum.photos/204",
    altText: "braided hairstyle",
    title: "Creative Braids for Every Occasion",
    description:
      "From casual outings to formal events, discover creative braiding techniques that will elevate your look...",
    publishedDate: "2024-04-20",
    likeCount: 0,
  },
];
