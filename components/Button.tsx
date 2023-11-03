"use client";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          "p-4 border border-green-700 rounded-md flex items-center gap-x-2 justify-between disabled:cursor-not-allowed text-sm disabled:border-neutral-400 scale-90 hover:scale-100 transition",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
