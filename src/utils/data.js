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
