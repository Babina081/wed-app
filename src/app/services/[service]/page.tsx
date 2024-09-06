"use client";
import Heading from "@/components/Heading";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const ServicePage = () => {
  // Use useParams to get the dynamic parameter
  const { service } = useParams();
  return (
    <div className="text-3xl font-bold">
      <Heading>{service}</Heading> {/* Clean up service name */}
    </div>
  );
};

export default ServicePage;
