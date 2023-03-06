import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="bg-primary flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Send Me a Message</h1>
      <div className="bg-white p-8 rounded-md shadow-lg w-1/2">
        
        <div className="flex mb-4 justify-center">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-gray-500 hover:text-primary mr-4" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-gray-500 hover:text-primary mr-4" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-gray-500 hover:text-primary mr-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-gray-500 hover:text-primary" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary"
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-400 hover:bg-green-500 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md mr-4"
              type="submit"
            >
              Send
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
