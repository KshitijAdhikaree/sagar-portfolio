import Link from "next/link";
import React from "react";
import { LogoIcon } from "./Icons";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <LogoIcon className="h-14 w-16 fill-dark hover:fill-dark items-center dark:fill-light hover:scale-110" />
      </Link>
    </div>
  );
};

export default Logo;
