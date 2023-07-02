import React, { useState } from 'react'
import Modal from 'react-modal'
import {GrView} from 'react-icons/gr'
import BackgroundImage from '../../public/images/backgroundHome.jpg'
import Vercel from '../../public/vercel.svg'


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
         <button onClick={() => setIsOpen(true)}> <div className='flex flex-row items-center'>View &nbsp;<span><GrView/></span> </div></button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
           
            <h1>Modal Content</h1>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
         </Modal>
      </div>
   )
}
export default Popup