// import React, { useState } from "react";
// import pdfData from "../../staticFile/pdfData";
// import { FaLink } from "react-icons/fa";

// function Publications() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pdfsPerPage] = useState(9);

//   // Get current pdfs
//   const indexOfLastPdf = currentPage * pdfsPerPage;
//   const indexOfFirstPdf = indexOfLastPdf - pdfsPerPage;
//   const currentPdfs = pdfData.slice(indexOfFirstPdf, indexOfLastPdf);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="bg-primary text-center min-h-screen px-20 py-6">
//       <div className="container mx-auto px-4 py-6">
//         <h1 className="text-4xl font-bold mb-8">Publications</h1>
//         <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {currentPdfs.map((pdf, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-white p-4 rounded-lg gap-4"
//             >
//               <h2 className="text-xl font-bold mb-2">{pdf.name}</h2>
//               <p className="mb-2">{pdf.description}</p>
//               <a
//                 href={pdf.Url}
//                 className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <FaLink className="mr-2" />
//                 Link
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="mt-8">
//           <Pagination
//             itemsPerPage={pdfsPerPage}
//             totalItems={pdfData.length}
//             paginate={paginate}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Publications;

// // Pagination component
// function Pagination({ itemsPerPage, totalItems, paginate }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="mt-4">
//       <ul className="flex justify-center">
//         {pageNumbers.map((number) => (
//           <li key={number} className="mx-1">
//             <a
//               href="#!"
//               onClick={() => paginate(number)}
//               className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
//             >
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


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
              className="flex flex-col bg-white p-4 rounded-lg gap-4"
            >
              <h2 className="text-xl font-bold mb-2">{pdf.name}</h2>
              <p className="mb-2">{pdf.description}</p>
              <a
                href={pdf.Url}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
