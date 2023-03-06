import React from "react";
import pdfData from "../../staticFile/pdfData";
import { FaLink } from "react-icons/fa";

function Publications() {
  return (
    <div className="bg-primary text-center min-h-screen px-20 py-6">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-8">Publications</h1>
        <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pdfData.map((pdf, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#197d8c] p-4 rounded-lg gap-4"
            >
              <h2 className="text-xl font-bold mb-2">{pdf.name}</h2>
              <p className="mb-2">{pdf.description}</p>
              <a
                href={pdf.Url}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#0b2e33] hover:bg-[#133e45] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaLink className="mr-2" />
                Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
