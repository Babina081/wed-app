import {
  FaThumbsUp,
  FaStar,
  FaRocket,
  FaTags,
  FaDollarSign,
  FaSmile,
} from "react-icons/fa"; // Example icons from react-icons

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
