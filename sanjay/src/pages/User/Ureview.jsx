import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';

export const Ureview = () => {
  const [selectedType, setSelectedType] = useState("Property");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Review submitted:", { name, selectedType, review });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <motion.div 
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Write a Review</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-lg font-medium text-gray-700">
              Review Type
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Property">Property</option>
              <option value="Agent">Agent</option>
              <option value="Website">Website</option>
            </select>
          </div>
          <div>
            <label htmlFor="review" className="block text-lg font-medium text-gray-700">
              Your Review
            </label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={5}
              required
            />
          </div>
          <div>
            <Button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Submit Review
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
