"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Email format is not valid"),
  password: z.string().nonempty("Password is required"),
});

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
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
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
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
          type="text"
          id="username"
          {...register("password", { required: "Password is required" })}
          className={`mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your password"
        />
        <p className="error text-red-500 text-xs mt-1">
          {errors.password?.message}
        </p>
      </div>

      <Button className="w-full" color="red">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
