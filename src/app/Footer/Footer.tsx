import React from 'react'
import Contacts from './Contacts'
import Links from './Links'
import Logo from '../Header/Logo'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='padx py-26 lg:py-32 xl:py-38 bg-primary-dark-blue flex flex-col  gap-6 lg:gap-12 xl:gap-16'>
      <Logo styles='w-24 lg:w-32 xl:w-40 invert brightness-0 contrast-150 ' />
      <section className='flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:items-start '>
        <Contacts />
        <Links />
        <Icons />
      </section>
    </div>
  )
}

export default Footer
