import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'
import Photo1 from'../../public/Project_1_Page_1.jpg'
import Photo2 from'../../public/Project_1_Page_2.jpg'
import Photo3 from'../../public/Project_1_Page_3.jpg'



const Popup = () => {
   
   const [isOpen, setIsOpen] = useState(false)
   
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
         
      }
   }
   return (
      <div>
         <button onClick={() => setIsOpen(true)}> View </button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles} >
           
            <div className='dark:bg-dark dark:text-light -mx-5 -my-5 px-6 py-6 '>
         <div className='h-[450px] w-[900px] overflow-y-auto'>
        
    <html>
    <head>
     <title>Popup window</title>
    </head>
    <body>
     <div>
      <Image src={Photo1}/>
      <Image src={Photo2}/>
      <Image src={Photo3}/>

     </div>
    </body>
   </html> 
   

         </div>
          <div className="flex justify-center mt-4">
          <button onClick={() => setIsOpen(false)} className=' rounded-full bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                       sm:px-4 sm:text-base flex items-center'>Close</button>
          </div>       
            </div>          
         </Modal>
      </div>
   )
}
export default Popup

