"use client";
import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import ReviewModal, { ReviewData } from "./ReviewModal";

// Define the shape of each review
interface Review {
  user: string;
  comment: string;
}

// Define the shape of the company prop
interface Company {
  reviews: Review[];
}

// Define the props for the Review component
interface ReviewProps {
  company: Company;
}

const Review = ({ company }: ReviewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState(company.reviews);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitReview = (reviewData: ReviewData) => {
    console.log("Review submitted:", reviewData);
    // Here you can add logic to submit the review data to a server
    const newReview: Review = {
      user: reviewData.name,
      comment: reviewData.message,
    };
    // Add the new review to the existing reviews
    setReviews((prevReviews) => [...prevReviews, newReview]);
    console.log("Review submitted:", reviewData);
  };

  return (
    <div id="reviews" className="flex flex-col gap-4 bg-slate-300/10 p-4 mt-4">
      <div className="flex items-center justify-between">
        <Heading>Recommendations and Reviews</Heading>
        <div>
          <span className="font-bold text-lg">{reviews.length}</span> Reviews
        </div>
      </div>
      {company.reviews && company.reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <p className="font-semibold">{review.user}</p>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">12 May 2024</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
      <Button onClick={handleOpenModal}>Write your own review</Button>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitReview}
      />
    </div>
  );
};

export default Review;
