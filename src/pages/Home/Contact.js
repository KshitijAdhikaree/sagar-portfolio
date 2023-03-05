import React from "react";

function Contact() {
  return (
    <div className="bg-primary min-h-screen">
      <h1 className="text-center text-3xl text-white">Send me a review </h1>
      <div class="flex justify-center items-center h-screen">
        <form
          method="post"
          action="mailto:sagar-adhikaree@gmail.com"
          class="w-1/2 bg-white p-6 rounded-lg shadow-md"
          encType="text/plain"
        >
          
          <div class="mb-4">
            <label class="block text-black font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-black font-bold mb-2" for="subject">
             Subject
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div class="mb-4">
            <label class="block text-black font-bold mb-2" for="message">
              Message
            </label>
            <textarea
              class="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
