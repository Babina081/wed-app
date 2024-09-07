import React, { useState } from "react";
import Button from "./Button";
import { ImCancelCircle } from "react-icons/im";

// Define the type for the review form data
export interface ReviewData {
  name: string;
  email: string;
  rating: number;
  message: string;
}

// Define the props for the ReviewModal component
interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReviewData) => void; // Use the ReviewData type here
}

// ReviewModal Component
const ReviewModal = ({ isOpen, onClose, onSubmit }: ReviewModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Pass the form data to the onSubmit handler
    onSubmit({
      name,
      email,
      rating,
      message,
    });

    // Reset form and close modal
    setName("");
    setEmail("");
    setRating(1);
    setMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Write a Review for Fotomoon
        </h2>
        <button
          className="absolute top-7 right-7 text-gray-600 hover:text-gray-900 flex items-center justify-center"
          onClick={onClose}
        >
          <ImCancelCircle size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating*</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Review Message*
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Note: Your review may take up to 24 hours to appear on the website.
          </p>

          <div className="flex justify-end gap-2">
            <Button onClick={onClose} color="red">
              Cancel
            </Button>
            <Button color="blue">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
