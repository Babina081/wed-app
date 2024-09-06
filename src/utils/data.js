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
    category: "Photographers & Videographers",
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
  },
  {
    name: "MotionFrame Films",
    category: "Videographers",
    location: "Kathmandu",
  },
  {
    name: "GlamourWave Salon",
    category: "Hair and Beauty",
    location: "Butwal",
  },
  {
    name: "Elegance Couture",
    category: "Boutiques",
    location: "Kathmandu",
  },
  {
    name: "PetalBloom Designs",
    category: "Florists",
    location: "Pokhara",
  },
  {
    name: "SweetCrave Bakery",
    category: "Cakes and Bakeries",
    location: "Butwal",
  },
  {
    name: "Serenity Halls",
    category: "Venues",
    location: "Kathmandu",
  },
  {
    name: "Elite Events Co.",
    category: "Event Planners",
    location: "Pokhara",
  },
  {
    name: "JourneyMasters Travel",
    category: "Travel Experts",
    location: "Butwal",
  },
  {
    name: "JourneyMasters Travel",
    category: "Photographers",
    location: "Butwal",
  },
];

export const eventCompaniesDetails = [
  {
    name: "LensCraft Studios",
    category: "Photographers",
    description:
      "Weddings are special. Of all the days in your life, your wedding day is the day that symbolizes new beginnings. A day that promises fresh start and sweet love. A day which joins you to a different person, a different family and a whole new life. A day where joyous celebrations and misty farewells go hand in hand. A day just for you and your beloved. We genuinely believe in making this day special for you.We are committed to make our client's day the most memorable one with what we know best. Wedding photography and videography services at a best price. For the past few years, we have been a part of many marriages, capturing your special moments and smiles. And it is the love and affection from our past and present clients that make us Nepal’s most favored Premium Wedding Photography and Videography Company. More than a company, we are a group of young minds who believe in giving all our efforts into making your wedding: A Dream That Came True.",
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
      "/images/lenscraft-1.jpg",
      "/images/lenscraft-2.jpg",
      "/images/lenscraft-3.jpg",
    ],
    location: "Pokhara",
    website: "https://lenscraftstudios.com",
    email: "info@lenscraftstudios.com",
    phoneNumber: "+977-9800000001",
    socials: {
      facebook: "https://facebook.com/lenscraftstudios",
      instagram: "https://instagram.com/lenscraftstudios",
    },
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
      "/images/motionframe-1.jpg",
      "/images/motionframe-2.jpg",
      "/images/motionframe-3.jpg",
    ],
    location: "Kathmandu",
    website: "https://motionframefilms.com",
    email: "contact@motionframefilms.com",
    phoneNumber: "+977-9800000002",
    socials: {
      facebook: "https://facebook.com/motionframefilms",
      instagram: "https://instagram.com/motionframefilms",
    },
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
    images: ["/images/glamourwave-1.jpg", "/images/glamourwave-2.jpg"],
    location: "Butwal",
    website: "https://glamourwavesalon.com",
    email: "info@glamourwavesalon.com",
    phoneNumber: "+977-9800000003",
    socials: {
      facebook: "https://facebook.com/glamourwavesalon",
      instagram: "https://instagram.com/glamourwavesalon",
    },
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
    images: ["/images/petalbloom-1.jpg", "/images/petalbloom-2.jpg"],
    location: "Pokhara",
    website: "https://petalbloomdesigns.com",
    email: "contact@petalbloomdesigns.com",
    phoneNumber: "+977-9800000004",
    socials: {
      facebook: "https://facebook.com/petalbloomdesigns",
      instagram: "https://instagram.com/petalbloomdesigns",
    },
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
    images: ["/images/sweetcrave-1.jpg", "/images/sweetcrave-2.jpg"],
    location: "Butwal",
    website: "https://sweetcravebakery.com",
    email: "orders@sweetcravebakery.com",
    phoneNumber: "+977-9800000005",
    socials: {
      facebook: "https://facebook.com/sweetcravebakery",
      instagram: "https://instagram.com/sweetcravebakery",
    },
  },
];
