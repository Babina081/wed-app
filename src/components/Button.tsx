import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-red-400 text-white font-bold hover:bg-red-100 py-2 px-10 rounded-lg transition-all duration-300 ease-in-out ">
      {children}
    </button>
  );
};

export default Button;
