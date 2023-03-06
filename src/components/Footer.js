import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex flex-col items-center">
          <p className="text-center text-gray-400">
            Designed and Developed by:
          </p>
          <a
            href="https://kshitijadhikaree.com.np/"
            className="text-indigo-500 hover:text-indigo-400"
          >
            Kshitij Adhikaree
          </a>
        </div>
        <div className="flex flex-row justify-center gap-4 pt-4">
          <a
            href="https://github.com/"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaGithub size="1.5em" />
          </a>
          <a
            href="https://github.com/"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaLinkedin size="1.5em" />
          </a>
          <a
            href="https://github.com/"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaTwitter size="1.5em" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
