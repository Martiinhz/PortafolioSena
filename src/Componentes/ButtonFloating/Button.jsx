import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import '../ButtonFloating/Button.css'

export const Button = () => {
  return (
    <>
    <a href="https://wa.link/siklqf" target="_blank" rel="noopener noreferrer" className='button'>
    <FaWhatsapp className='IconWats' />
    </a>
    </>
  )
}
