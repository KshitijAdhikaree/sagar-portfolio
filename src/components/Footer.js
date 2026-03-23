import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
      <Layout className="py-8 flex flex-col items-center justify-between text-center lg:flex-col lg:py-6 ">
        <span className="text-xs mt-3 opacity-80">
          © {currentYear}{" "}
          <Link
            href="https://github.com/sagara92"
            className="underline underline-offset-2"
            target="_blank"
          >
            Sagar Adhikari
          </Link>
          . All rights reserved.
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
