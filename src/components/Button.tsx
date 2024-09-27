import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // onClick is optional
  color?: "red" | "blue" | "green" | "yellow" | "white";
  disabled?: boolean; // Add disabled prop
  className?: string;
}

const Button = ({
  children,
  onClick,
  color = "red",
  disabled = false,
  className = "",
}: ButtonProps) => {
  // Define color classes based on the color prop
  const colorClasses = {
    red: "bg-red-400 hover:bg-red-100 text-white",
    blue: "bg-blue-400 hover:bg-blue-100 text-white",
    green: "bg-green-400 hover:bg-green-100 text-white",
    yellow: "bg-yellow-400  text-black/50",
    white: "bg-gray-200 border border-black/10 text-gray-600 hover:bg-gray-100",
  };
  const disabledClasses = "opacity-50 cursor-default";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`${colorClasses[color]} ${
        disabled ? disabledClasses : ""
      } font-bold py-2 px-10 rounded-lg transition-all duration-300 ease-in-out ${className}`} // Append custom className here
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
