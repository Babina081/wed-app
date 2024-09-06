"use client";
import Heading from "@/components/Heading";
import { useParams } from "next/navigation";
import React from "react";

const ServicePage = () => {
  const { service } = useParams();
  return (
    <div className="text-3xl font-bold">
      <Heading>{service}</Heading> 
    </div>
  );
};

export default ServicePage;
