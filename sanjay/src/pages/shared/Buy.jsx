import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    location: "Beverly Hills, CA",
    price: "$3,500,000",
    image: "https://ik.imagekit.io/1in7nqs7x/aj-alao-cstkc_42P7M-unsplash.jpg?updatedAt=1722225230967",
    description: "A beautiful villa with a stunning view and modern amenities."
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    location: "New York, NY",
    price: "$1,200,000",
    image: "https://ik.imagekit.io/1in7nqs7x/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1722218671055",
    description: "An elegant apartment located in the heart of New York City."
  },
  {
    id: 3,
    title: "Modern Apartment in New York",
    location: "New York, NY",
    price: "$1,200,000",
    image: "https://ik.imagekit.io/1in7nqs7x/zzz-ictKkkzt4Bk-unsplash.jpg?updatedAt=1722218668399",
    description: "An elegant apartment located in the heart of New York City."
  }
  // Add more properties as needed
];

const carouselImages = [
  "https://ik.imagekit.io/1in7nqs7x/zoshua-colah-5ufwwSRjEp0-unsplash.jpg?updatedAt=1722218674116",
  "https://ik.imagekit.io/1in7nqs7x/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1722218671055",
  "https://ik.imagekit.io/1in7nqs7x/zzz-ictKkkzt4Bk-unsplash.jpg?updatedAt=1722218668399",
  "https://ik.imagekit.io/1in7nqs7x/jametlene-reskp-32hGYh_7gn4-unsplash.jpg?updatedAt=1722218694988"
];

export const Buy = () => {
  const [search, setSearch] = useState('');

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      
      {/* Carousel */}
      <div className="container mx-auto px-4 py-8">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Carousel ${index}`} className="w-full h-[30rem] object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      <div className=" p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Real Estate Platform</h2>
          <p className="text-gray-700 text-lg w-[60rem]">
            Finding your dream home has never been easier. Browse through our extensive collection of properties and discover the perfect place for you and your family. Our platform offers detailed information, stunning images, and all the tools you need to make an informed decision.
          </p>
        </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Find Your Dream Home</h2>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search by location or property type"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow"
            />
            <Button className="bg-blue-500 text-white hover:bg-blue-700">Search</Button>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="container mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map(property => (
          <div key={property.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-gray-700">{property.location}</p>
              <p className="text-gray-900 font-bold">{property.price}</p>
              <p className="mt-2 text-gray-600">{property.description}</p>
              <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-700">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <button className='mt-[2rem] h-[3rem] w-[8rem] bg-blue-700 text-white mb-[2rem] hover:bg-blue-500'>Read More</button>
    </div>
    </>
  );
};
