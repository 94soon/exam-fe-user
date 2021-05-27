import React from "react";

export default function Button({
  disabled = false,
  className = "",
  children,
  primary = false,
  onClick = () => {},
  block = false,
}) {
  return (
    <button
      disabled={disabled}
      className={`
          ${className}
          font-brand text-base font-bold leading-button h-12 bg-violet hover:bg-light-violet rounded-button
          ${
            primary
              ? "text-white"
              : "text-violet bg-opacity-10 hover:bg-opacity-35 dark:text-white dark:bg-white dark:bg-opacity-10"
          }
            ${block ? "w-full" : "w-35"}
            ${disabled && "cursor-not-allowed opacity-50"}
          
          `}
    >
      {children}
    </button>
  );
}
