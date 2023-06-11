import Link from "next/link";
import React from "react";
import { LogoIcon } from "./Icons";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="w-16 h-16   flex items-center justify-center border-hidden
         hover:border-dark  hover:text-dark"
      >
        <LogoIcon className=" fill-dark hover:fill-dark  dark:fill-light hover:scale-110 " />
      </Link>
    </div>
  );
};

export default Logo;
