import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: "blue" | "pink" | "white";
  variant: "primary" | "secondary" | "outline";
  size: "large" | "medium" | "small" | "extra-small";
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, variant, size }) => {
  const primaryBtn = `${
    color === "white" ? "text-pink-500" : "text-white"
  } bg-${color}-500 rounded-lg shadow-lg cursor-pointer`;
  const secondaryBtn = `${
    color === "white" ? "text-pink-500" : "text-white"
  } bg-${color}-300 rounded-lg shadow-lg cursor-pointer`;
  const outlineBtn = `${
    color === "white" ? "text-pink-500" : "text-black"
  } bg-transparent border-${color}-500 text-black rounded-lg shadow-lg cursor-pointer`;

  const largeSize = "px-8 py-4 text-xl";
  const mediumSize = "px-6 py-3 text-lg";
  const smallSize = "px-4 py-2 text-md";
  const extraSmallSize = "px-2 py-1 text-sm";

  const variantClasses =
    variant === "primary"
      ? primaryBtn
      : variant === "secondary"
      ? secondaryBtn
      : outlineBtn;

  const sizeClasses =
    size === "large"
      ? largeSize
      : size === "medium"
      ? mediumSize
      : size === "small"
      ? smallSize
      : extraSmallSize;

  return (
    <button className={`${variantClasses} ${sizeClasses}`}>{children}</button>
  );
};

export default Button;
