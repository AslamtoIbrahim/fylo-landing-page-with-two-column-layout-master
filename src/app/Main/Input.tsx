'use client'
import React, { useRef, useState } from 'react'
import Button from './Button';

 type prop = {
    styles?: string,
    errorStyle?: string;
    singupStyles?: string
 }

const Input = ({singupStyles,styles, errorStyle}:prop) => {
  const useref = useRef<HTMLInputElement | null>(null)
  const [isValid, setIsValid] = useState(true);
  const validateEmail = () =>{
    const email = useref.current?.value || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValid(emailRegex.test(email));
  }
  return (
    <div className={`w-full md:w-fit lg:w-full flex flex-col gap-6 md:flex-row lg:gap-8 ${singupStyles}`}>

      <div className={`bg-white py-3 rounded-sm flex items-start md:w-full relative 
      border-[1px]  ${!isValid ? `border-accent-error` : `border-primary-dark-blue ${styles}`}`}>
        <input ref={useref} className='placeholder-primary-dark-blue/60 text-primary-footer-bg  mx-6 w-full outline-none border-none   ' type="text" placeholder='eamil@example.com' />
      {!isValid && <p className={` text-accent-error ${errorStyle} text-[0.6rem] lg:text-sm text-start ml-2  
      absolute left-0 -bottom-5 lg:-bottom-6`}>Please enter a valid email address</p>}
      </div>
      <Button  styles="w-full lg:w-fit lg:px-20 " onclick={validateEmail} />
    </div>
  )
}

export default Input
