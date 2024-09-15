import { SubmitHandler, useForm } from "react-hook-form";
import { ImCancelCircle } from "react-icons/im";
import Button from "./Button";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewData>();

  const onSubmitHandler: SubmitHandler<ReviewData> = (data) => {
    // Pass the form data to the onSubmit handler
    onSubmit(data);

    // Clear the form fields
    reset();

    // Close modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name*</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating*</label>
            <select
              {...register("rating", { required: "Rating is required" })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
            {errors.rating && (
              <p className="text-red-500 text-xs mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Review Message*
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button color="blue">Submit</Button>
            <Button onClick={onClose} color="red">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
