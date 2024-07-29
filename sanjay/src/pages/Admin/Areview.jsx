import React from 'react';
// import { StarIcon } from '@heroicons/react/solid';
import { Star } from 'lucide-react';
export const Areview = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      type: "Property",
      content: "Great property! The location is perfect and the amenities are top-notch. Highly recommend!",
      date: "2024-07-01",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "Agent",
      content: "The agent was very professional and helpful. Made the entire process smooth and stress-free.",
      date: "2024-06-20",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Johnson",
      type: "Website",
      content: "The website is very user-friendly and has all the information I needed. Great experience!",
      date: "2024-07-15",
      rating: 4
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">User Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-800">{review.name}</h2>
              <span className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700 mb-2"><strong>Type:</strong> {review.type}</p>
            <p className="text-gray-700 mb-4">{review.content}</p>
            <div className="flex items-center">
              <div className="flex text-yellow-500">
                {Array(review.rating).fill().map((_, i) => (
                  <Star key={i} className="w-5 h-5" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{review.rating} out of 5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Tailwind CSS classes and Heroicons import
// import { StarIcon } from '@heroicons/react/solid';
