import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    { label, id, type = "text", required = true, className = "", ...props },
    ref
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          required={required}
          className={`mt-1 w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
