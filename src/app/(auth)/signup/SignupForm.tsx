"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

// Define the schema for form validation
const schema = z
  .object({
    username: z.string().nonempty("Username is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Email format is not valid"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // set the error on the confirmPassword field
  });

// Define the form values type
type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const SignupForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-md mx-auto p-6 "
    >
      <div className="form-control mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username")}
          className={`mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400 ${
            errors.username ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your username"
        />
        <p className="error text-red-500 text-xs mt-1">
          {errors.username?.message}
        </p>
      </div>

      <div className="form-control mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your email"
        />
        <p className="error text-red-500 text-xs mt-1">
          {errors.email?.message}
        </p>
      </div>

      <div className="form-control mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={`mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your password"
        />
        <p className="error text-red-500 text-xs mt-1">
          {errors.password?.message}
        </p>
      </div>

      <div className="form-control mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          className={`mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400 ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Confirm your password"
        />
        <p className="error text-red-500 text-xs mt-1">
          {errors.confirmPassword?.message}
        </p>
      </div>

      <Button className="w-full">Create Account</Button>
    </form>
  );
};

export default SignupForm;
