import React from "react";

const ScrollDown = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 animate-bounce">
      
      <div className="relative flex items-center justify-center">
        
        {/* Circle Background */}
        <div className="
          absolute 
          w-10 h-10 
          rounded-full 
          bg-dark dark:bg-light
          backdrop-blur-md
          border border-light dark:border-dark
        " />

        {/* Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-light dark:text-dark relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

    </div>
  );
};

export default ScrollDown;